import React, { useState } from 'react';
import { 
  Menu, X, Send, Mic, VolumeX, Volume2, 
  Home, BookOpen, Award, Settings, 
  User, HelpCircle, LogOut, ChevronLeft, ChevronRight
} from 'lucide-react';
import ChatBot from './components/ChatBot';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {currentPage === 'dashboard' && <Dashboard />}
          {/* Add other pages as needed */}
        </main>

        {/* Chatbot */}
        <ChatBot />
      </div>
    </div>
  );
}

export default App;