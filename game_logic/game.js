import Board from "./board";

class Game{
    constructor(size, puzzleObject){
        this.size = size;
        this.puzzleName = puzzleObject["name"];
        this.board = new Board(size, puzzleObject);
        this.lives = Math.floor(size/2) + 1;
        this.gameOverLose = false;
        this.gameOverWin = false;
        this.lifeTracker.bind(this)();

        this.gameBoardEl = document.getElementById("game-board");
        this.gameBoardEl.addEventListener("click", function(){
            this.lifeTracker.bind(this)();

            if(!this.gameOverLose){
                this.won.bind(this)();
            }
            
        }.bind(this))

        // let winTheGameButton = document.getElementById("lives-heart");
        // winTheGameButton.addEventListener("click", function(){
        //     this.board.winTheGame()
        // }.bind(this))

    
    }

    lifeTracker(){
        let num = this.lives - this.board.livesLost();

        if(num === 0){
            let gameScreen = document.getElementById("game-screen");
            let gameOverScreen = document.getElementById("game-over-screen");
            let gameFooterLinks = document.getElementsByClassName("game-footer-links")

            for(let i = 0; i < gameFooterLinks.length; i++){
                gameFooterLinks[i].style.display = "none"
            }
            gameOverScreen.style.display = "flex";
            gameScreen.style.display = "none";
            this.gameOverLose = true;
        }else{
            let livesDisplay = document.getElementById("lives");
            if(livesDisplay.firstChild){
                livesDisplay.removeChild(livesDisplay.firstChild);
            }
            let text = `${num}`;
            while(livesDisplay.firstChild){
                livesDisplay.removeChild(livesDisplay.firstChild)
            }
            livesDisplay.append(text);

           

            
            
        }
    }



    //won? calls board won? function to see if the board is won.
    //If so calls a board function which reveals background tiles, hides hints,
    // and reveals the board's name. 
    //then calls a helper method which reveals new game and home
    // button below the picture

    won(){
        if (this.board.won()){
            let cursorToggle = document.getElementById("toggle")

            cursorToggle.style.display = "none";

            
            for(let i = 0; i < this.size; i++){
                for(let j = 0; j < this.size; j++){
                    let tile = this.board.grid[i][j];

                    tile.clickable = false;
                    tile.tileEl.innerHTML = "";
 
                    tile.tileEl.style.backgroundColor = tile.color
                    
                    
                }
            }
            let tiles = document.getElementsByClassName("grid-tile");
            for(let i = 0; i < tiles.length; i++){
                tiles[i].style.border = "none";
            }

            let hints = document.getElementsByClassName("hint-tile");
            for(let i = 0; i < hints.length; i++){
                hints[i].style.display = "none";
            }

            let livesDisplay = document.getElementById("lives-container")
            livesDisplay.style.display = "none";

            let pauseButton = document.getElementById("pause-button")
            pauseButton.style.display = "none";

            let newGameButton = document.getElementById("new-game-button")
            newGameButton.style.display = "none";

            let winButtons = document.getElementsByClassName("game-won-buttons")
            for(let i = 0; i < winButtons.length; i++){
                winButtons[i].style.display = "flex";
            }

            let gameBoard = document.getElementById("game-board");
            gameBoard.style.position = "fixed";
            gameBoard.style.marginLeft = "-140px"
            gameBoard.style.marginTop = "50px"
            
            let puzzleTitle = document.getElementById("puzzle-title");
            if(puzzleTitle.firstChild){
                puzzleTitle.removeChild(puzzleTitle.firstChild);
            }
            let title = document.createTextNode(`${this.puzzleName}`)
            puzzleTitle.append(title);
            puzzleTitle.style.display = "flex";


           this.gameOver = true;
            return true;
        }else{
            return false;
        }
    }

    
    //lost? reveals pop up page informing the player that they've
    //lost with page allowing them to continue, start over, or go home
    
}

export default Game;