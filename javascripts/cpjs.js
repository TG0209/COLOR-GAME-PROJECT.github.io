var square = document.querySelectorAll(".square");
var num=6; 
var color = colorarray(num);
var setcolor = randomchoose(num);
var tilte = document.querySelector("#title");
var content = document.querySelector("#content");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var res = document.querySelector("#res");
var head1 = document.querySelector("h1");
setcolour(color);
title.textContent = setcolor;
easybtn.addEventListener("click",function(){
	easybtn.classList.add("pressed");
	hardbtn.classList.remove("pressed");
	num=3;
	reset();

})

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("pressed");
	hardbtn.classList.add("pressed");
	num=6;
	reset();

})

title.textContent = setcolor;

function setcolour(color){
for(var i=0;i<square.length;i++){
	if(color[i]){
		square[i].style.backgroundColor = color[i];
	}else{
		square[i].style.backgroundColor = "white";
	}

	}
}

resetbtn.addEventListener("click",function(){
	reset();
	res.textContent = "reset";
})

function reset(){
	color = colorarray(num);
	setcolor = randomchoose(num);
	setcolour(color);
	title.textContent = setcolor;
	content.textContent = "";
	head1.style.backgroundColor = "steelblue";
	
}


for(var i=0;i<square.length;i++){
	square[i].addEventListener("click",function(){
		console.log(square[i]);
		var  clicked = this.style.backgroundColor;
		console.log(clicked);
		if(clicked===setcolor){
			head1.style.backgroundColor = setcolor;
			content.textContent = "correct";
			res.textContent = "play again";
			for(var i=0;i<square.length;i++ ){
				square[i].style.backgroundColor = setcolor;
			}
		}
		else{
			content.textContent = "try again";
			this.style.backgroundColor = "white";
		}

	})
}

function randomchoose(num){
	var idx = Math.floor(Math.random()*num);

	return color[idx];
}

function colorarray(num){
	var color = [];
	for(var i=0;i<num;i++){

		color[i] = randomrgb();
	}
	return color;
}

function randomrgb(){
	/*red_color */
	var r = Math.floor(Math.random()*256);
	/*green_color*/
	var g = Math.floor(Math.random()*256);
	/*blue_color*/
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}