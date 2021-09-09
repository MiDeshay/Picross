import Tile from "./tile";

class Board{
    constructor(size, puzzleObject){
        this.puzzleObject = puzzleObject;
        this.size = size
        this.winning = false;
        this.grid = this.makeGrid()
        this.makeHints.bind(this)()

    }

    async winTheGame(){
        if (!this.winning){
            this.winning = true;
            const sleep = function(milliseconds){
                return new Promise(function(resolve){
                    setTimeout(resolve, milliseconds);
                })
            }
            for(let i = 0; i < this.size; i++){
                for(let j = 0; j < this.size; j++){
                    let tile = this.grid[i][j];

                    if(!tile.solved){
                        if(tile.needToFill){
                            tile.tileEl.style.backgroundColor = "black";
                            
                        }else{
                            let x = document.createTextNode("x")
                            tile.tileEl.appendChild(x);
                        }
                        tile.filled = true;
                        tile.solved = true;
                    }
                    await sleep(50);
                }
            }
            let gameBoard = document.getElementById("game-board");
            gameBoard.click()
     
        }
        
    }


    livesLost(){
        if(this.grid){
            let livesLost = 0;
            for(let i = 0; i < this.size; i++){
                for(let j = 0; j < this.size; j++){
                    if(this.grid[i][j].wrongAnswer){
                        livesLost += 1;
                    }
                }
            }
            
            return livesLost;
        }
       
    }


    
    generateRowHints(){
        let allRowHints = [];

        for(let i = 0; i < this.size; i++){
            let rowToCheck = this.grid[i];
            let rowHints = [];
            let num = 0;
            let counting = false;
            for(let i = 0; i < rowToCheck.length; i++){
                if (rowToCheck[i].needToFill){
                    counting = true;
                    num++;
                } 
                
                if(counting && !rowToCheck[i].needToFill){
                    rowHints.push(num);
                    counting = false;
                    num = 0;
                }
            }

            if (num != 0){
                rowHints.push(num);
            }
            
            allRowHints.push(rowHints.slice().reverse())

        }
        return allRowHints;
    }

    generateColHints(){
        let allColHints = [];

        for(let i = 0; i < this.size; i++){
            let colHints = [];
            let num = 0;
            let counting = false;

            for(let j = 0; j < this.size; j++){
                let colEl = this.grid[j][i];

                if (colEl.needToFill){
                    counting = true;
                    num++;
                }

                if (counting && !colEl.needToFill){
                    colHints.push(num);
                    counting = false;
                    num = 0;
                }

            }

            if (num != 0){
                colHints.push(num);
            }
            //puts in the hints backwards so they can be rendered forwards
            allColHints.push(colHints.slice().reverse());
            
        }
        return allColHints;

    }


    //makeHints() calls two helper functions to add hints
    makeHints(){
        let rowHints = this.generateRowHints.bind(this)();
        let colHints = this.generateColHints.bind(this)();

        this.renderColHints.bind(this)(colHints);
        this.renderRowHints.bind(this)(rowHints);
    }

    renderRowHints(rowHints){
        let size = this.size/2 + 1

        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < size; j++){
                let pos = 0;
                if (this.size % 2 === 0){
                    pos = size -1 - j;
                }else{
                    pos = Math.floor(size-j)
                }
                let hintTile = document.getElementById(`side${i+1}${pos}`);
                if (rowHints[i][j]){
                let hint = document.createTextNode(`${rowHints[i][j]}`);
                hintTile.append(hint);
                }
            }
        }
    }

    renderColHints(colHints){
        let size = this.size/2 + 1

        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < size; j++){
                let pos = 0;
                if (this.size % 2 === 0){
                    pos = size -1 - j;
                }else{
                    pos = Math.floor(size-j)
                }
                
                let hintTile = document.getElementById(`top${i}${pos}`);
                if (colHints[i][j]){
                let hint = document.createTextNode(`${colHints[i][j]}`);
                hintTile.append(hint);
                }                
            }
        }
    }

    //checkTileFill: calls method on tile object which will pass true or false if 
    //the fill attempt was succesful. If correct, the tile objects method will
    //change the tile color and this function will return true. Otherwise, this
    //method will return false and the game object will handle taking away a life
 

    //refactor make grid to create a board with new tiles based on
    // the info in the puzzle string
    makeGrid(){

        let grid = [];
        for(let i = 0; i < this.size; i++){
            let sub = [];
            for(let j = 0; j < this.size; j++){
                let id = `${i+1}${j+1}`;
                let tileEl = document.getElementById(id);
                let tileColor = this.puzzleObject["pictureArray"][i][j];
                let needToFill = this.puzzleObject["logicArray"][i][j];

                if (needToFill === "false"){
                    needToFill = false;
                }
        
                let tile = new Tile(tileEl, tileColor, needToFill);
                sub.push(tile);
               
            }
            grid.push(sub);
        }
        return grid;
    }

    //won? function returns true if board is solved
    won(){
        if(this.grid){
            for(let i = 0; i < this.size; i++){
                for(let j = 0; j < this.size; j++){
                    let tile = this.grid[i][j]
                    if (tile.needToFill && !tile.solved){
                        return false;
                    }
                }
            }
            return true;
        }
        
    }
}
export default Board;