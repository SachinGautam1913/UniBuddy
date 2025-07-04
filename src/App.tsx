import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { categories, quickActions, getResponse } from './data/chatData';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import QuickActions from './components/QuickActions';
import QuickActionsPage from './components/QuickActionsPage';
import { GraduationCap, MessageCircle, Users, Clock, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m University Buddy, your comprehensive academic assistant! 🎓\n\nI can help you with detailed information about all academic programs, courses, schedules, campus facilities, and much more. Use the quick actions below or ask me anything!',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getResponse(content),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const filteredQuickActions = selectedCategory 
    ? quickActions.filter(action => action.category === selectedCategory)
    : quickActions.slice(0, 8); // Show first 8 actions by default

  if (showQuickActions) {
    return (
      <QuickActionsPage 
        onBack={() => setShowQuickActions(false)}
        onActionClick={(query) => {
          setShowQuickActions(false);
          handleSendMessage(query);
        }}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">UniBuddy</h1>
                <p className="text-sm text-gray-500">Your AI Academic Buddy</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowQuickActions(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Zap size={16} />
                <span className="hidden sm:inline">All Quick Actions</span>
              </button>
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users size={16} />
                  <span>1,247 students helped today</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MessageCircle size={16} />
                  <span>Avg response: 2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6 h-[calc(100vh-7rem)]">
          {/* Collapsible Sidebar */}
          <div className={`transition-all duration-300 ${sidebarCollapsed ? 'w-12' : 'w-80'} flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
              {/* Sidebar Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                {!sidebarCollapsed && (
                  <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                )}
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
              </div>

              {/* Categories */}
              {!sidebarCollapsed && (
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                        selectedCategory === null
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-500 flex items-center justify-center text-white">
                        <span className="text-sm">🏠</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">All Topics</div>
                        <div className="text-xs text-gray-500 mt-1">Browse all categories</div>
                      </div>
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                          selectedCategory === category.id
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.color} text-white`}>
                          <span className="text-sm">📚</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{category.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{category.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Area with Quick Actions */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Chat with UniBuddy</h2>
                    <p className="text-sm text-gray-500">Get instant answers to all your university queries</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions Section - Reduced height */}
              <div className="p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Quick Actions</h3>
                  <button
                    onClick={() => setShowQuickActions(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All →
                  </button>
                </div>
                <QuickActions actions={filteredQuickActions} onActionClick={handleSendMessage} />
              </div>

              {/* Messages Area - Increased height */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 min-h-0">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-6 py-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 flex-shrink-0">
                <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-500" size={20} />
              <span className="text-sm text-gray-600">UniBuddy - Powered by AI</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
              <span>Available in English & Hindi</span>
              <span>•</span>
              <span>Privacy Protected</span>
              <span>•</span>
              <span>Comprehensive Academic Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;