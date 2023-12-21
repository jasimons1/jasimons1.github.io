import React, { useState, useEffect } from 'react';
import UsernameInput from '../components/UsernameInput';
import eyeOfSauron from '../images/eyeOfSauron.png';

export default function TheAllSeeingEye() {
    const [username, setUsername] = useState('');
    const [randomQuestion, setRandomQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

    useEffect(() => {
        getRandomQuestion();
    }, []);

    const getRandomQuestion = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/get_question');
            const data = await response.json();

            if (response.ok) {
                setRandomQuestion(data.question);
                setUserAnswer(null);
            } else {
                console.error('Failed to retrieve question');
            }
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    const handleAnswer = async (answer) => {
        setUserAnswer(answer);

        try {
            const response = await fetch('http://127.0.0.1:5000/update_model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_answer: answer,
                    current_question: {
                        id: randomQuestion.id,
                        text: randomQuestion.text,
                        traits: randomQuestion.traits,
                        user_response: answer,
                    },
                }),
            });

            if (!response.ok) {
                console.error('Failed to update model');
            }
        } catch (error) {
            console.error('Error updating model:', error);
        }

        await getRandomQuestion();
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
                                    {randomQuestion && (
                                        <>
                                            <input type="text" value={randomQuestion.text} readOnly />
                                            <div className="answerButtons">
                                                <button id="yes" onClick={() => handleAnswer('Yes')}>
                                                    Yes
                                                </button>
                                                <button id="no" onClick={() => handleAnswer('No')}>
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
                                <UsernameInput setUsername={setUsername} setRandomQuestion={getRandomQuestion} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
