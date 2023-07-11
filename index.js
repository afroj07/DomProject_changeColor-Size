const box = document.querySelector(".box");
box.addEventListener('click', function(){
    
        if(box.classList=="target"){
            box.classList.remove("target");
            box.classList.add("box");
        }
       else{
        box.classList.add("target");
        box.classList.remove("box");
       }
});
