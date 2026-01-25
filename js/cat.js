// Purr Score
const petBtn = document.getElementById('pet-btn');
const purrScoreDisplay = document.getElementById('purr-score');
let score = 0;

if (petBtn && purrScoreDisplay) {
    /* Event listener for updating local score state via DOM text manipulation */
    petBtn.addEventListener('click', () => {

        score++;
        purrScoreDisplay.textContent = score;
    });
}

// Cat Fact Generator
const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('cat-fact');

const catFacts = [
    "Cats spend 70% of their lives sleeping.",
    "A cat's ear has 32 muscles.",
    "Cats can rotate their ears 180 degrees.",
    "The hearing of the average cat is at least five times keener than that of a human adult.",
    "In the largest cat breed, the average male weighs approximately 20 pounds.",
    "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.",
    "A group of kittens is called a kindle, and a group of cats is called a clowder.",
    "Cats have five toes on each front paw, but only four toes on each back paw."
];

if (factBtn && factDisplay) {
    factBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * catFacts.length);
        /* Triggering opacity transition for better visual feedback during fact rotation */
        factDisplay.style.opacity = 0;


        setTimeout(() => {
            factDisplay.textContent = `"${catFacts[randomIndex]}"`;
            factDisplay.style.opacity = 1;
        }, 300);
    });
}

// Add simple transition for fade effect
if (factDisplay) {
    factDisplay.style.transition = 'opacity 0.3s ease-in-out';
}
