import React, { useState } from 'react'
import UsernameInput from "../components/UsernameInput";

import eyeOfSauron from "../images/eyeOfSauron.png"

export default function TheAllSeeingEye() {
    const [username, setUsername] = useState('')

    return (
        <div className="home">
            <h1 className="title">The All Seeing Eye</h1>
            <div className="container">
                <div className="theAllSeeingEye">
                    <img src={eyeOfSauron} alt="eyeOfSauron" />
                </div>
                <div className="quizContainer">
                    <div className="userInputField">
                        {username ? (
                            <h2>Welcome, {username}!</h2>
                        ) : (
                            <>
                                <div className="welcomeText">
                                    <h2>Welcome to The All Seeing Eye! Would you like to play a game?</h2>
                                </div>
                                <UsernameInput setUsername={setUsername} />
                            </>
                        )}
                    </div>
                    {/* Other game content goes here */}
                </div>
            </div>
        </div>
    )
}
