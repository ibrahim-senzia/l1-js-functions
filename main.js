//differences between arrow function and expressions

//add two numbers :[a and b and return the sum]

   //FUNCTIONS

   //FIRST FUNCTION

   function addNumbers (a, b) {
    let sum = a+b;
    return sum;
   }

   addNumbers(3, 7)
   //result = 10

   

   //FUNCTION EXPRESSION

   const addNumbersExpr = function (){
      let sum = a + b;
      return sum;
   } 
     =>>>  //FUNCTION EXPRESSION



   //ARROW FUNCTION

   const addNumbersArrow = (a, b) => {
    let sum =a+b;
    return sum;
   }