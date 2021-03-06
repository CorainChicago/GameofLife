var boardHeight = 40;
var boardWidth = boardHeight;


var $board = $('#board');
var column = [];
var allCells = [];
var cellID = 1


function createBoard(boardHeight, boardWidth){
	for(var i = 1; i <= boardHeight; i++){
		var $row = $("<div class = 'row" + i +"'>" + column + "</div>");
		$board.append($row);
		for(var x = 1; x <= boardWidth; x++){
			var counter = ('<p id = row' + cellID+ '>' +'</p>');
			$('.row' + i).append(counter);
			allCells.push(counter);
			cellID = cellID +1;
			}
	}
}

createBoard(boardHeight, boardWidth);

// startBoard picks a random number of squares to be "alive" and the places the alive squares randomly on the board

function startBoard(){
	var baseRandom = Math.floor((Math.random() * (boardHeight * 4)) + 1);
	for (i = 0; i <baseRandom; i++){
		var choiceRandom1 = Math.floor((Math.random() * ((boardHeight*boardHeight) - 1)) + 1);
		var holdcell = ($('#row' + choiceRandom1));
		holdcell.addClass("alive");
	}

}

startBoard();

var neighborNumber = 0;
var cellCounter;

var mathFindNeighbors = [];

function createMathFindNeighbors(boardHeight){
	mathFindNeighbors.push(1);
	mathFindNeighbors.push(-1);
	mathFindNeighbors.push(boardHeight);
	mathFindNeighbors.push(boardHeight + 1);
	mathFindNeighbors.push(boardHeight - 1);
	mathFindNeighbors.push(-boardHeight);
	mathFindNeighbors.push(-boardHeight + 1);
	mathFindNeighbors.push(-boardHeight - 1);
}

createMathFindNeighbors(boardHeight);

function addUpaliveneighbors(mathFindNeighbors){
	for(x = 0; x < mathFindNeighbors.length; x++){
		var neighborLocation = $('#row' + (cellCounter + mathFindNeighbors[x]));
		if (neighborLocation.hasClass('alive')){
		neighborNumber = neighborNumber + 1;
		} 
		}
	return neighborNumber;
}

function fourRules(cell, neighborNumber){
	if(cell.hasClass('alive')){
		if(neighborNumber < 2 ){
			cell.removeClass('alive')
		} else if (neighborNumber > 3){
			cell.removeClass('alive');
		} else if (neighborNumber == 2 || 3){
			console.log("cats");
		}
		}		
	if(!cell.hasClass('alive') && neighborNumber == 3){
		$('#row' + cellCounter).addClass("alive");		
		}
}		



 // This runs the functions though all of the cells one by one
function surveyEachCell(){
	for(i = 0; i < ((boardHeight*boardHeight) - 1); i++){
		cellCounter = i;
		var cell = $('#row' + i);
		addUpaliveneighbors(mathFindNeighbors);
		fourRules(cell, neighborNumber);
		neighborNumber = 0;
  		cellCounter = 0;
		}	
	};

setInterval(function(){
  surveyEachCell();
}, 2000);





// }

// function checkNeighbors

// function ruleOne{

// 	Any live cell with fewer than two live neighbours dies, as if caused by under-population.

// }

// function ruleTwo{
// // Any live cell with two or three live neighbours lives on to the next generation.

// }

// function ruleThree{
// // Any live cell with more than three live neighbours dies, as if by overcrowding.

// }

// function ruleFour{
// 	// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// }
