import View from "./game-view";
import {allPuzzles} from "../game_logic/puzzles";


if(document.URL.includes("game.html")){
    document.addEventListener("DOMContentLoaded", function(){

 
        const boardEl = document.getElementById("game-board")
        new View(boardEl, allPuzzles);

        let infoButton = document.getElementById("info-button")
        let gameScreen = document.getElementById("game-screen")
        let instructions = document.getElementById("Instructions");
        let closeButton = document.getElementsByClassName("close-button");
        let gameFooterLinks = document.getElementsByClassName("game-footer-links");



        infoButton.addEventListener("click", function(){
        for (let i = 0; i < gameFooterLinks.length; i++) {
            gameFooterLinks[i].style.display = "none"
            
        }
        gameScreen.style.display = "none";
        instructions.style.display = "flex";
         })
        closeButton[0].addEventListener("click", function(){
            for (let i = 0; i < gameFooterLinks.length; i++) {
                gameFooterLinks[i].style.display = "flex"
            }
            gameScreen.style.display = "flex";
            instructions.style.display = "none";
        })

        
    })

  
}


    document.addEventListener("DOMContentLoaded", function(){
        let infoButton = document.getElementById("instructions-button")
        let homeMenu = document.getElementById("home-main");
        let instructions = document.getElementById("Instructions");
        let closeButton = document.getElementsByClassName("close-button");

        if(homeMenu && infoButton && instructions && closeButton){

            infoButton.addEventListener("click", function(){
            homeMenu.style.display = "none";
            instructions.style.display = "flex";
            })
            closeButton[0].addEventListener("click", function(){
                homeMenu.style.display = "initial";
                instructions.style.display = "none";
            })
        }
    })

   
  



  
