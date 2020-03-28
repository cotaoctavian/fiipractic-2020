import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';

const Battle = () => {

    const [result, setResult] = useState(null)

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then((response) => {
                setResult(response.data.results)
            })
            .catch(error => console.log(error))
    }, [])

    let content = (
        <div>
            <Menu container="battle" result={result} />
        </div>
    );
    return content;
}

export default Battle;