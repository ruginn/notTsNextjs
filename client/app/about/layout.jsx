import React from 'react'

function layout({children}) {
  return (
    <div>
        <h1>This is the top of the about section</h1>
        <div>{children}</div>
    </div>
  )
}

export default layout