import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages';
import './App.css'


function App() {

 
  const [ chatMessages, setChatMessages ] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [{
      message: 'hello chatbot',
      sender: 'user',
      time: '22:10',
      id: 'id1'
    },
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      time: '22:11',
      id: 'id2'
    },
    {
      message: 'can you get me todays date?',
      sender: 'user',
      time: '22:12',
      id: 'id3'
    },
    {
      message: 'Today is September 27',
      sender: 'robot',
      time: '22:13',
      id: 'id4'
    }]
  });


         useEffect(() => {

          localStorage.setItem('chatMessages', JSON.stringify(chatMessages));

         }, [chatMessages])

        return (
          <div className="app-container">
         
          <ChatMessages 
          chatMessages={chatMessages}
          />
           <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          />
          </div>
        );
}

export default App
