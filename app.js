// Function to generate a random light color
function generateLightColor() {
    // Generate random values for red, green, and blue components
    const r = Math.floor(Math.random() * 76) + 180; // Between 180 and 255
    const g = Math.floor(Math.random() * 76) + 180; // Between 180 and 255
    const b = Math.floor(Math.random() * 76) + 180; // Between 180 and 255
    
    // Convert to hex and return the color
    const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    return color;
}

// Get references to the DOM elements
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const generateButton = document.getElementById('generateColor');

// Event listener for the button
generateButton.addEventListener('click', () => {
    const randomLightColor = generateLightColor(); // Get a random light color
    colorDisplay.style.backgroundColor = randomLightColor; // Set background color of the display
    colorCode.textContent = randomLightColor; // Show the hex color code
});
