const progressBar = document.getElementById("security"); 
const password = document.getElementById("password"); 
const complexityRating = document.getElementById("complexityRating"); 

//functions

document.addEventListener("DOMContentLoaded", () => {


 const checkLengthOfPassword = () => {
let  inputPassword  = event.target.value.length
let progressBarValue = progressBar.value 

if(inputPassword < 8){
    complexityRating.innerHTML = 'Weak! Your password needs to be a minimum of 8 characters!'
}else if(inputPassword >= 8){
    complexityRating.innerHTML = "Medium! You've got some letters - that's quite good!"
    progressBar.value++;
}

 
}

// const updateComplexityRating =  (progressBarValue) => {
//     if(progressBarValue <= 4){
//         complexityRating.innerHTML = "Weak"
//     }else if(progressBarValue <= 7){
//         complexityRating.innerHTML = "Medium"
//     }else if(progressBar > 7){
//         complexityRating.innerHTML = "Strong"
//     }
// }


// event listener



password.addEventListener("input", checkLengthOfPassword)

}); 
    // if(password.value.length >= 8){
    //     console.log("you got 8 characters!")
    //     progressBar.value = 2
    //     updateComplexityRating(progressBar.value); 
    // }
    
    
    // if(password.value.length > 8 && password.value.match(/[A-Z]+/g)){
    //     console.log("you got 8 characters and an uppercase letter!")
    

// })

