import React from 'react'

function NameList() {
    const names = ['dinesh','praveen','naveen']
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameList