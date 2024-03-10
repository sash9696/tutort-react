import React, { useState } from 'react'

//render props

//pass one or more fuctions as a props to components 
//in order to render its children based on custom logic of parent
//when we want parent component to control how the child renders


//MouseTracker

function MouseTracker({render}){
  const [position, setPosition] = useState({
    x:0,
    y:0
  });

  function handleMouseMove(event){
    console.log(event)
    setPosition({
      x:event.clientX,
      y: event.clientY
    })
  }

  return (
    <div style={{height:'100vh'}} onMouseMove={handleMouseMove} >
      {render(position)}
    </div>
  )
}

function App() {
  return (
    <div>
      App

      <MouseTracker
        render = {(mousePosition) => (
          <p>
            Mouse Position: {mousePosition.x}, {mousePosition.y}
          </p>
        )}
      />

    </div>
  )
}

export default App