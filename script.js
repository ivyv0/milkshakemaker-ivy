console.log("Hello World");
// alles een class geven gwn css nabouwen als design, class hidden geven met javascript zichtbaar maken als je daarop klikt

// flavors
const flavor1 = document.querySelector(".flavor1");
const flavor2 = document.querySelector(".flavor2");
const flavor3 = document.querySelector(".flavor3");

// toppings
const topping1 = document.querySelector(".topping1");
const topping2 = document.querySelector(".topping2");
const topping3 = document.querySelector(".topping3");
const topping4 = document.querySelector(".topping4");

// opties
const flavorStraw = document.querySelector(".flavor-aardbei");
const flavorCho = document.querySelector(".flavor-chocolade");
const flavorVan = document.querySelector(".flavor-vanille");
// opties toppings
const toppingBla = document.querySelector(".topping-blauwe");
const toppingStraw = document.querySelector(".topping-aardbei");
const toppingSlag = document.querySelector(".topping-slag");
const toppingSp = document.querySelector(".topping-sprinkles");

const shakeText = document.getElementById("shake-text");
const shaketextTopping = document.getElementById("shake-text1");
const shakeImage = document.querySelector(".result img");
const shakeSmaak = document.querySelector(".shake");
const shakeTopping = document.querySelector(".shake1");


function showElement(element) {
    element.classList.remove('flavor1', 'flavor2', 'flavor3', 'topping1', 'topping2', 'topping3', 'topping4');
}

let hasChosenFlavor = false;

flavorStraw.addEventListener('click', function() {
    if (!hasChosenFlavor) {  
        showElement(flavor1);
        hasChosenFlavor = true;
        flavor = "Aardbei";
        shakeText.textContent = "Je hebt " + flavor + " gekozen!";
    } else {
        alert("Je mag maar 1 smaak kiezen!");
    }
});

flavorCho.addEventListener('click', function() {
    if (!hasChosenFlavor) {  
        showElement(flavor2);
        hasChosenFlavor = true;
        flavor = "Chocolade";
        shakeText.textContent = "Je hebt " + flavor + " gekozen!";
    } else {
        alert("Je kan maar 1 smaak kiezen!");
    }
});

flavorVan.addEventListener('click', function() {
    if (!hasChosenFlavor) {  
        showElement(flavor3);
        hasChosenFlavor = true;
        flavor = "Vanille";
        shakeText.textContent = "Je hebt " + flavor + " gekozen!";
    } else {
        alert("Je kan maar 1 smaak kiezen!");
    }
});

toppingBla.addEventListener('click', function() {
        showElement(topping1); 
        topping = "Blauwe bessen";
        shaketextTopping.textContent = "Je hebt " + topping + " gekozen!";
    });

toppingStraw.addEventListener('click', function() {
        showElement(topping2); 
        topping = "Aardbei";
        shaketextTopping.textContent = "Je hebt " + topping + " gekozen!";
    });  
    
toppingSlag.addEventListener('click', function() {
        showElement(topping3); 
        topping = "Slagroom";
        shaketextTopping.textContent = "Je hebt " + topping + " gekozen!";
    }); 

toppingSp.addEventListener('click', function() {
        showElement(topping4); 
        shaketextTopping.textContent = "Je hebt Sprinkles gekozen!";
    }); 



const blendButton = document.getElementById("blend-shake");
const successSound = document.getElementById("success-sound");
const shakeStatus = document.getElementById("shake-status");


  
let flavor = null; 
let topping = false; 
    
blendButton.addEventListener('click', function() {
        if (!flavor) {
            shakeStatus.textContent = "Je moet eerst een smaak kiezen!";
            shakeStatus.style.color = "red";
            shakeStatus.style.fontSize = "1.5em";
        } else if (!topping) {
            shakeStatus.textContent = "Je hebt geen topping gekozen.";
            shakeStatus.style.color = "orange";
            shakeStatus.style.fontSize = "1.5em";
        } else {
            successSound.play();
            setTimeout(function() {
                shakeStatus.textContent = "Bedankt voor je bestelling! 😊";
                shakeStatus.style.color = "green";
                shakeStatus.style.fontSize = "2em";
            }, 1000);
        }
    });
  
    const reloadButton = document.getElementById("reload-button");

    reloadButton.addEventListener('click', function() {
        window.location.reload();
    });



       
           
      



