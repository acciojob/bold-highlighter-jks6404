function highlight() {
    //Write your code here
   let words = document.getElementsByTagName("strong");
   for(let i = 0; i < words.length; i++){
    words[i].style.color = "green";
   };

}


function return_normal() {
    //Write your code here
    let words = document.getElementsByTagName("strong");
    for(let i = 0; i < words.length; i++){
     words[i].style.color = "black";
    };
}
