import React, { useState } from 'react'

const UsernameInput = ({ setUsername, setRandomQuestion }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setUsername(inputValue)
        setRandomQuestion()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="label">Enter your username:</label>
                <input className="inputField" type="text" value={inputValue} onChange={handleInputChange} />
                <button className="playButton" type="submit">Play</button>
            </form>
        </div>
    )
}

export default UsernameInput
