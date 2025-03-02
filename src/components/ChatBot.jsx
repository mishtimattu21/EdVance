import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, VolumeX, Volume2, Maximize2, Minimize2 } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Buddy, your learning assistant. How can I help you today?", sender: 'bot', id: 1 }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const messagesEndRef = useRef(null);
  const speechSynthesis = window.speechSynthesis;
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const userMessage = { text: newMessage, sender: 'user', id: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "That's a great question! Let me help you with that.",
        "I think I understand what you're asking. Here's what I know:",
        "That's interesting! Did you know that learning can be super fun?",
        "Let me think about that... Oh, I know!",
        "I'm here to help you learn. Let's explore that together!"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = { text: randomResponse, sender: 'bot', id: Date.now() };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Toggle speech recognition
  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }
    
    setIsListening(!isListening);
    
    // This is just a simulation since actual implementation would require more setup
    if (!isListening) {
      // Start listening simulation
      setTimeout(() => {
        setNewMessage('How do plants grow?');
        setIsListening(false);
      }, 2000);
    }
  };

  // Text to speech for bot messages
  const speakMessage = (text) => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for kids
      utterance.pitch = 1.1; // Slightly higher pitch for friendly tone
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  // Stop speaking
  const stopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  // Toggle minimize/maximize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'w-80 md:w-96' : 'w-16 h-16'}`}>
      {/* Chatbot Button */}
      {!isOpen && (
        <button 
          onClick={toggleChatbot}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Buddy" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
          </div>
        </button>
      )}
      
      {/* Chatbot Interface */}
      {isOpen && (
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 text-white flex justify-between items-center">
            <button onClick={toggleChatbot} className="p-1 hover:bg-white/20 rounded-full">
              <X size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Buddy" 
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />
              <span className="font-bold">Buddy</span>
            </div>
            <button onClick={toggleMinimize} className="p-1 hover:bg-white/20 rounded-full">
              {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
            </button>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto bg-blue-50">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user' 
                          ? 'bg-blue-500 text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 rounded-tl-none shadow-md'
                      } animate-fadeIn`}
                    >
                      {message.text}
                      
                      {message.sender === 'bot' && (
                        <button 
                          onClick={() => isSpeaking ? stopSpeaking() : speakMessage(message.text)}
                          className="ml-2 text-gray-500 hover:text-gray-700 inline-flex items-center"
                        >
                          {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input Area */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleListening}
                    className={`p-2 rounded-full ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                  >
                    <Mic size={20} />
                  </button>
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={1}
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
                    className={`p-2 rounded-full ${
                      newMessage.trim() === '' 
                        ? 'bg-gray-200 text-gray-400' 
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                    }`}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;