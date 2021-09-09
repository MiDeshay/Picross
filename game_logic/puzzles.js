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
// ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt']]


let ballArr =   [["bl", "bl", "bl",  "bl",  "bl"],
            [ "bl", "lr", "lr", "lr",  "bl" ],
            [ "bl", 'rd', "Rd", "rd",  "bl" ],
            [ "bl", "lr", "rd", 'lr',  "bl" ],
            [ "bl",  "bl", "bl",  "bl",  "bl" ]]

let testArr = [['Bl', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt']]


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

let PinocchioArray =   [['wt', 'wt', 'wt', 'wt', 'Yl', 'wt', 'wt', 'wt', 'wt', 'wt'],
                        ['wt', 'Yl', 'Bu', 'Yl', 'Bl', 'Bl', 'wt', 'wt', 'wt', 'wt'],
                        ['wt', 'Bu', 'Yl', 'Bl', 'Bl', 'Bl', 'Bl', 'wt', 'wt', 'wt'],
                        ['wt', 'Yl', 'Pk', 'Bu', 'Pk', 'Bu', 'wt', 'wt', 'wt', 'wt'],
                        ['Yl', 'Pk', 'Pk', 'Pk', 'Pk', 'Pk', 'Pk', 'Pk', 'Pk', 'Pk'],
                        ['wt', 'Bl', 'Pk', 'Pk', 'Pk', 'Pk', 'wt', 'wt', 'wt', 'wt'],
                        ['wt', 'wt', 'Bu', 'Bu', 'Pk', 'Bu', 'wt', 'wt', 'wt', 'wt'],
                        ['wt', 'Gy', 'Gy', 'Bu', 'Gr', 'Bu', 'Gy', 'wt', 'wt', 'wt'],
                        ['wt', 'Gy', 'Bu', 'Bu', 'Gy', 'Bu', 'Bu', 'Yl', 'wt', 'wt'],
                        ['wt', 'Yl', 'Bu', 'Bu', 'Yl', 'Bu', 'Bu', 'Yl', 'wt', 'wt']]


let miniPatternArray = [['Lg', 'Lg', 'wt', 'wt', 'Pr', 'Bu', 'wt', 'wt', 'Lb', 'Lb'],
                        ['Lg', 'wt', 'Pk', 'Pk', 'Pr', 'Bu', 'Og', 'Og', 'wt', 'Lb'],
                        ['wt', 'Og', 'wt', 'Pr', 'Pr', 'Bu', 'Bu', 'wt', 'Pk', 'wt'],
                        ['wt', 'Og', 'Bu', 'wt', 'Pr', 'Bu', 'wt', 'Pr', 'Pk', 'wt'],
                        ['Bu', 'Bu', 'Bu', 'Bu', 'Bu', 'Bu', 'Pr', 'Pr', 'Pr', 'Pr'],
                        ['Pr', 'Pr', 'Pr', 'Pr', 'Bu', 'Bu', 'Bu', 'Bu', 'Bu', 'Bu'],
                        ['wt', 'Pk', 'Pr', 'wt', 'Bu', 'Pr', 'wt', 'Bu', 'Og', 'wt'],
                        ['wt', 'Pk', 'wt', 'Bu', 'Bu', 'Pr', 'Pr', 'wt', 'Og', 'wt'],
                        ['Lb', 'wt', 'Og', 'Og', 'Bu', 'Pr', 'Pk', 'Pk', 'wt', 'Lg'],
                        ['Lb', 'Lb', 'wt', 'wt', 'Bu', 'Pr', 'wt', 'wt', 'Lg', 'Lg']]

 let OrangeArray = [['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'Bl', 'Bl'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'Bl', 'Bl', 'wt'],
                    ['wt', 'wt', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Og'],
                    ['wt', 'wt', 'Bl', 'wt', 'wt', 'wt', 'wt', 'wt', 'Og', 'Og'],
                    ['Og', 'Og', 'Bl', 'Og', 'Og', 'Og', 'Og', 'wt', 'wt', 'wt'],
                    ['Og', 'Og', 'Bl', 'Og', 'Og', 'Og', 'Og', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'Bl', 'wt', 'wt', 'Og', 'Og', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'wt'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'Og', 'Og', 'wt', 'Bl', 'Bl'],
                    ['wt', 'wt', 'wt', 'wt', 'wt', 'Og', 'Og', 'wt', 'wt', 'Bl']]


let curlyArray =   [['wt', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'wt'],
                    ['Bu', 'Bl', 'Bu', 'wt', 'Bu', 'wt', 'wt', 'Bl', 'Bl', 'wt'],
                    ['Bu', 'Bl', 'Bu', 'wt', 'Bu', 'wt', 'wt', 'Bl', 'Bl', 'wt'],
                    ['Bu', 'Bl', 'wt', 'Bl', 'Bl', 'Bl', 'wt', 'Bl', 'Bl', 'wt'],
                    ['Bu', 'Bl', 'wt', 'Bl', 'Bl', 'Bl', 'wt', 'Bl', 'Bl', 'wt'],
                    ['Bu', 'Bl', 'Bu', 'Bl', 'Bu', 'wt', 'Bu', 'Bl', 'Bl', 'Bu'],
                    ['wt', 'Bl', 'wt', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'wt'],
                    ['wt', 'Bl', 'wt', 'wt', 'wt', 'wt', 'Bu', 'wt', 'Bu', 'Bu'],
                    ['Bu', 'Bl', 'Bu', 'Bu', 'wt', 'wt', 'Bu', 'wt', 'wt', 'Bu'],
                    ['Bu', 'Bl', 'wt', 'Bu', 'wt', 'wt', 'Bu', 'Bu', 'Bu', 'Bu']]

let instagramArray =    [['wt', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'wt'],
                        ['Pr', 'Pr', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'Pr', 'Pr'],
                        ['Pr', 'wt', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'wt', 'Pr', 'Pr', 'wt', 'wt', 'Pr', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'wt', 'Og', 'wt', 'Pr', 'Pr', 'wt', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'wt', 'Og', 'wt', 'Og', 'Pr', 'wt', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'wt', 'Og', 'Og', 'wt', 'wt', 'Pr', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'wt', 'Yl', 'Og', 'Og', 'Og', 'Pr', 'Pr', 'wt', 'Pr'],
                        ['Yl', 'Yl', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'Pr', 'Pr'],
                        ['wt', 'Yl', 'Yl', 'Yl', 'Yl', 'Yl', 'Yl', 'Pr', 'Pr', 'wt']]

let amongUsArray = [['wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'wt', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt', 'wt'],
                    ['wt', 'wt', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt'],
                    ['wt', 'wt', 'Rd', 'Rd', 'Bu', 'Lb', 'Lb', 'Lb', 'Lb', 'wt'],
                    ['wt', 'Bl', 'Rd', 'Rd', 'Bu', 'Bu', 'Bu', 'Bu', 'Bu', 'wt'],
                    ['wt', 'Bl', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt'],
                    ['wt', 'Bl', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt'],
                    ['wt', 'Bl', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'wt', 'wt'],
                    ['wt', 'wt', 'Rd', 'Rd', 'wt', 'wt', 'Rd', 'Rd', 'wt', 'wt'],
                    ['wt', 'wt', 'Rd', 'Rd', 'wt', 'wt', 'Rd', 'Rd', 'wt', 'wt']]

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
    let bigTestPuzzle = puzzleGenerator(10, 'Test Of Title', testArr)
    let ballPuzzle = puzzleGenerator(5, "Red Ball", ballArr);

    let cherryPuzzle = puzzleGenerator(10, "Cherry by ???", cherryArray);
    let pickachuPuzzle = puzzleGenerator(10, "'Pikachu' by Martego", pikachuArray);
    let pinocchioPuzzle = puzzleGenerator(10, "Pinocchio by ???", PinocchioArray );
    let miniPatternPuzzle = puzzleGenerator(10, "Mini Pattern by aleonblue", miniPatternArray);
    let orangePuzzle = puzzleGenerator(10,"Orange N Stuff by ???", OrangeArray )
    let curlyPuzzle = puzzleGenerator(10, "Curlycue by ???", curlyArray  )
    let instagramPuzzle = puzzleGenerator(10, "Insta from FreeBeadsPatterns", instagramArray)
    let amongUsPuzzle = puzzleGenerator(10, "Wasn't Me...", amongUsArray)

    let allPuzzles = [ 
        cherryPuzzle, 
        pickachuPuzzle, 
        pinocchioPuzzle, 
        miniPatternPuzzle,
        orangePuzzle,
        curlyPuzzle,
        instagramPuzzle,
        amongUsPuzzle
    ]

    

//function stringtopuzzle takes a length, a string, an array
//returns a puzzle object

//length is size of puzzle

//first string = puzzle name

//array = coded puzzle
//syntax: lowercase chars for background, 
//uppercase chars for main puzzle
//color abbreviations




export {allPuzzles};
