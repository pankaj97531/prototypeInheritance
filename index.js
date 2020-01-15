function ParentFunc(param1,param2){
	this.property1 = param1;
	this.property2 = param2;
	this.getProperty2 = function(){
		console.log('test getProperty2 ');
	}
}

ParentFunc.staticMethod = function(){
	console.log("staticMethod test");
}

ParentFunc.prototype.getAllParentDetails = function(){
	console.log(this.property1+ " "+this.property2);
}

function ChildFunc(param1,param2,param3){
	ParentFunc.call(this, param1 , param2);
	this.property3 = param3;
}

ChildFunc.prototype = Object.create(ParentFunc.prototype);

ChildFunc.prototype.constructor = ChildFunc;

ChildFunc.prototype.getAllChildDetails = function(){
	console.log(this.property1 + " " +this.property2);
}
ChildFunc.prototype.getChildParam3 = function(){
	console.log(this.property3);
}

var p1 = new ParentFunc('testparent1','testparent2');
console.log(p1);
p1.getAllParentDetails();

var c1 = new ChildFunc("testchild1","testchild2");
c1.getAllParentDetails();
c1.getAllChildDetails();

console.log(ParentFunc.hasOwnProperty('staticMethod'));