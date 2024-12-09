console.log("Hello World");
// alles een class geven gwn css nabouwen als design, class hidden geven met javascript zichtbaar maken als je daarop klikt

const flavorButtons = document.querySelectorAll(".flavor");
const toppingButtons = document.querySelectorAll(".topping");
const shakeText = document.getElementById("shake-text");
const shakeImage = document.querySelector(".result img");
const shakeContainer = document.querySelector(".shake");



    const flavorImages = {
        aardbei: "/img/aardbei.png",
        chocolade: "/img/chocolade.png",
        vanille: "/img/vanilla.png"
    };

    const toppingImages = {
        blauwebessen: "/img/blauwebessen.png",
        aardbei: "/img/aardbeitopping.png",
        slagroom: "/img/slagroom.png",
        sprinkles: "/img/sprinkle.png"
    };

    // flavimg.aardbei

    flavorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const flavor = button.textContent(); 
            shakeImage.src = flavorImages; 
            shakeText.textContent = `Je hebt ${flavor} gekozen!`;
        }); 
    });

    toppingButtons.forEach(button => {
        button.onclick = () => {
            const topping = button.textContent();
        };
    });

        const blendButton = document.getElementById("blend-shake");
        const successSound = document.getElementById("success-sound");

       
           
      



