import  { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: inputValue,
        sender: 'Me',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender === 'Me' ? 'justify-end' : 'justify-start'
            } flex mb-4`}
          >
            <div
              className={`${
                message.sender === 'Me'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              } rounded-lg px-4 py-2`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;