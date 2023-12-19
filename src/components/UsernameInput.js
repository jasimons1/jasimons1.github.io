import React, { useState } from 'react';

const UsernameInput = ({ setUsername }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(inputValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Enter your username:
                </label>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Play</button>
            </form>
        </div>
    );
};

export default UsernameInput;
