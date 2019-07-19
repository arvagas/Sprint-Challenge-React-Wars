import React from 'react'

const Mass = ({mass}) => {
    return <p>Mass: {(mass==='unknown') ? `${mass}` : `${mass}kilo`}</p>
}

export default Mass