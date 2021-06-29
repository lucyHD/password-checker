const progressBar = document.getElementById("security"); 
const password = document.getElementById("password"); 
const complexityRating = document.getElementById("complexityRating"); 

//functions

const updateComplexityRating =  (progressBarValue) => {

    if(progressBarValue <= 4){
        complexityRating.innerHTML = "Weak"
    }else if(progressBarValue <= 7){
        complexityRating.innerHTML = "Medium"
    }else if(progressBar > 7){
        complexityRating.innerHTML = "Strong"
    }
}





// event listener
password.addEventListener("input", () => { 

    // progressBar.value = Math.floor(Math.random() * 11);
    if(password.value.length >= 8){
        console.log("you got 8 characters!")
        progressBar.value = 2
        updateComplexityRating(progressBar.value); 
    // }
    
    // if(password.value.length > 8 && password.value.match(/[A-Z]+/g)){
    //     console.log("you got 8 characters and an uppercase letter!")
    }

})

