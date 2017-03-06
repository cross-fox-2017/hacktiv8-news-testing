import React from 'react'

const styles = {
  width: '30%',
  padding: '0px 10px'
}

export const DataSearch = (props) => {
  return (
    <form>
      <label>
        Search:
      </label>
      <input
        style={styles}
        value={props.searchKey}
        type='text'
        onChange={props.handleChange} />
      <button className='btn' type='button' onClick={props.handleClick}>
        Reset
      </button>
    </form>
  )
}
