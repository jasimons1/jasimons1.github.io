import eyeOfSauron from "../images/eyeOfSauron.png"
import React from "react"

export default function Leaderboard() {

    return (
        <div>
            <div className="lotr">
                <h1 className="title">The All Seeing Eye</h1>
                <div className="container">
                    <div className="theAllSeeingEye">
                        <img src={eyeOfSauron} alt="eyeOfSauron" />
                    </div>
                    <div className="leaderboard-table">
                        <table>
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Score Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
