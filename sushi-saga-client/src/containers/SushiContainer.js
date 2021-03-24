import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {fourSushi, eatSushi, moreSushi} = props
  return (
    <Fragment>
      <div className="belt">
        {fourSushi.map(s => (<Sushi key={s.id} sushi={s} eatSushi={eatSushi}/>))}
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer