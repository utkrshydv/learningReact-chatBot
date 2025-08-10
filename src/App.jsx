import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import dayjs from 'dayjs';
import './App.css'

function App() {

  const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));

  const [chatMessages, setChatMessages] = useState(
    savedMessages && savedMessages.length > 0
      ? savedMessages
      : [
          {
            message: 'hello chatbot',
            sender: 'user',
            id: 'id1',
            time: `${dayjs().format('HH:mm')}`
          },
          {
            message: 'Hello! How can I help you?',
            sender: 'robot',
            id: 'id2',
            time: `${dayjs().format('HH:mm')}`
          },
          {
            message: 'can you get me todays date?',
            sender: 'user',
            id: 'id3',
            time: `${dayjs().format('HH:mm')}`
          },
          {
            message: `Today is ${dayjs().format('ddd, MMM D')}`,
            sender: 'robot',
            id: 'id4',
            time: `${dayjs().format('HH:mm')}`
          }
        ]
  );

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  function clearMessages() {
    setChatMessages([]);
    localStorage.removeItem('chatMessages');
  }

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        clearMessages={clearMessages}
      />
    </div>
  );
}

export default App;
