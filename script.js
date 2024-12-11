console.log("Hello World");
// alles een class geven gwn css nabouwen als design, class hidden geven met javascript zichtbaar maken als je daarop klikt

const flavorButtons = document.querySelectorAll(".flavor");
const toppingButtons = document.querySelectorAll(".topping");
const shakeText = document.getElementById("shake-text");
const shaketextTopping = document.getElementById("shake-text1");
const shakeImage = document.querySelector(".result img");
const shakeSmaak = document.querySelector(".shake");
const shakeTopping = document.querySelector(".shake1");

const flavorImages = {
    aardbei: "./img/aardbei.png",
    chocolade: "./img/chocolade.png",
    vanille: "./img/vanilla.png"
};

const toppingImages = {
    blauwebessen: "./img/blauwebessen.png",
    aardbei: "./img/aardbeitopping.png",
    slagroom: "./img/slagroom.png",
    sprinkles: "./img/sprinkle.png"
};

    // flav img.aardbei
    let flavor = null; 
    let topping = false; // Houd bij of een topping is gekozen

    flavorButtons.forEach(button => {
        button.addEventListener('click', function() {
            flavor = button.textContent.trim(); 
            shakeImage.src = flavorImages[flavor]; 
            shakeText.textContent = "Je hebt " + flavor + " gekozen!";
        }); 
    });

    toppingButtons.forEach(button => {
        button.addEventListener('click', function() {
            topping = true;
            const toppingName = button.textContent.trim();
            const toppingImg = document.createElement("img");
            toppingImg.src = toppingImages[toppingName];
            toppingImg.alt = toppingName;
            toppingImg.style.maxWidth = "80px"; 

            shakeTopping.appendChild(toppingImg); 
            shaketextTopping.textContent = "Je hebt " + toppingName + " gekozen!";
        });
    });

        const blendButton = document.getElementById("blend-shake");
        const successSound = document.getElementById("success-sound");
        const shakeStatus = document.getElementById("shake-status");


  
    
    blendButton.addEventListener('click', function() {
        if (!flavor) {
            // Geen smaak gekozen
            shakeStatus.textContent = "Je moet eerst een smaak kiezen!";
            shakeStatus.style.color = "red";
            shakeStatus.style.fontSize = "1.5em";
        } else if (!topping) {
            // Geen topping gekozen, maar smaak is wel gekozen (optioneel)
            shakeStatus.textContent = "Je hebt geen topping gekozen.";
            shakeStatus.style.color = "orange";
            shakeStatus.style.fontSize = "1.5em";
        } else {
            // Alles is gekozen
            successSound.play();
            setTimeout(function() {
                shakeStatus.textContent = "Bedankt voor je bestelling! 😊";
                shakeStatus.style.color = "green";
                shakeStatus.style.fontSize = "2em";
            }, 1000);
        }
    });
    // if else

    const reloadButton = document.getElementById("reload-button");

    reloadButton.addEventListener('click', function() {
        window.location.reload();
    });



       
           
      



