var Person = function(name){
    this.name = name;
    this.canTalk =true;
}
Person.prototype.greet = function(){
    if(this.canTalk){
        console.log('Hi, I am ' + this.name);
    }
}

var Employee = function(name,title){
    Person.call(this,name);
    this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.greet=function(){
    if(this.canTalk){
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
}
var e1 = new Employee("Pankaj","Developer");
e1.greet();

var Customer = function(name){
    Person.call(this,name);
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var c1 = new Customer("Rahul");
c1.greet();

var Mine = function(name){
    Person.call(this,name);
    this.canTalk = false;
}
Mine.prototype = Object.create(Person.prototype);
Mine.prototype.constructor = Mine;

var m1 = new Mine("XXXXXXXXXX")
m1.greet();