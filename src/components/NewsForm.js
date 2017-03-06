import React from 'react'

export const NewsForm= (props) => {
  return (
    <form>
      <input type='text'  onChange={props.handleChange} value={props.value}/>
    </form>
  )
}
