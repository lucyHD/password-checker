const progressBar = document.getElementById("security"); 
const password = document.getElementById("password"); 



password.addEventListener("keydown", () => {
    console.log('sfsdfsdfsdf'); 
    progressBar.value = Math.floor(Math.random() * 11);

})