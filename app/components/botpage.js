'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: 'assistant', content: userInput }],
      model: 'gpt-3.5-turbo',
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'assistant', content: chatCompletion.choices[0].message.content },
    ])

    setUserInput('');
    setIsLoading(false);
  }

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