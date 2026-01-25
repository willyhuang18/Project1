const waterInput = document.getElementById('water-amount');
const ratioInput = document.getElementById('ratio-range');
const ratioDisplay = document.getElementById('ratio-display');
const resultDisplay = document.getElementById('coffee-result');
const strengthMeter = document.getElementById('strength-meter');
const strengthText = document.getElementById('strength-text');

// Calculate Coffee & Update UI
function calculate() {

    if (!waterInput || !ratioInput) return;

    const water = parseFloat(waterInput.value) || 0;
    const ratio = parseFloat(ratioInput.value) || 16;
    const coffee = (water / ratio).toFixed(1);

    // Update Text
    if (ratioDisplay) ratioDisplay.innerText = ratio;

    // Animate Result Number
    animateValue(resultDisplay, parseFloat(resultDisplay.innerText), coffee, 500);

    // Visual Strength Meter Logic
    // 12 (Strong) -> 100% fill? No, logically:
    // 12 = Strongest, 20 = Weakest.
    // Let's map 12-20 range to 100%-0% or color.

    // Normalized 0 to 1 (0=12, 1=20)
    const normalized = (ratio - 12) / (20 - 12);

    // Fill width: Invert so stronger (lower ratio) = more fill
    const fillPercent = 100 - (normalized * 100);

    if (strengthMeter) {
        strengthMeter.style.width = `${fillPercent}%`;

        // Dynamic Color: Strong (Dark) -> Weak (Gold/Light)
        // RGB Interpolation simplified
        if (ratio < 14) {
            strengthText.innerText = "Bold & Intense";
            strengthText.style.color = "#3b2f2f"; // Dark bean
            strengthMeter.style.background = "#3b2f2f";
        } else if (ratio < 16) {
            strengthText.innerText = "Strong";
            strengthText.style.color = "#6f4e37";
            strengthMeter.style.background = "#6f4e37";
        } else if (ratio < 18) {
            strengthText.innerText = "Balanced";
            strengthText.style.color = "#a67c52";
            strengthMeter.style.background = "linear-gradient(90deg, #6f4e37, #d4af37)";
        } else {
            strengthText.innerText = "Light & Tea-like";
            strengthText.style.color = "#d4af37"; // Gold
            strengthMeter.style.background = "#d4af37";
        }
    }
}

// Number Animation Utility
function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = (start + progress * (end - start)).toFixed(1);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Scroll Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
    // Initial Calc
    calculate();

    // Event Listeners
    if (waterInput) waterInput.addEventListener('input', calculate);
    if (ratioInput) ratioInput.addEventListener('input', calculate);

    // Attach Observer
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
