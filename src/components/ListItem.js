import React from 'react'
import Card from './Card'

function DoneImg(props) {
  if (props.done) {
    return (
      <img
        className="checkDone"
        src="./assets/check (2).png"
        alt="Checkmark done"
      ></img>
    )
  } else {
    return (
      <img
        className="checkUndone"
        src="./assets/check-mark (1).png"
        alt="Checkmark empty"
      ></img>
    )
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.items.done ? 'done item' : 'item'}>
        {props.items.text}
        <div>
          <button
            onClick={() => {
              props.onDone(props.items)
            }}
          >
            <DoneImg done={props.items.done}></DoneImg>
          </button>
          <button
            className="deleteBtn"
            onClick={() => {
              props.onItemDeleted(props.items)
            }}
          >
            <img src="./assets/trash (1).png" alt="Trash"></img>
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem
