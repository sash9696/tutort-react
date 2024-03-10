import React from 'react';


//render props
//Conditional Rendering

function ConditionalRenderer({condition, renderTrue, renderFalse}){

  return condition ? renderTrue() : renderFalse();
}

function App() {

  const isAdmin = false;


  return (
    <div>
      App
      <ConditionalRenderer
        condition={isAdmin}
        renderTrue={() => <p>Welcome Admin!</p>}
        renderFalse={() => <p>You are not authorized!</p>}
      />
    </div>
  )
}

export default App