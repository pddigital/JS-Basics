//////////////////PROBLEM 1////////////////////

var name = 'bob';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
    if (name === "Tyler") {
        return true; }
    else {
        return false;
    }
}

var result = isTyler(name);
console.log(result);


//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
    var name = prompt('What is your name?');
    return name;
}


//////////////////PROBLEM 3////////////////////

function welcome(name) {
    alert('Welcome ' + name);
}

welcome(getName());

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.



//////////////////PROBLEM 4////////////////////


//What is the difference between arguments and parameters?

// Arguments are actual values passed to a function vs. parameters which are variables.



//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// NaN, undefined, 0, false, "", null are falsy values. !! , the logical not operator used twice will test for truthy or falsy.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name



function myName() {
    return "Paul";
}

//Now save the function definition of myName into a new variable called newMyName


var myNewName = myName();

//Now alert the result of invoking newMyName

alert(myNewName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return function(){
        return "Paul";
    }
}


//Now save the result of invoking outerFn into a variable called innerFn.


var innerFn = outerFn();

//Now invoke innerFn.

innerFn();