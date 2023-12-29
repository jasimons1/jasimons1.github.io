import React, { useState, useEffect } from 'react'
import UsernameInput from '../components/UsernameInput'
import eyeOfSauron from '../images/eyeOfSauron.png'

export default function TheAllSeeingEye() {
    const [username, setUsername] = useState('');
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        getQuestion();
    }, []);

    const getQuestion = async (userResponse) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/ask_question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: userResponse }),
            });

            const data = await response.json();

            if (response.ok) {
                setQuestion(data);
            } else {
                console.error('Failed to retrieve question', data.error);
            }
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

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
                            <>
                                <div className="questions">
                                    <h2>Welcome {username}!</h2>
                                    {question && (
                                        <>
                                            <input type="text" value={question.question} readOnly />
                                            <div className="answerButtons">
                                                <button id="yes" onClick={() => getQuestion('Yes')}>
                                                    Yes
                                                </button>
                                                <button id="no" onClick={() => getQuestion('No')}>
                                                    No
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="welcomeText">
                                    <h2>Welcome to The All Seeing Eye! Would you like to play a game?</h2>
                                </div>
                                <UsernameInput setUsername={setUsername} setRandomQuestion={question} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
