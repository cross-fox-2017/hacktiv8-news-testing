import React from 'react';

export const List = (props) => {
  return (
    <ul>
      {
        props.data.map((item,index) => {
          return <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
        })
      }
    </ul>
  )
}
