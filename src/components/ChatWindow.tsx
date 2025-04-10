
import React, { useEffect, useRef, useState } from "react";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  className?: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      content: "👋 Hey there! I'm SneakerBot, your AI sneaker assistant. Ask me about upcoming releases, tips on copping limited editions, or how to care for your kicks!",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateResponse = (query: string): string => {
    // This is just a simple mock response generator
    // In a real app, this would connect to an API or more sophisticated system
    const responses = [
      "The Air Jordan 1 High 'Chicago Reimagined' is dropping next month. It's a must-have for any collector!",
      "For cleaning white sneakers, I recommend using a soft brush with mild soap and water. Avoid bleach as it can yellow the material.",
      "To increase your chances of copping limited releases, make sure your payment info is saved ahead of time and use multiple devices during the drop.",
      "The most hyped releases this season include the Travis Scott x Nike collaborations and the Off-White x Air Force 1 'Brooklyn'.",
      "StockX and GOAT are reliable platforms for buying authentic sneakers in the resale market. Always check seller ratings!",
      "The best way to store your sneakers is in their original boxes, away from direct sunlight, and in a temperature-controlled environment.",
      "For sizing, Nike generally runs true to size, while Yeezys often require going half a size up from your normal size.",
      "The most valuable sneakers right now are rare Nike SB Dunks, Off-White collaborations, and limited Jordan 1 colorways."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (content: string) => {
    // Add user message
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [
      ...prev,
      { content, isBot: false, timestamp }
    ]);
    
    // Simulate bot typing
    setIsLoading(true);
    
    // Simulate bot response with delay
    setTimeout(() => {
      const botResponse = generateResponse(content);
      setMessages((prev) => [
        ...prev,
        { content: botResponse, isBot: true, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={cn("flex flex-col w-full h-full", className)}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index} 
            content={msg.content} 
            isBot={msg.isBot} 
            timestamp={msg.timestamp} 
          />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 animate-pulse ml-8">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '0ms' }}></div>
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '300ms' }}></div>
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '600ms' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatWindow;
