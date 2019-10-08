function CarsDescription(make, model, colour, carPics, reg_number, price){
	this.make = make;
	this.model = model;
	this.colour = colour;
	this.imageSrc = carPics;
	this.reg_number = reg_number;
	this.price = price;            /*making it so you can call it whenever*/
	this.showMore = function(){
		let displayCar =document.createElement("dialog");
		displayCar.innerHTML= make +"<br>"+"Car Type: "+ model +"<br>"+"Colour: "+ colour +"<br>"+"Registration No.: "+ reg_number +"<br>"+"Price: "+price;
		document.body.appendChild(displayCar)
		displayCar.showModal()    /*This displays the info, so when you click on it, it displays the info*/
	}    /*this makes the block with the info inside it*/
};
         /*each car has a different variable name so it works seperately*/
let car = new CarsDescription("AUDI",
							  "RS3",
							  "yellow",
							  "vehicles/car1.jpg",
							  "CA:543-210",
							  "R550 000");
let car2 = new CarsDescription("FORD",
							   "Mustang",
							   "blue",
							   "vehicles/car2.jpg",
							   "CA:310-451",
							   "R780 000");
let car3 = new CarsDescription("FERRARI",
	                           "Spider",
							   "Cream",
							   "vehicles/car3.jpg",
							   "CA:420-562",
							   "R3.5 million");
let car4 = new CarsDescription("VOLKS-WAGEN",
						       "Scirocco",
						       "Royal Blue",
						       "vehicles/car4.jpg",
						       "CA:123-456",
						       "R345 000");
let car5 = new CarsDescription("NISSAN",
							   "GT-R",
							   "Dirty Grey",
							   "vehicles/car5.jpg",
							   "CA:789-321",
							   "R500 000");
               /*This is all the info of a specific car*/
var MySales = [car, car2, car3, car4, car5];
               /*making all the variables into one variable, so instead of inputting all the variables you input one*/

MySales.forEach(function(cars){
	var div = document.createElement("div");
	var imgy = document.createElement("img");    /*making the images display*/
	imgy.onclick = function(){
		cars.showMore()         /*whenever you click on a img is displays the info, seeing the onclick in the function*/
		}
		div.innerHTML += cars.make + "<br>";      /*making headings on each car and displaying the model*/
		div.innerHTML += cars.model + "<br>";
	imgy.src = cars.imageSrc;
	imgy.style.height = "300px";                /*sizing the images*/
	imgy.style.width = "330px";
         
    div.appendChild(imgy);
	document.body.appendChild(div)
	})






