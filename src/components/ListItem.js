import React from 'react'

function ListItem({person}) {
  return (
    <div>
        <p>
            I am {person.name}. I am {person.age} year old. I know {person.skill}
        </p>
  </div>
  )
}

export default ListItem