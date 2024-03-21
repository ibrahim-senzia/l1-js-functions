//function Declaration

   //nikama kuname an action
   //you can call it from anywherenin ur code  

//function Expression

   //it's like putting an action inside a box and then you name the box
   //unaeza tumia after ume idefine

//Arrow function

   //it's a more compact way to define a function
   //a shorter way of writting a code












// utility
//print a given value to our console
function printValue(value){

    //it makes our valueappear on our console
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
  //we have 2 toys ... toy1= Car  toy2= Blocks >>> count total toys
 
  function addFixedValues(){
    const toyCar = 10; //the number of toy cars we have
    const toyBlocks = 7; //the number of blocks we have

    const sum = toyCar + toyBlocks //add our toys together

    //print our results
    printValue(sum);
  }

//TODO: create a function that takes in two values and adds them

function addTwoValues(x,y){
    //adding our two values together
    const sum = x + y

    //print our results
    printValue(sum);
}

//TODO: create a function that takes in two values, adds them and returns the value of the addition
  //we want to show someone else our results

  function addTwoValuesandReturn (x, y){
    //we are adding our two valuees together
    const sum = x + y;
    
    //Return results so that msee mwingine azione
    return sum;
  }

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
 const addFixedValuesExpr = function (){
    const toyCar =10;
    const toyBlocks =7;
    const sum = toyCar + toyBlocks;

    //print our results
    printValue(sum);

 }

//TODO: create a function that takes in two values and adds them

const addTwoValuesExpr = function (x, y){
    const sum = x + y;

    //print our value
    printValue(sum);

}

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const addTwoValuesandReturnExpr = function (x, y){
    const sum = x + y;

    //print our value
    return(sum);
}

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values

const addFixedValuesArrow = function() => {
    const toyCar =10;
    const toyBlocks =7;
    const sum = toyCar + toyBlocks;

    //print our results
    printValue(sum);

}

//TODO: create a function that takes in two values and adds them

const addTwoValuesArrow = (x, y) =>{
    const sum = x + y;

    //print our result
    printValue(sum);

}

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const addTwoValuesandReturnArrow = (x,y) =>{
    const sum = x+y;

    return sum;
}


//Testing our function

addFixedValues(); //10+7 we expext = 17
addTwoValues(2,5);
console.log(addTwoValuesandReturn(2,10));

addFixedValuesExpr ();
addTwoValuesExpr(2,5);
console.log(addTwoValuesandReturnExpr(2,10));

addFixedValuesArrow();
addTwoValuesArrow(2,5);
console.log(addTwoValuesandReturnArrow(2,10));