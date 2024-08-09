'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);

    const initialSystemMessage = {
      role: 'system',
      content: 'You are a helpful assistant.',
    };

    const updatedChatHistory = chatHistory.length === 0
      ? [initialSystemMessage, ...chatHistory, { role: 'user', content: userInput }]
      : [...chatHistory, { role: 'user', content: userInput }];

    setChatHistory(updatedChatHistory);

    try {
      const response = await fetch('/api/bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedChatHistory }),  
      });

      const data = await response.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        setChatHistory((prevChat) => [
          ...prevChat,
          { role: 'assistant', content: data.choices[0].message.content },
        ]);
      } else {
        console.error('Unexpected API response structure:', data);
        setChatHistory((prevChat) => [
          ...prevChat,
          { role: 'assistant', content: 'Error: Unexpected response from the API' },
        ]);
      }
    } catch (error) {
      console.error('Error querying LLaMA API:', error);
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: 'assistant', content: 'Error querying LLaMA API' },
      ]);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-title"> Chatter Bot </div>
        <p className="chat-description"> Ask Any Question & Chatter Bot Will Respond </p>

        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.role}`}
            >
              <div className={`message-sender ${message.role}`}>
                {message.role === 'user' ? 'User' : 'ChatterBot'}
              </div>
              <div className={`message-content ${message.role}`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask me anything"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          {isLoading ? (
            <div className="loading">Loading..</div>
          ) : (
            <button onClick={handleUserInput}>Ask</button>
          )}
        </div>
      </div>
    </div>
  )
}