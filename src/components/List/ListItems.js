import React from 'react'

import ListItem from './ListItem'

function ListItems() {

    // using list print directly
    const items = ['Anvesh', 'Bunny' ]
    const item = items.map(name => <p>{name}</p>)

    // print dictionary items 
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]

      const personsList = persons.map(person => <p>
        I am {person.name}. I am {person.age} year old. I know {person.skill}
      </p>
      )

        //dictionary items with function
      const personsList2 = persons.map(person =>
        <ListItem key={person.id} person={person} />
      )

    //   adding key as index
      const nameList = items.map((item, index) =><p key={index} >{index+1}. {item}</p>)



  return (
    <div>
        <h1>List</h1>
        {
            items.map(name => <p>{name}</p>)
        }
        or
        {item}  

        <h3>"json (dictionarya)"</h3>
        
        {personsList}

        (using funciton )
        {personsList2}

        
        (using key in items)
        {nameList}
    </div>
  )
}

export default ListItems