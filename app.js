let count = 0;

// get the #value is id  & .btn is class in html
const value = document.querySelector("#value"); 
const btns = document.querySelectorAll(".btn");


// The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
// Also use call funcations
btns.forEach(function(btn) {
    btn.addEventListener("click",function (event){
       const styles = event.currentTarget.classList;
       if (styles.contains("neg")){
        count--
       }else if(styles.contains("pos")){
        count++
       }else{
        count=0;
       }

       if(count > 0){
        value.style.color = "green";
       }

       if(count < 0){
        value.style.color ="red"
       }

       if(count == 0){
        value.style.color = "black"
       }
       
       value.textContent = count;
    })
});

