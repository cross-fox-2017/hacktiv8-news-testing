import React from 'react'
import {NewsItem} from './NewsItem.js'
export const NewsList = (props) => {
  return (
    <ul>
      {
        props.links.map((item,index)=>{
          return(
            <NewsItem key={index} {...item}/>
          )
        })
      }
    </ul>
  )
}
