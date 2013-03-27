var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var beatTime = 650;
var danceSpeed = 1;
//client.createRepl();


client.takeoff();
console.log("Begin song.");

// To the left, to the left, to the right, to the right
setTimeout(function () {
	console.log("Begin dance moves.");
	client
	.after(0, function() {
	  	
	  })
	  .after(beatTime, function() {
	  	
	  	this.left(danceSpeed);
	  	console.log("To the left;");
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	  .after(beatTime, function() {
	  	this.left(danceSpeed);
	  	console.log("To the left;");
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	  .after(500, function () {


	  })
	  .after(beatTime, function() {
	  	this.right(danceSpeed);
	  	console.log("To the right;");  	
	  })
	  .after(500, function() {
	  	this.stop();
	  })

	  .after(beatTime, function() {
	  	this.right(danceSpeed);
	  	console.log("To the right;");  	
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	//To the front, to the front, to the back, to the back
	 .after(beatTime, function() {
	  	this.front(danceSpeed);
	  	console.log("To the front;");  	
	  })
	 .after(500, function() {
	  	this.stop();
	  })
	  .after(beatTime, function() {
	  	this.front(danceSpeed);
	  	console.log("To the front;");  	
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	    .after(500, function() {
	  	
	  })
	   .after(beatTime, function() {
	  	this.back(danceSpeed);
	  	console.log("To the back;");  	
	  })
	   .after(500, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.back(danceSpeed);
	  	console.log("To the back;");  	
	  })
	//Now dip baby dip, come on let's dip baby dip baby
	//Dip baby just dip, baby dip baby dip
	.after(500, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.animate("wave", 1000);
	  	console.log("Now dip baby dip;");  	
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.animate("wave", 1000);
	  	console.log("come on let's dip baby dip baby;");  	
	  })  
	   .after(500, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.animate("wave", 1000);
	  	console.log("Dip baby just dip, ");  	
	  })
	  .after(500, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.animate("wave", 1000);
	  	console.log("baby dip, baby dip;");  	
	  })
	//Just Dip, Cotton Candy sweet and low
	//let me see that tootsie roll
	  
	  .after(beatTime, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.up(danceSpeed);
	  	console.log("Just Dip, Cotton Candy sweet and low");  	
	  })
	  .after(250, function() {
	  	this.stop();
	  })
	    .after(beatTime, function() {
	  	this.animate('flipLeft', 15);
	    console.log("let me see that tootsie roll");  	
	  }) 
	    .after(beatTime, function() {
	  	//this.animateLeds('blinkRed', 5, 2)
	  	//
	  })
	  

	  .after(1000, function() {
	    this.stop();

	    console.log("Land;");
	    this.land();
	  })

	;

}, 32000);
