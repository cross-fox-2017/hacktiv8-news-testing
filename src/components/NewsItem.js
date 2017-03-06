import React from 'react'

export const NewsItem= (props) => {
  return (
    <li>
      <a href={props.url} target="_blank">{props.title}</a>
    </li>
  )
}
