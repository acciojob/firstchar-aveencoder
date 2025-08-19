function firstChar(text) {
   if(text.length == 0){
	   return "";
   }
  else{
	  return  text.trim()[0];
  }	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
