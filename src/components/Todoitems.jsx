import React from 'react'
import '../styles/Todoitems.css'
import edit from './edit-icon-16.png'

function Todoitems() {
  return (
    <div>
        <input id='doneornot' type='checkbox'  />
        <input id='typing' type='text'  />
        <button id='edit/save'><img src={edit} /></button>
    </div>
  )
}

export default Todoitems