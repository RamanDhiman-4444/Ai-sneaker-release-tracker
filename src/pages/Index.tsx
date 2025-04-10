
import React, { useState } from "react";
import Header from "@/components/Header";
import ChatWindow from "@/components/ChatWindow";
import RecentReleases from "@/components/RecentReleases";
import { Button } from "@/components/ui/button";
import { LayoutGrid, MessageCircle, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <ChatWindow />
          </div>

          {/* Mobile toggle for releases sidebar */}
          {isMobile && (
            <div className="fixed bottom-4 right-4 z-10">
              <Button
                onClick={() => setShowSidebar(!showSidebar)}
                size="icon"
                className="rounded-full shadow-md"
              >
                {showSidebar ? <X size={20} /> : <LayoutGrid size={20} />}
              </Button>
            </div>
          )}
        </div>

        {/* Releases Sidebar - conditionally shown on mobile */}
        {(showSidebar || !isMobile) && (
          <div 
            className={`bg-muted border-l ${
              isMobile 
                ? "fixed inset-y-0 right-0 z-50 w-80 transform transition-transform duration-300 ease-in-out" 
                : "w-80 hidden md:block"
            }`}
          >
            {isMobile && (
              <div className="p-4 border-b bg-background">
                <Button
                  onClick={() => setShowSidebar(false)}
                  variant="ghost"
                  size="icon"
                  className="ml-auto block"
                >
                  <X size={20} />
                </Button>
              </div>
            )}
            <RecentReleases />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
