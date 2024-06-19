import React from 'react'
import Sqaures from './Sqaures';

const Init = () => {
    const data = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 0, 1],
    ];
    return (
        <Sqaures data={data} />
    )
}

export default Init