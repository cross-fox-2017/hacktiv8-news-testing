import React from 'react'

export const DataList = (props) => {
  return (
    <ul>
      {props.news.map((item, index) => {
         return (
           <li key={index}>
             <a href={item.url}>
               {item.title}
             </a>
           </li>
         )
       })}
    </ul>
  )
}
