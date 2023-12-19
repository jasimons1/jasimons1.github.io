import React, { useState, useEffect } from 'react'
import UsernameInput from "../components/UsernameInput"
import questionsData from "../json/questions.json"

import eyeOfSauron from "../images/eyeOfSauron.png"

export default function TheAllSeeingEye() {
    const [username, setUsername] = useState('')
    const [randomQuestion, setRandomQuestion] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)
    const [excludedIDs, setExcludedIDs] = useState(Array.from({length: 28 }, (_, index) => index + 27))

    useEffect(() => {
        getRandomQuestion()
    }, [])

    const getRandomQuestion = () => {

        const filteredQuestions = questionsData.questions.filter(
            (question) => !excludedIDs.includes(question.id)
        )

        const randomIndex = Math.floor(Math.random() * filteredQuestions.length)
        const question = filteredQuestions[randomIndex]
        setRandomQuestion(question)
        setUserAnswer(null)
    }

    const handleAnswer = (answer) => {
        setUserAnswer(answer)

        if (excludedIDs.length > 0) {
            const updatedExcludedIDs = [...excludedIDs]
            updatedExcludedIDs.shift()
            setExcludedIDs(updatedExcludedIDs)
        }
        getRandomQuestion()
    }

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
                                            <button id="yes" onClick={() => handleAnswer('Yes')}>Yes</button>
                                            <button id="no" onClick={() => handleAnswer('No')}>No</button>
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
    )
}
