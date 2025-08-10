import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css'


export function ChatMessage({message, sender, time}){
  console.log(time);
  return(
    <div className={
      sender === 'user'
      ? 'chat-message-user'
      : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img
        src={RobotImage} 
        className='chat-message-profile'
        />
      )}
      <div className="chat-message-text">
              {message}
        <div className='chat-message-time'>{time}</div>
      </div>
      {sender === 'user' && (
        <img 
        src={UserImage} className='chat-message-profile' />
      )}
    </div>
  );
}
