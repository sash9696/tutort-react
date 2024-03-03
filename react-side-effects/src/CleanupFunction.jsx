import { useEffect, useState } from "react"



function IntervalComponent(){

  useEffect(()=>{

   const intervalId =  setInterval(() => {
      console.log('Interval ticking')
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Interval cleared: ',intervalId)
    }
  }, [])

  return <h1>Interval Component</h1>
}

function App() {


  const [showIntervalComponent, setShowIntervalComponent] = useState(false);


  function toggleIntervalComponent(){

    setShowIntervalComponent(!showIntervalComponent);
  }

  return (
    <div>
      {showIntervalComponent && <IntervalComponent/> }
      <button onClick={toggleIntervalComponent} >
        {showIntervalComponent ? "Hide" : "Show"} Interval Component
      </button>
    </div>
  )
}

export default App