
import { useEffect, useState, createContext } from 'react';

import firebase, { firestore } from '../app/FirebaseApp'
import MessageBox from '../containers/MessageBox';
import axios from 'axios';

import ChatInput from '../containers/ChatInput';

const chatappRef = firestore.collection('chatapp');

function Chat() { 
  const [ip, setIP] = useState('');    
  const [messages, setMessages] = useState([]);

  const getIp = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')    
    setIP(res.data.IPv4)
  }

  useEffect(() => {    
    getIp();
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
      sender:'me',      
      ip: ip,
      createdAt: firebase.firebase.firestore.FieldValue.serverTimestamp(),      
      content:msg,      
    });        
  }
  
  function ChatRoom(){         
    return(
      <div className='overlay'>
        <div className='chatRoom'>
            <MessageBox messages={messages} ip={ip}/>                  
            <ChatInput sendMessage={sendMessage}/>
        </div>
      </div>
    )
  }

  return (
    <div className="Chat">            
      <ChatRoom messages={messages} ip={ip} sendMessage={sendMessage}/>      
    </div>
  );
}

export default Chat;
