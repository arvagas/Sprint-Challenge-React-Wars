import React from 'react'
import Height from './Height'
import Mass from './Mass'
import HairColor from './HairColor'
import EyeColor from './EyeColor'
import SkinColor from './SkinColor'
import BirthYear from './BirthYear'
import Gender from './Gender'
import HomeWorld from './HomeWorld'
import ContentContainerProps from '../../styles/StylesContentContainerProps'

const ContentContainer = ({char}) => {
    return (
        <ContentContainerProps>
            <Height height={char.height}/>
            <Mass mass={char.mass}/>
            <HairColor hairColor={char.hair_color}/>
            <EyeColor eyeColor={char.eye_color}/>
            <SkinColor skinColor={char.skin_color}/>
            <BirthYear birthYear={char.birth_year}/>
            <Gender gender={char.gender}/>
            <HomeWorld homeWorld={char.homeworld}/>
        </ContentContainerProps>
    )
}

export default ContentContainer