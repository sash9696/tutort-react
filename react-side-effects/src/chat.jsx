


export function createConnection(){
    //usually u will be connecting to a server

    return {
        connect(){
            console.log('✅ Connecting...');
        },
        disconnect(){
            console.log('❌ Disconnected.')
        }
    }
}