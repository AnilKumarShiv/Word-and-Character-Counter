let textbox = document.getElementById("textbox");
textbox.addEventListener('input', function(){
 var text = this.value;
 let char = text.length;
 document.getElementById("char").innerHTML=char;
 
 text =text.trim(); //trim to extra spacebar start and end
 let word = text.split(" "); // to break sentence and store in a array
 var cleanList =word.filter(function(elm){
     return elm != "";
 });
   //console.log(cleanList);  // to check on console
 document.getElementById("word").innerHTML = cleanList.length;
});