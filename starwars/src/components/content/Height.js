import React from 'react'

const Height = ({height}) => {
    return <p>Height: {(height==='unknown') ? `${height}` : `${height}cm`}</p>
}

export default Height