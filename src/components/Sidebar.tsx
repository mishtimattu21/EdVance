import React from 'react';
import { 
  Home, BookOpen, Award, Settings, 
  User, HelpCircle, LogOut, ChevronLeft, ChevronRight,
  Gamepad2, BookOpenText, Brain, Palette, Video
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  currentPage: string;
  navigateTo: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, currentPage, navigateTo }) => {
  const mainMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'subjects', label: 'Subjects', icon: BookOpenText },
    { id: 'games', label: 'Learning Games', icon: Gamepad2 },
    { id: 'activities', label: 'Activities', icon: Brain },
    { id: 'art', label: 'Art & Crafts', icon: Palette },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ];

  const bottomMenuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help Center', icon: HelpCircle },
    { id: 'logout', label: 'Log Out', icon: LogOut },
  ];

  const MenuItem = ({ item, isBottom = false }: { item: typeof mainMenuItems[0], isBottom?: boolean }) => {
    const Icon = item.icon;
    const isActive = currentPage === item.id;
    
    return (
      <li>
        <button
          onClick={() => navigateTo(item.id)}
          className={`flex items-center w-full p-3 ${isOpen ? 'justify-start' : 'justify-center'} rounded-lg transition-all duration-200 ${
            isActive 
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-md' 
              : 'text-gray-700 hover:bg-purple-100'
          }`}
        >
          <Icon size={isOpen ? 20 : 24} className={`${isOpen ? 'mr-3' : 'mx-auto'} transition-all duration-200`} />
          {isOpen && (
            <span className={`${isBottom ? '' : 'font-medium'} whitespace-nowrap transition-opacity duration-200`}>
              {item.label}
            </span>
          )}
          {isActive && !isOpen && (
            <div className="absolute left-0 w-1 h-8 bg-white rounded-r-full"></div>
          )}
        </button>
      </li>
    );
  };

  return (
    <div 
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } h-screen bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out relative z-10`}
    >
      {/* Logo */}
      <div className={`p-4 ${isOpen ? 'px-6' : 'px-0 justify-center'} flex items-center border-b border-gray-100`}>
        {isOpen ? (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className="ml-3 font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              KidLearn
            </span>
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">
            K
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-20 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-200"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {mainMenuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>

      {/* Bottom Menu */}
      <div className="p-3 border-t border-gray-100">
        <ul className="space-y-2">
          {bottomMenuItems.map((item) => (
            <MenuItem key={item.id} item={item} isBottom />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;