import React, { useEffect } from 'react'


//withLogger 

function withLogger(WrappedComponent){

  return function WithLogger(props){

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`)
    }, [])

    return <WrappedComponent {...props} />
  }
}

function Button(){

  return <button>Button</button>
}

function Text(){
  return <p>This is a text</p>
}

const ButtonWithLogger = withLogger(Button);
const TextWithLogger = withLogger(Text);



console.log(ButtonWithLogger)

function App() {
  return (
    <div>
      App
      <ButtonWithLogger/>
      <TextWithLogger/>
    </div>
  )
}

export default App