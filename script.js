//Get to DOM elements

const gameContainer = document.querySelector(".container")
userResult = document.querySelector(".user-result img")
comResult = document.querySelector(".com-result img")
result = document.querySelector(".result")
optionImages = document.querySelectorAll(".option-image")


//Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) =>{
        image.classList.add("active")

        userResult.src = comResult.src = "img/rock.png"
        result.textContent = "Wait.."

        //Loop through each option image again
        optionImages.forEach((image2, index2) => {
           //if the current index doesn't match the clicked index
           //remove the "active" class from the other option images
           index !== index2 && image2.classList.remove("active")
        });

        gameContainer.classList.add("start")
        
        //set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start")
            
           //get the source of the clicked option image
           let imageSrc = e.target.querySelector("img").src;
           //set the user image to the clicked option image
           userResult.src = imageSrc;

           //Generate a random number between 0 and 2
           let randomNumber = Math.floor(Math.random() * 3);
           //create an array of COM image option
           let comImages = ["img/rock.png", "img/paper.png", "img/scissor.png"]
           //set the COM image to a random option from the array
           comResult.src = comImages[randomNumber];

           //Assign a letter value to the COM option (R for rock, P for papper, S for scissor)
           let comValue = ["R", "P", "S"] [randomNumber];
           //Assign a letter value to the clicked option (based on index)
           let userValue = ["R", "P", "S"] [index];

           //create an object with all possible outcomes
           let outcomes = {
            RR: "Draw",
            RP: "Com",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Com",
            SS: "Draw",
            SR: "Com",
            SP: "User",

           };

           //look up the outcome value based on user and com option
           let outComeValue = outcomes[userValue + comValue]

           //display the result
           result.textContent = userValue === comValue ? "Match Draw" : `${outComeValue} Won!!`
 
           console.log(outComeValue);
            
        }, 2500);
    });
});

