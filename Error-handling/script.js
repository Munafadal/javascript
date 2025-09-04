let missingNameError = new Error("name can't be empty");
try {
    // open DB
  let firstName = "Muna"
  if (firstName == undefined) {
      throw missingNameError
      
  } else {
     firstName = firstName.toUpperCase();
      console.log(firstName);  
      
  }
    console.log("I reached the end of the try blocks");
} catch (error) {
  console.log(missingNameError.message);
} finally {
    // close DB
    console.log("error or not code in my block always runs")
}
