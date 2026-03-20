// ============================================
//  RANDOM FACTS — script.js
// ============================================

const facts = [
  "The International Space Station travels at ~27,600 km/h — it orbits Earth every 90 minutes.",
  "Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs — still edible.",
  "A day on Venus is longer than a year on Venus. It rotates so slowly it completes one orbit before finishing one spin.",
  "The human brain generates about 23 watts of power — enough to light a dim bulb.",
  "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
  "There are more trees on Earth than stars in the Milky Way galaxy.",
  "Octopuses have three hearts, blue blood, and nine brains — one central brain and one in each arm.",
  "The shortest war in history lasted 38–45 minutes. It was between Britain and Zanzibar in 1896.",
  "Hot water can freeze faster than cold water under certain conditions — this is called the Mpemba effect.",
  "A single bolt of lightning is five times hotter than the surface of the Sun.",
  "Sharks are older than trees. Sharks have existed for ~450 million years; trees for only ~350 million.",
  "The Eiffel Tower grows about 15 cm taller in summer due to thermal expansion of the iron.",
  "Water can exist in all three states — solid, liquid, and gas — simultaneously at its triple point.",
  "Your body contains enough carbon to make nearly 9,000 pencils.",
  "The Great Wall of China is not visible from space with the naked eye — this is a popular myth.",
  "Crows can recognize human faces and hold grudges for years.",
  "Light takes only 8 minutes and 20 seconds to travel from the Sun to Earth.",
  "A teaspoon of neutron star material would weigh about 10 million tonnes on Earth.",
  "Bananas are slightly radioactive due to their potassium content.",
  "The average person walks about 100,000 km in their lifetime — roughly twice around the Earth.",
  "Oxford University is older than the Aztec Empire.",
  "Wombat droppings are cube-shaped — the only known animal to produce cube-shaped feces.",
  "The smell of rain has a name: petrichor. It comes from oils released by plants and bacteria in soil.",
  "You can hear a blue whale's heartbeat from over 3 km away.",
  "There is a planet made largely of diamonds — 55 Cancri e, twice the size of Earth.",
];

let lastIndex = -1;

function getRandomFact() {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastIndex);
  lastIndex = index;
  return facts[index];
}

// ---- DOM references ----
const btn      = document.getElementById('factBtn');
const factCard = document.getElementById('factCard');
const factText = document.getElementById('factText');

// ---- Button click handler ----
btn.addEventListener('click', () => {
  const fact = getRandomFact();

  // Hide the card briefly so the animation replays
  factCard.hidden = true;
  factCard.style.animation = 'none';

  // Force reflow so the animation resets
  void factCard.offsetWidth;

  // Update text and show
  factText.textContent = fact;
  factCard.style.animation = '';
  factCard.hidden = false;

  // Subtle button feedback
  btn.querySelector('.fact-btn__text').textContent = 'Another Fact ✦';
});
