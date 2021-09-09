class Tile{
    constructor(tileEl, color, needToFill){
        this.tileEl = tileEl
        this.color = color;
        this.needToFill = needToFill;
        this.wrongAnswer = false;
        this.filled = false;
        this.clickable = true;
        this.fillButton = document.getElementById("toggle-fill")
        this.xButton = document.getElementById("toggle-x")

        this.tileEl.addEventListener("click", function(){
             
            if(this.clickable){
                this.checkClick.bind(this)()
            }
            
        }.bind(this))
    }

    checkClick(){
        if (this.fillButton.hasAttribute("selected")){
            if (this.needToFill && this.tileEl.innerHTML === ""){
                this.tileEl.style.backgroundColor = "black";
                this.filled = true;
                
            }else{
                if (!this.needToFill && this.tileEl.innerHTML === ""){
                    let x = document.createTextNode("x")
                    this.tileEl.appendChild(x); 
                    this.tileEl.style.color = "red";
                    this.wrongAnswer = true;
                    this.filled = true;
                }
                
            }
            
            
        }else{
            if(!this.filled){
                if (this.tileEl.innerHTML === ""){
                let x = document.createTextNode("x")
                this.tileEl.appendChild(x);
                }else{
                    this.tileEl.removeChild(this.tileEl.firstChild);
                }
            }

        }
        
        this.solved = true;
    }




}

export default Tile;