//Skriv in vinnaren här innanför "" Glöm inte att den ska vara stängd med ;
let vinnaren = "inas";

document.querySelector('.gift').addEventListener('click', function() {
  document.getElementById('giftModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('giftModal').style.display = 'none';
});

// Funktion för att ladda skript åt twerking santa endast när submit har utförts.
function loadSantaScripts() {
  const scriptSources = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
    "twerkSanta.js"
  ];
//Skapar skript element för varje string i arrayen ovan.
  scriptSources.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  });
}
// Form submission funktion
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Förhindra automatisk submission av formuläret

  let input = document.querySelector('input[name="instagramName"]');
  let inputValue = input.value.trim(); //Ta bort mellanslag

  if(inputValue === vinnaren){
    //uppdatera grattis meddelandet till vinnaren.
    document.querySelector('#text p').textContent = `Grattis ${inputValue}! Du har vunnit ett presentkort från Cervera värt 500kr! Vi kommer att kontakta dig inom kort via instagram DM.`;
    console.log("hej")

    document.querySelector('.gift').style.display = 'none';

     // Load the Santa scripts and display the Santa animation
       // Load the Santa scripts and display the Santa animation
       loadSantaScripts();
       document.getElementById('twerkingSantaContainer').style.display = 'block';
       document.getElementById('giftModal').style.display = 'none'; // Hide modal instead of removing it
      //  document.querySelector('#text p').textContent = "Grattis! Du har vunnit 7 dagar fri Annonsering!";
  }
//   document.querySelector('.gift').style.display = 'none';
//   //Hämtar tomten när man trycker på submit och kör funktionen som kör tomtens script
//  loadSantaScripts();
//     document.getElementById('twerkingSantaContainer').style.display = 'block';
//     document.getElementById('giftModal').remove();

  else if(inputValue.length < 2) {
    // Visa felmeddelande i modalen
    let errorDiv = document.createElement('div');
    errorDiv.textContent = 'Vänligen skriv in användarnamn';
    errorDiv.style.color = 'red';
    document.querySelector('.modal-content').appendChild(errorDiv);

    setTimeout(function() {
      errorDiv.remove(); // Ta bort felmeddelandet efter en viss tid, t.ex. 3 sekunder
    }, 3000);
  } else {
    // Hantera giltig form submission här
     // Hide or remove the current content
     document.querySelector('.gift').style.display = 'none';

     // Load the Santa scripts and display the Santa animation
     loadSantaScripts();
     document.querySelector('.gift').style.display = 'none';
     document.getElementById('twerkingSantaContainer').style.display = 'block';
     document.getElementById('giftModal').style.display = 'none'; // Hide modal instead of removing it
     document.querySelector('#text p');
     document.querySelector('#Bovision a');
  }
});

// stäng modal om man klickar utanför den.
window.onclick = function(event) {
  let modal = document.getElementById('giftModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
