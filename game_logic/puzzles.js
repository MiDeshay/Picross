// let puzzleOne5x5 = {
//     name: "Ball",
//     pictureArray:   [["blue", "blue", "blue",  "blue",  "blue"],
//                     [ "blue", "red", "red", "red",  "blue" ],
//                     [ "blue", 'red', "red", "red",  "blue" ],
//                     [ "blue", "red", "red", 'red',  "blue" ],
//                     [ "blue",  "blue", "blue",  "blue",  "blue" ]],
    
//     logicArray:          [['false', 'false', 'false', 'false', 'false'],
//                     ['false', true, true, true, 'false' ],
//                     ['false', true, true, true, 'false' ],
//                     ['false', true, true, true, 'false' ],
//                     ['false', 'false', 'false', 'false', 'false' ]]
// }

let puzzleKey = {
    'lr': ["indianred", false],
    'Lr': ["indianred", true],

    'rd': ["firebrick", false],
    'Rd': ["firebrick", true],



    'lp': ["lightpink", false],
    'Lp': ["lightpink", true],

    'pk': ["pink", false],
    'Pk': ["pink", true],



    'gy': ["grey", false],
    'Gy': ["grey", true],

    'bl': ["black", false],
    'Bl': ["black", true],

    'wt': ["ivory", false],
    'Wt': ["ivory", true],



    'lo': ["gold", false],
    'Lo': ["gold", true],

    'og': ["orange", false],
    'Og': ["orange", true],


    'br': ["saddlebrown", false],
    'Br': ["saddlebrown", true],

    'ds': ["#3c1414", false], //darksiena
    'Ds': ["#3c1414", true], 


    'lb': ["lightblue", false],
    'Lb': ["lightblue", true],

    'bu': ["deepskyblue", false],
    'Bu': ["deepskyblue", true],



    'lg': ["lightgreen", false],
    'Lg': ["lightgreen", true],

    'gr': ["olivedrab", false],
    'Gr': ["olivedrab", true],



    'ly': ["lightyellow", false],
    'Ly': ["lightyellow", true],

    'yl': ["yellow", false],
    'Yl': ["yellow", true],

    'dg': ["darkgoldenrod", false],
    'Dg': ["darkgoldenrod", true],



    'pl': ["lightpurple", false],
    'Pl': ["lightpurple", true],

    'pr': ["rebeccapurple", false],
    'Pr': ["rebeccapurple", true],

}

//10x10 white canvas 
//[['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt']]


let ballArr =   [["bl", "bl", "bl",  "bl",  "bl"],
            [ "bl", "Lr", "Rd", "Lr",  "bl" ],
            [ "bl", 'Rd', "Rd", "Rd",  "bl" ],
            [ "bl", "Lr", "Rd", 'Lr',  "bl" ],
            [ "bl",  "bl", "bl",  "bl",  "bl" ]]


let cherryArray =    [['wt', 'Gr', 'Gr', 'Gr', 'wt', 'wt', 'wt', 'Lg', 'wt', 'wt'],
                ['wt', 'wt', 'Gr', 'Gr', 'Gr', 'wt', 'Lg', 'wt', 'wt', 'wt'],
                ['wt', 'wt', 'wt', 'wt', 'wt', 'Lg', 'wt', 'Gr', 'wt', 'wt'],
                ['wt', 'wt', 'wt', 'wt', 'Lg', 'wt', 'Gr', 'Gr', 'Gr', 'wt'],
                ['wt', 'wt', 'wt', 'Lg', 'wt', 'wt', 'Gr', 'Gr', 'Gr', 'wt'],
                ['wt', 'wt', 'Rd', 'Rd', 'wt', 'wt', 'Gr', 'Gr', 'Gr', 'wt'],
                ['wt', 'Rd', 'Lr', 'Rd', 'Rd', 'wt', 'wt', 'Gr', 'wt', 'wt'],
                ['wt', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt', 'wt', 'wt', 'wt'],
                ['wt', 'wt', 'Rd', 'Rd', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt']]

let pikachuArray = [ ['Bl', 'Yl', 'Yl', 'Br', 'bu', 'bu', 'bu', 'bu', 'bu', 'Br'],
                    ['Bl', 'Dg', 'Yl', 'Dg', 'Br', 'bu', 'bu', 'bu', 'Br', 'Dg'],
                    ['bu', 'Br', 'Dg', 'Yl', 'Dg', 'Br', 'Br', 'Br', 'Dg', 'Yl'],
                    ['bu', 'bu', 'Br', 'Dg', 'Yl', 'Ly', 'Ly', 'Yl', 'Yl', 'Dg'],
                    ['bu', 'bu', 'Br', 'Yl', 'Yl', 'Ly', 'Ly', 'Yl', 'Yl', 'Yl'],
                    ['lb', 'lb', 'Dg', 'Wt', 'bl', 'Yl', 'Yl', 'Yl', 'Wt', 'bl'],
                    ['lb', 'Dg', 'Yl', 'bl', 'ds', 'Yl', 'Yl', 'Yl', 'bl', 'ds'],
                    ['lb', 'Rd', 'Lr', 'Yl', 'Yl', 'Yl', 'Br', 'Yl', 'Yl', 'Yl'],
                    ['wt', 'Rd', 'Rd', 'Lo', 'Yl', 'Br', 'Dg', 'Br', 'Yl', 'Lo'],
                    ['wt', 'wt', 'Br', 'Dg', 'Lo', 'Lo', 'Lo', 'Lo', 'Lo', 'Dg']]

let melonArray =   [['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt']]


function puzzleGenerator(length, name, array){
    let puzzle = {}

    puzzle["length"] = length;
    puzzle['name'] = name;

    let pictureArray = [];
    let logicArray = [];

    for(let i = 0; i < length; i++){
        let picSub = [];
        let logicSub = [];
        for(let j = 0; j < length; j++){
            let tile = array[i][j];
            picSub.push(puzzleKey[tile][0]);
            logicSub.push(puzzleKey[tile][1]); 
        }
        pictureArray.push(picSub);
        logicArray.push(logicSub);
    }

    puzzle["pictureArray"] = pictureArray;
    puzzle["logicArray"] = logicArray;

    return puzzle;

}

    let ballPuzzle = puzzleGenerator(5, "Red Ball", ballArr);
    let cherryPuzzle = puzzleGenerator(10, "Cherry", cherryArray);
    let pickachuPuzzle = puzzleGenerator(10, "'Pikachu' by Martego", pikachuArray);


    let allPuzzles = [ballPuzzle, cherryPuzzle, pickachuPuzzle]

//function stringtopuzzle takes a length, a string, an array
//returns a puzzle object

//length is size of puzzle

//first string = puzzle name

//array = coded puzzle
//syntax: lowercase chars for background, 
//uppercase chars for main puzzle
//color abbreviations




export {allPuzzles};
