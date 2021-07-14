const progressBar = document.getElementById("progress-bar"); 
const password = document.getElementById("password"); 
const complexityRating = document.getElementById("complexityRating"); 


const getUserInput  = (charactersEntered) => {
        //the event object is passed by deafult
      return charactersEntered; 

}


document.addEventListener("DOMContentLoaded", () => { 

password.addEventListener("input", function(){getUserInput(event.target.value)})

})

export default getUserInput; 
