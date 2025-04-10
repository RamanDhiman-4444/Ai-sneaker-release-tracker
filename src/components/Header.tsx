
import React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border-b px-4 py-3", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 sneaker-gradient rounded-md text-white">
            <MessageSquare size={20} />
          </div>
          <h1 className="text-xl font-bold">SneakerBot</h1>
        </div>
        <div className="text-sm text-muted-foreground">Your AI Sneaker Assistant</div>
      </div>
    </header>
  );
};

export default Header;
