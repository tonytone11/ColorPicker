import { useState } from 'react';
import './Picker.css';

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

const Picker = () => {
    const [selectedColor, setSelectedColor] = useState('indigo');

    const handleColorClick = (colorName) => {
        setSelectedColor(colorName);
    };

    const handleReset = () => {
        setSelectedColor('white');
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">Color Picker</h2>
            </div>
            <div className="card-content">
                <div
                    className="color-display"
                    style={{
                        backgroundColor: selectedColor === 'white' ? 'white' : presetColors.find(c => c.name.toLowerCase() === selectedColor.toLowerCase())?.value
                    }}
                >
                    <div className="color-label">
                        {selectedColor}
                    </div>
                </div>

                <div className="color-grid">
                    {presetColors.map((color) => (
                        <button
                            key={color.name}
                            className={`color-button ${selectedColor === color.name.toLowerCase() ? 'selected' : ''}`}
                            style={{ backgroundColor: color.value }}
                            onClick={() => handleColorClick(color.name.toLowerCase())}
                            title={color.name}
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

export default Picker;