
import Game from "../game_logic/game";

class View{
    constructor(htmlEl, allPuzzles){
        this.allPuzzles = allPuzzles
        this.puzzleObject = this.allPuzzles[Math.floor(Math.random() * this.allPuzzles.length)]
        this.boardSize = this.puzzleObject["length"];
        this.htmlEl = htmlEl;


        this.handleHomeButtonClicK();
        this.handleToggleCursorClick();
        this.handleStartOverButtonClick.bind(this)()
        this.createHtmlGrid.bind(this)();
        this.handlePauseButtonClick();
        this.handleContinueButtonClick();
        
        this.game = new Game(this.boardSize, this.puzzleObject);
      
        this.handleNewGameButtonClick.bind(this)();
    }

    handleHomeButtonClicK(){
        let allHomeButtons = document.getElementsByClassName("home-button")
        for(let i = 0; i < allHomeButtons.length; i++){
            allHomeButtons[i].addEventListener("click", function(){
                window.location.replace('../index.html')
            })
        }
        
    }

    handleToggleCursorClick(){
        let fillButton = document.getElementById("toggle-fill");
        let xButton = document.getElementById("toggle-x");
        let fillButtonPic = document.getElementById("fill-image");
        let xButtonPic = document.getElementById("x-image");
        
        fillButton.setAttribute("selected", "true");

        fillButton.addEventListener('click', function(){
            if(!fillButton.hasAttribute("selected")){
                xButton.removeAttribute("selected");
                fillButton.setAttribute("selected", "true");

                xButtonPic.src = "../pictures/XReleased.png";
                fillButtonPic.src = "../pictures/FillSelected.png";  
            }else{
                fillButtonPic.src = "../pictures/FillSelected.png";
            }
        })

        xButton.addEventListener('click', function(){
            if(!xButton.hasAttribute("selected")){
                xButton.setAttribute("selected", "true");
                fillButton.removeAttribute("selected");

                xButtonPic.src = "../pictures/XPressed.png"
                fillButtonPic.src = "../pictures/FillRelease.png";
            }
        })

        fillButton.click();
    }

    handleNewGameButtonClick(){
       
        let allNewGameButtons = document.getElementsByClassName("new-game-button");
        // let gameFooterLinks = document.getElementsByClassName("game-footer-links");
        // let pauseScreen = document.getElementById("pause-menu-screen");
        // let gameOverScreen = document.getElementById("game-over-screen");
        // let gameScreen = document.getElementById("game-screen");
        // let gameBoard = document.getElementById("game-board");
        // let puzzleTitle = document.getElementById("puzzle-title");
        // let livesContainer = document.getElementById("lives-container")
        // let pauseButton = document.getElementById("pause-button")
        // let newGameButton = document.getElementById("new-game-button")
        // let cursorToggle = document.getElementById("toggle")
        // let gameWonButtons = document.getElementsByClassName("game-won-buttons")

            

        for(let i = 0; i < allNewGameButtons.length; i++){
            let button = allNewGameButtons[i];

            button.addEventListener("click", function(){

                location.reload()

            })
        }
    }
                
                //This deletes the old game grid
                //this is neccessary since the grid actually persists
                //through the reset process
                
            //     delete this.game.board.grid;
  
            //     while(this.htmlEl.firstChild){
            //         this.htmlEl.removeChild(this.htmlEl.lastChild);
            //     }

            //     for(let i = 0; i < gameFooterLinks.length; i++){
            //         gameFooterLinks[i].style.display = "flex"
            //     }

            //     for(let i = 0; i < gameWonButtons.length; i++){
            //         gameWonButtons[i].style.display = "none"
            //     }

            //     this.puzzleObject = this.allPuzzles[Math.floor(Math.random() * this.allPuzzles.length)]

            //     this.boardSize = this.puzzleObject["length"];
            //     this.createHtmlGrid();
                
            //     this.game = new Game(this.boardSize, this.puzzleObject);
                
            //     gameBoard.style.position = "relative";
            //     gameBoard.style.margin = "0px";
            //     cursorToggle.style.display = "initial";
            //     puzzleTitle.style.display = "none";
            //     pauseButton.style.display = "initial";
            //     newGameButton.style.display = "initial";
            //     livesContainer.style.display = "initial";
            //     pauseScreen.style.display = "none";
            //     gameOverScreen.style.display = "none"
            //     gameScreen.style.display = "flex";


            // //nudging heart into right spot
            //     let livesHeartPic = document.getElementById("lives-heart");
            //     if(this.boardSize === 5){
            //         livesHeartPic.style.paddingLeft = "6px"
            //     }else{
            //         livesHeartPic.style.paddingLeft = "0px"
            //     }
            // }.bind(this))

            //or just VVV

            

       


    

    handleStartOverButtonClick(){
        let allStartOverButtons = document.getElementsByClassName("start-over-button");
        let pauseScreen = document.getElementById("pause-menu-screen");
        let gameScreen = document.getElementById("game-screen");
        let gameOverScreen = document.getElementById("game-over-screen");
        let gameFooterLinks = document.getElementsByClassName("game-footer-links");
       


        for(let i = 0; i < allStartOverButtons.length; i++){
            let button = allStartOverButtons[i];
            button.addEventListener("click", function(){

                //This deletes the old game grid
                //this is neccessary since the grid actually persists
                //through the reset process
                delete this.game.board.grid;


                while(this.htmlEl.firstChild){
                    this.htmlEl.removeChild(this.htmlEl.lastChild);
                }
                
                this.createHtmlGrid();
                for(let i = 0; i < gameFooterLinks.length; i++){
                    gameFooterLinks[i].style.display = "flex"
                }
              
                this.game = new Game(this.boardSize, this.puzzleObject);
                
               
                pauseScreen.style.display = "none";
                gameOverScreen.style.display = "none"
                gameScreen.style.display = "flex";
    
               
            }.bind(this))
        }

        

        
    }

