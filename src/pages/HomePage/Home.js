import React from 'react'

// Components 
import { InfoSection, Pricing } from '../../components'

//Data
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Pricing></Pricing>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />


    </>
  )
}

export default Home
