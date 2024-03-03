import { useEffect, useState } from "react"
import { createConnection } from "./chat"




function ChatRoom(){

  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    //this doesnt close the connection when the component unmounts

    return () => {
      connection.disconnect();
    }

  }, [])

  return <div>Welcome to the new chat!</div>
}


function App() {
  // const [showChatRoom, setShowChatRoom] = useState(false);
  return (
    <div>
       {/* {showChatRoom && ( <ChatRoom/>)}
        <button onClick={() => setShowChatRoom(!showChatRoom)} >Click</button> */}


        <ChatRoom/>
    </div>
  )
}

export default App