
import { useEffect, useState } from 'react';

import firebase, { firestore } from '../app/FirebaseApp'
import MessageBox from '../containers/MessageBox';
import { store } from "../app/store"
import ChatInput from '../containers/ChatInput';

const chatappRef = firestore.collection('chatapp');

function Chat() {   
  const [user, setUser] = useState({});      
  const [messages, setMessages] = useState([]);    

  useEffect(() => {      
    setUser(store.getState().loged.user); 

    chatappRef
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        let _messages = [];

        snapshot.docs.forEach(e => _messages.push( {id: e.id, ...e.data()} ));

        setMessages(_messages);
      })
  }, [])
  
  const sendMessage = async (msg) => {  
    await chatappRef.add({
      sender: user.name,            
      createdAt: firebase.firebase.firestore.FieldValue.serverTimestamp(),      
      content:msg,      
    });        
  }
  
  function ChatRoom(){           
    return(
      <div className='overlay'>
        <div className='chatRoom'>
            <MessageBox messages={messages} currentUser={user.name}/>                  
            <ChatInput sendMessage={sendMessage}/>
        </div>
      </div>
    )
  }

  return (
    <div className="Chat">            
      <ChatRoom messages={messages} sendMessage={sendMessage}/>      
    </div>
  );
}

export default Chat;
