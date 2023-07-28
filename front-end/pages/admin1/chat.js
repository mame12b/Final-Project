import React, { useState } from 'react';
import Layout from '../admin1'


const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you?', isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
      // Send input value to chatbot and receive response
      // Add response to messages using setMessages function
    }
  };

  return (
    <Layout>
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-100 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isBot ? 'items-start' : 'items-end'
            } mb-4`}
          >
            {message.isBot ? (
              <img
                src="https://via.placeholder.com/48"
                alt="Bot Avatar"
                className="w-8 h-8 rounded-full mr-4"
              />
            ) : null}
            <div
              className={`${
                message.isBot ? 'bg-white' : 'bg-blue-500'
              } rounded-lg p-4 shadow-md max-w-2/3`}
            >
              <p className={`${message.isBot ? 'text-gray-800' : 'text-white'}`}>
                {message.text}
              </p>
            </div>
            {!message.isBot ? (
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                className="w-8 h-8 rounded-full ml-4"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-100">
        <form onSubmit={handleMessageSubmit}>
          <div className="flex items-center p-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 rounded-full border-gray-300 py-2 px-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="ml-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default ChatPage;