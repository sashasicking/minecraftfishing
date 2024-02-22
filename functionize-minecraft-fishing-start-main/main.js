// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
   catchfish(0.3, 0.1 ,0.05 , 0);

  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
   catchfish(0.9, 0.8, 0.5, 0)
  }
}
function catchfish(codProb, salmonProb, tropicalProb, pufferProb){
  let randNum = Math.random();
  if (randNum >codProb){
    resultImg.src = 'img/Raw-Cod.png';
    numCod++
    numCodSpan.textContent = numCod;
  } else if (randNum > salmonProb){
    resultImg.src = 'img/Raw-Salmon.png';
    numSalmon++
    numSalmonSpan.textContent = numSalmon;
  } else if (randNum > tropicalProb){
    resultImg.src = 'img/Tropical-Fish.png';
    numTropical++
    numTropicalSpan.textContent = numTropical;
  } else if(randNum> pufferProb){
    resultImg.src = 'img/Pufferfish.png';
    numPuffer++
    numPufferSpan.textContent = numPuffer;
  }
}