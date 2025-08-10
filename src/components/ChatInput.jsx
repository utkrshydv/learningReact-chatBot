import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');

  function saveInputText(event){
    setInputText(event.target.value);
  }


  function sendMessage(){
    const newChatMessage = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        time: dayjs().format('HH:mm'),
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessage);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessage, 
      {
        message: response,
        sender: 'robot',
        time: dayjs().format('HH:mm'),
        id: crypto.randomUUID()
      }
    ])

    setInputText('');
  }

  return(
    <div className='chat-input-container'>
    <input
    placeholder='Send a message to Chatbot'
    size="30"
    onChange={saveInputText}
    value={inputText}
    className='chat-input'
    />
    <button
    onClick={sendMessage}
    className='send-button'
    >
      Send
    </button>
    </div>
  )
}
