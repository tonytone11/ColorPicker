import { useState } from 'react';
import './Picker.css';

// Define an array of preset colors with their names and hex values
const presetColors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Blue', value: '#3b82f6' },
];

// Define the Picker functional component
const Picker = () => {
    // Declare a state variable 'selectedColor' with initial value 'indigo' and a function to update it
    const [selectedColor, setSelectedColor] = useState('indigo');

    // Function to handle color button clicks, updates the selected color
    const handleColorClick = (colorName) => {
        setSelectedColor(colorName);
    };

    // Function to reset the selected color to 'white'
    const handleReset = () => {
        setSelectedColor('white');
    };

    // Return the JSX to render the component
    return (
        <div className="card">
            {/* Card header with title */}
            <div className="card-header">
                <h2 className="card-title">Color Picker</h2>
            </div>
            {/* Card content */}
            <div className="card-content">
                {/* Display the selected color */}
                <div
                    className="color-display"
                    style={{
                        // Set the background color based on the selected color
                        backgroundColor: selectedColor === 'white' ? 'white' : presetColors.find(c => c.name.toLowerCase() === selectedColor.toLowerCase())?.value
                    }}
                >
                    {/* Display the name of the selected color */}
                    <div className="color-label">
                        {selectedColor}
                    </div>
                </div>

                {/* Grid of color buttons */}
                <div className="color-grid">
                    {presetColors.map((color) => (
                        // Button for each preset color
                        <button
                            key={color.name}
                            className={`color-button ${selectedColor === color.name.toLowerCase() ? 'selected' : ''}`} // Apply 'selected' class if the color is selected
                            style={{ backgroundColor: color.value }} // Set button background color
                            onClick={() => handleColorClick(color.name.toLowerCase())} // Handle button click
                            title={color.name} // Set button title attribute
                        />
                    ))}
                </div>

                <button
                    className="reset-button"
                    onClick={handleReset}
                >
                    Reset to White
                </button>
            </div>
        </div>
    );
};

// Export the Picker component as the default export
export default Picker;