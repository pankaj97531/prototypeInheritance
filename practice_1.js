var Mobile = function(){
	
}
Mobile.prototype.getModel = function(){
	return this.model;
}

var Samsung = function(model,price){
	this.model = model;
	this.price = price;
}

var Lenovo = function(model,price){
	Samsung.call(this,model,price)
}

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;
Samsung.prototype.getPrice = function(){
	return this.price;
}

Lenovo.prototype = Object.create(Samsung.prototype);
Lenovo.prototype.constructor = Lenovo;

var s1 = new Samsung('s30',35000);
var l1 = new Lenovo('K8',15000);
console.log(s1.getModel());
console.log(s1.getPrice());
console.log(l1.getModel());
console.log(l1.getPrice());