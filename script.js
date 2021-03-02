var numSquares = 6;
var colors = genrateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected"); 
	easyBtn.classList.add("selected"); 
	numSquares= 3;
	colors = genrateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected"); 
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = genrateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){

	//genrate all new colors
	colors = genrateRandomColors(numSquares);
	//picked a new random color from  array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New colors"
	messageDisplay.textContent="";
	//change colors of squares
	 for( var i = 0 ; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor="steelbule"; 
})

colorDisplay.textContent = pickedColor;

for( var i=0; i< squares.length; i++){
	 //add initial colors to square
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedcolor =this.style.backgroundColor;
		// compare color to pickedcolor
		console.log(clickedcolor , pickedColor);
		if ( clickedcolor === pickedColor){
			messageDisplay.textContent = " Correct";
			changeColor(clickedcolor); 
			h1.style.backgroundColor = clickedcolor;
			resetButton.textContent="Play Again?";
		}else{
			 this.style.backgroundColor = "#232323";
			 messageDisplay.textContent ="Try Again";
		}
	});

}
   
	function changeColor(color){
		//loop through all squares
		for(var i= 0; i<squares.length; i++){
			//change each color to match given color
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random()* colors.length);
		return colors[random];
	}

	function genrateRandomColors(num){
		// make an array
		var arr = []
		//repeat num times
		for(var i = 0; i< num; i++){
			arr.push(randomColor())
			//get random color and push into arr
		}
		//return that array
		return arr;
	}

	function randomColor(){
		//pick a "red" from 0 - 255
		var r = Math.floor(Math.random() * 256);
		//pick a "blue" from 0 - 255
		var b = Math.floor(Math.random() * 256); 
		//pick a "green" from 0 - 255
		var g = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", "+ g + ", "+ b +")";
	}