import React, { useState, useEffect } from 'react';

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('setting up interval');
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log('clearing interval');
        }
    }, [])

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )

}

export default Clock