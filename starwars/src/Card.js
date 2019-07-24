import React from 'react'
import Name from './components/Name'
import ContentContainer from './components/content/ContentContainer'
import CardProps from './styles/StylesCardProps'

const Card = ({char}) => {
    return (
        <CardProps>
            <Name name={char.name}/>
            <ContentContainer char={char}/>
        </CardProps>
    )
}

export default Card