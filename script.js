var petalPlayers = [];

function animatePetals() {
  var petals = document.querySelectorAll('.petal');
  
  if (!petals[0].animate) {
    var petalsContainer = document.getElementById('petals-container');
    petalsContainer.prepend("Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?");
    return false;
  }

  for (var i = 0, len = petals.length; i < len; ++i) {
    var petal = petals[i];
    petal.innerHTML = '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew"></div>';
    var scale = Math.random() * .8 + .2;


    var player = petal.animate([
      { transform: 'translate3d(' + (i/len*100) + 'vw,0,0) scale(' + scale + ')', opacity: scale },
      { transform: 'translate3d(' + (i/len*100 + 10) + 'vw,150vh,0) scale(' + scale + ')', opacity: 1 }
    ], {
      duration: Math.random() * 90000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });
    
    petalPlayers.push(player);
  }
}

animatePetals();

const messages = [
    `Volim te Martić`,
    "Volim te najviše na svetu",
    "Želim da si uvek srećna",
    "Jedva čekam da te vidim",
    "Najdivnija moja...",
    "Volim te"
]
let currentIndex = 0;
let isTyping = false;

function typeMessage(text, element, speed = 50) {
    element.textContent = ""; // Clear the text
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            isTyping = false; // Allow new clicks after typing is done
        }
    }

    type();
}

function changeMessage() {
    if (isTyping || currentIndex >= messages.length - 1) return; // Stop when reaching the last message
    isTyping = true;

    let messageElement = document.getElementById("heartfelt-message");

    currentIndex++; // Move to the next message
    typeMessage(messages[currentIndex], messageElement);
}

// Initialize first message when page loads
document.addEventListener("DOMContentLoaded", () => {
    typeMessage(messages[0], document.getElementById("heartfelt-message"));
});
