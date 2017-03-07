import React from 'react';

export const Form = (props) => {
  return (
    <div>
      <form>
        Search Title:<br/>
      <input onChange={props.searchTitle} value={props.keyword} type="text" /><br/>
      </form>
    </div>
  )
}
