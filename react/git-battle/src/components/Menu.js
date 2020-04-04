import React, { useState, useEffect } from 'react';
import { MenuStyle, BattleDiv } from '../assets/styles/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync, addUser } from '../actions/index';
import Modal from './Modal';

const BattleContainer = ({ result }) => {

    const [showResult, setShowResult] = useState(false)

    const handleClick = () => {
        setShowResult(!showResult)
    }

    return (
        <BattleDiv>
            {result !== null ? result.slice(0, 5).map((item, index) => {
                return (<span key={index}> <b>Name: </b> {item.name} <b>Height: </b> {item.height} <b>Mass: </b> {item.mass}</span>)
            }) : null}


            {showResult ? result.slice(5, 10).map((item, index) => {
                return (<span key={index}> <b>Name: </b> {item.name} <b>Height: </b> {item.height} <b>Mass: </b> {item.mass}</span>)
            }) : null}

            {showResult ? <button onClick={handleClick}> Hide data  </button> : <button onClick={handleClick}> Show data  </button>}

        </BattleDiv>
    );
}

const Menu = ({ container, result }) => {
    const [showUpMessage, setShowUpMessage] = useState(false)
    const [message, setMessage] = useState('Show content')
    const counter = useSelector(state => state.counter);
    const data = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {

    }, [data])

    const handleClick = () => {
        setShowUpMessage(!showUpMessage)
        if (showUpMessage === false) setMessage("Hide content")
        else setMessage("Show content")
    }

    const handlePlus = () => {
        dispatch(increment());
        //dispatch(incrementAsync());
    }

    const handleMinus = () => {
        dispatch(decrement());
        //dispatch(decrementAsync());
    }

    const handleAddUser = () => {
        dispatch(addUser({firstName: firstName, lastName: lastName, age: age}))
        setFirstName('');
        setLastName('');
        setAge('');
    }

    let content = (
        <MenuStyle>
            {container === "home" ?
                <div> {showUpMessage ? <Modal /> : null}
                    <button onClick={handleClick}> {message} </button>
                </div> : null}

            {container === "battle" ?
                <BattleContainer result={result} />
                : null}

            {container === "profile" ?
                <React.Fragment>
                    <button onClick={handlePlus}> + </button>
                    <button onClick={handleMinus}> - </button>
                    <p> {counter} </p>
                    <div>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <input value={age} onChange={e => setAge(e.target.value)}/>

                        <button onClick={handleAddUser}> Add </button>
                    </div>
                </React.Fragment>
                : null
            }
        </MenuStyle>
    );
    return content;
}

export default Menu;