import { useState } from "react";
import { Chatbot } from "supersimpledev";
import { getChatbotReply } from "./ai";
import dayjs from "dayjs";
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages, clearMessages}){
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  

  function saveInputText(event){
    setInputText(event.target.value);
  }



  async function sendMessage(){

    if (!inputText.trim()) return;
    setLoading(true)

    const newChatMessage = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        time: dayjs().format('HH:mm'),
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessage);
    setInputText('');

    try{
      // const response = await fetch('URL', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer YOUR_API_KEY'
      //   },
      //   body: JSON.stringify({message: inputText})
      // })
      // const data = await response.json();

      const aiText = await getChatbotReply(inputText);



      const aiMessage = {
        message: aiText,
        sender: 'robot',
        time: dayjs().format('HH:mm'),
        id:crypto.randomUUID()
      }

         setChatMessages([...newChatMessage, aiMessage])
    } catch(error){

      setChatMessages([...newChatMessage, {
        message: error,
        sender: 'robot',
        time: dayjs().format('HH:mm'),
        id: crypto.randomUUID()
      }]);
    } finally {
      setLoading(false);
     
    }

    //const response = Chatbot.getResponse(inputText);
    //setInputText('');

  }

  return(
    <div className='chat-input-container'>
    <input
    placeholder='Send a message to Chatbot'
    size="30"
    onChange={saveInputText}
    value={inputText}
    className='chat-input'
    onKeyDown={(e) => {
      if(e.key === 'Enter' && !loading){
        sendMessage();
      }
    }}
    />
    <button
    onClick={sendMessage}
    className='send-button'
    disabled={loading}
    >
      {loading ? 'Sending...' : 'Send'}
    </button>
    <button
    onClick={clearMessages}
    className='clear-button'
    disabled={loading}
    >
     Clear
    </button>
    </div>
  )
}
