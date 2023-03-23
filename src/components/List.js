import React from 'react'
import ListItem from './ListItem'

function List(props) {
  return (
    <ul>
      {props.items.map(items => (
        <ListItem
          key={items.id}
          items={items}
          onDone={props.onDone}
          onItemDeleted={props.onItemDeleted}
        ></ListItem>
      ))}
    </ul>
  )
}

export default List
