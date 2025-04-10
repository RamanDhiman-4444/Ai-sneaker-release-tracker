
import React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, User } from "lucide-react";

export interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isBot, timestamp }) => {
  return (
    <div className={cn("flex w-full mb-4 items-start", isBot ? "" : "justify-end")}>
      {isBot && (
        <div className="mr-2 flex-shrink-0 bg-sneaker-blue text-white p-2 rounded-full">
          <MessageSquare size={16} />
        </div>
      )}
      <div
        className={cn(
          "chat-bubble animate-fade-in",
          isBot ? "bot-bubble" : "user-bubble"
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
        {timestamp && (
          <span className="text-xs opacity-60 mt-1 block">
            {timestamp}
          </span>
        )}
      </div>
      {!isBot && (
        <div className="ml-2 flex-shrink-0 bg-primary text-white p-2 rounded-full">
          <User size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
