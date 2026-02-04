
import React, { useState } from 'react';
import { Role } from './types';
import CustomerView from './views/CustomerView';
import StaffView from './views/StaffView';
import ManagerView from './views/ManagerView';
import ChatWidget from './components/ChatWidget';
import { LayoutDashboard, Users, UserCircle, ShoppingBag, Store } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<Role>('Customer');

  const renderView = () => {
    switch (role) {
      case 'Customer': return <CustomerView />;
      case 'Staff': return <StaffView />;
      case 'Manager': return <ManagerView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Store className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-blue-900">
              Winta<span className="text-blue-500">Mart</span> AI
            </span>
          </div>

          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
            {[
              { id: 'Customer', icon: ShoppingBag, label: 'Customer' },
              { id: 'Staff', icon: Users, label: 'Staff' },
              { id: 'Manager', icon: LayoutDashboard, label: 'Manager' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setRole(item.id as Role)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  role === item.id 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900">Guest User</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">{role} Mode</p>
            </div>
            <div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 border-2 border-white shadow-sm">
              <UserCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Persistent AI Chatbot */}
      <ChatWidget role={role} />

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Store className="w-5 h-5 text-blue-500" />
              <span className="font-black text-white text-xl">WintaMart AI</span>
            </div>
            <p className="text-sm max-w-xs mx-auto md:mx-0">Empowering retail through intelligent agents. Every product, every task, managed by SmartMart.</p>
          </div>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Store Rules</a>
            <a href="#" className="hover:text-white">Contact Support</a>
          </div>
          <div className="md:text-right">
            <p className="text-xs">© 2024 WintaMart Smart Systems. Developed with Gemini 3.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
