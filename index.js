import app from './app/index.js';

try{

  app();

  console.log("All checks passed! Congratulations :)")

}catch(e){

  console.log(e.message);

  console.log("Expected value: " + JSON.stringify(e.expected));
  console.log("Actual value: " + JSON.stringify(e.actual));

}



export default {};
