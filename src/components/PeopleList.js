import React from 'react'
import {PeopleCount} from './PeopleCount.js'
export const PeopleList = (props) => {
  return (
    <ul>
      {
        props.peoplez.map((item,index)=>{
          return(
            <PeopleCount key={index} {...item}/>
          )
        })
       }
    </ul>
  )
}
