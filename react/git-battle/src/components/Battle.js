import React, { useState, useEffect } from 'react';
import { BattleContainer } from '../assets/styles/Battle';
import axios from 'axios';

const Battle = () => {
    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [messageOne, setMessageOne] = useState('')
    const [messageTwo, setMessageTwo] = useState('')
    const [playerOneData, setPlayerOneData] = useState(null)
    const [playerTwoData, setPlayerTwoData] = useState(null)
    const [ready, setReady] = useState(false)
    const [finalResult, setFinalResult] = useState('')
    const [firstPlayerRepos, setFirstPlayerRepos] = useState(null)
    const [secondPlayerRepos, setSecondPlayerRepos] = useState(null)

    useEffect(() => {
        if (playerOneData !== null && playerTwoData !== null) {
            setTimeout(() => {
                setReady(true)
            }, 350)
        }
    }, [playerTwoData, playerOneData, messageOne, messageTwo])

    const handleFight = () => {
        setFirstPlayerRepos(playerOneData.public_repos);
        setSecondPlayerRepos(playerTwoData.public_repos); 
        if (parseInt(playerOneData.public_repos) > parseInt(playerTwoData.public_repos)) setFinalResult(`${playerOneData.login} wins!`);
        else if (parseInt(playerOneData.public_repos) < parseInt(playerTwoData.public_repos)) setFinalResult(`${playerTwoData.login} wins!`);
        else setFinalResult(`It's a tie!`)
    }

    const handlePlayerOne = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.get(`https://api.github.com/users/${playerOne}`);
            const data = result.data
            setPlayerOneData(data)
            setMessageOne(` is ready for battle!`)
            
        } catch (err) {
            setMessageOne('User not found.😓')
            setPlayerOneData(null)
        }
    }

    const handlePlayerTwo = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.get(`https://api.github.com/users/${playerTwo}`);
            const data = result.data

            if (data) {
                setPlayerTwoData(data)
                setMessageTwo(` is ready for battle!`)
            }
        } catch (err) {
            setMessageTwo('User not found.😓')
            setPlayerTwoData(null)
        }
    }

    let content = (
        <React.Fragment>
            <BattleContainer>
                <h2> Ready for battle? <span role="img" aria-label=""> 🥶 </span> </h2>
                <div>
                    <div>
                        <h3> Player one <span role="img" aria-label=""> 🧙 </span> </h3>
                        <form onSubmit={handlePlayerOne}>
                            <input
                                value={playerOne}
                                required
                                onChange={e => setPlayerOne(e.target.value)}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                            />
                            <button> Find player </button>
                        </form>
                        {playerOneData !== null ? <img src={playerOneData.avatar_url} alt="" /> : null}
                        {playerOneData !== null ? <span> <span> {playerOneData.login} </span> {messageOne} </span> :<span> {messageOne} </span>}
                        {firstPlayerRepos !== null ? <span> {firstPlayerRepos} repositories </span> : <span> </span>}
                    </div>

                    {ready ? <h1>VS</h1> : <h1> </h1>}

                    <div>
                        <h3> Player two <span role="img" aria-label=""> 👾 </span> </h3>
                        <form onSubmit={handlePlayerTwo}>
                            <input
                                value={playerTwo}
                                required
                                onChange={e => setPlayerTwo(e.target.value)}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false" />
                            <button> Find player </button>
                        </form>
                        {playerTwoData !== null ? <img src={playerTwoData.avatar_url} alt="" /> : null}
                        {playerTwoData !== null ? <span> <span> {playerTwoData.login} </span> {messageTwo} </span> : <span> {messageTwo} </span>}
                        {secondPlayerRepos !== null ? <span> {secondPlayerRepos} repositories </span> : <span> </span>}
                    </div>
                </div>

                {ready ? <input type="button" onClick={handleFight} value={"FIGHT!"} /> : null}
                <h4> {finalResult} </h4>

            </BattleContainer>

        </React.Fragment>
    );
    return content;
}

export default Battle;