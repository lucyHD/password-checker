const progressBar = document.getElementById("security"); 
const password = document.getElementById("password"); 



password.addEventListener("input", () => {
    // console.log('sfsdfsdfsdf'); 
    // progressBar.value = Math.floor(Math.random() * 11);
    if(password.value.length > 8){
        console.log("you got 8 characters!")
        progressBar.value = 2
    }

})