    handlePauseButtonClick(){
        let pauseButton = document.getElementById("pause-button");
        let pauseScreen = document.getElementById("pause-menu-screen");
        let gameScreen = document.getElementById("game-screen");
        let gameFooterLinks = document.getElementsByClassName("game-footer-links")

        pauseButton.addEventListener("click", function(){
            for(let i = 0; i < gameFooterLinks.length; i++){
                gameFooterLinks[i].style.display = "none"
            }
            pauseScreen.style.display = "block";
            gameScreen.style.display = "none";
        
        })
    }

    handleContinueButtonClick(){
        let continueButton = document.getElementById("continue-button");
        let pauseScreen = document.getElementById("pause-menu-screen");
        let gameScreen = document.getElementById("game-screen");
        let gameFooterLinks = document.getElementsByClassName("game-footer-links")

        continueButton.addEventListener("click", function(){
            for(let i = 0; i < gameFooterLinks.length; i++){
                gameFooterLinks[i].style.display = "flex"
            }
            pauseScreen.style.display = "none";
            gameScreen.style.display = "flex";
            
        })
    }


    //call board make grid method now since elements now exist
    createHtmlGrid(){
        const board = document.createElement("ul")
        board.classList.add("grid")

        for(let i = 0; i < this.boardSize + 1; i++){
            const row = document.createElement("ul")
            row.classList.add("grid-row")

            for(let j = 0; j < this.boardSize + 1; j++){
                const tile = document.createElement("li")
                tile.setAttribute("x-cor", j)
                tile.setAttribute("y-cor", i)
                tile.id = `${i}${j}`

                tile.classList.add("grid-tile")
            
                if(i === 0 ){
                    if (j < this.boardSize){
                    const topHints = document.createElement("ul")
                    topHints.classList.add("top-hints")

                
                    let size = this.boardSize/2 + 1


                    for(let k = 0; k < size ; k++){
                        const topHintTile = document.createElement("li");
                        topHintTile.classList.add("top-hint-tile");
                        topHintTile.classList.add("hint-tile");
                        topHintTile.setAttribute("id", `top${j}${k}`);
                        if(this.boardSize > 5){
                            if(j === 5){
                                topHintTile.style.borderLeft = "2px solid transparent"
                            }
                        }
                        if(j % 2 === 0){
                            topHintTile.classList.add("colored-in"); 
                        }
                        topHints.appendChild(topHintTile);

                    }

                    const top = document.createElement("div")
                    top.classList.add("top-hint-top-tile")
                    top.append(topHints)
                    row.append(top)

                    let paddingSize = 0

                    if (size % 2 === 0){
                        paddingSize = size * 20; 
                    }else{
                        paddingSize = (size * 20) + 10;
                    }
                    
                    row.style.padding = `0px 0px 0px ${paddingSize}px`
                    }
                

                }else if (j===0){
                    const sideHints = document.createElement("ul")
                    sideHints.classList.add("side-hints")
                    let size = this.boardSize/2 + 1

                    for(let k = 0; k < size ; k++){
                        const sideHintTile = document.createElement("li")
                        sideHintTile.classList.add("side-hint-tile")
                        sideHintTile.classList.add("hint-tile")
                        if(this.boardSize > 5){
                            if(i === 5){
                                sideHintTile.style.borderBottom = "2px solid transparent"
                            }
                        }
                        sideHintTile.setAttribute("id", `side${i}${k}`)
                        if(i % 2 === 0){
                            sideHintTile.classList.add("colored-in"); 
                        }
                        sideHints.appendChild(sideHintTile);
                    }
                    const side = document.createElement("div")
                    side.classList.add("side-hint-side-tile")
                    side.append(sideHints)
                    row.append(side)

                }else{

                    if (tile.getAttribute("x-cor") === "1" && tile.getAttribute("y-cor") === `${this.boardSize}`){
                        tile.style.borderLeft = "1px solid black"
                        tile.style.borderBottom = "1px solid black"
                    }else if(tile.getAttribute("x-cor") === "1"){
                        tile.style.borderLeft = "1px solid black"
                    }else if (tile.getAttribute("y-cor") === `${this.boardSize}`){
                        tile.style.borderBottom = "1px solid black"
                    }

                    if(this.boardSize > 5){
                        if(tile.getAttribute("x-cor") === "5"){
                            tile.style.borderRight = "2px solid black"
                        }
                        if(tile.getAttribute("y-cor") === "5"){
                            tile.style.borderBottom = "2px solid black"
                        }
                    }
                    

                    row.appendChild(tile)
                }

            }  
            board.append(row)
        }
        this.htmlEl.append(board)

        //adding top marign to small boards
       
        if(this.boardSize === 5){
            board.style.marginTop = "100px"; 
        }else{
            board.style.marginTop = "0px";
        }
    }
}

export default View;