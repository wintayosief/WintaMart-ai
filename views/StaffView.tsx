
import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Clock, MapPin, Search, ChevronRight, BookOpen } from 'lucide-react';
import { MOCK_TASKS, MOCK_PRODUCTS } from '../constants';

const StaffView: React.FC = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const lowStockItems = MOCK_PRODUCTS.filter(p => p.stock < 15);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Staff Control Center</h1>
          <p className="text-slate-500">Welcome back, Team WintaMart. Here are your daily operational tasks.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <div className="text-right">
              <p className="text-[10px] text-slate-400 leading-none">Shift Time</p>
              <p className="text-sm font-bold">08:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task Board */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Active Tasks
              </h2>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                {tasks.filter(t => t.status === 'Pending').length} Pending
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {tasks.map(task => (
                <div key={task.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4">
                  <button onClick={() => toggleTask(task.id)} className="flex-shrink-0">
                    {task.status === 'Completed' ? (
                      <CheckCircle2 className="w-7 h-7 text-green-500" />
                    ) : (
                      <Circle className="w-7 h-7 text-slate-300" />
                    )}
                  </button>
                  <div className="flex-1">
                    <h3 className={`font-bold ${task.status === 'Completed' ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {task.title}
                    </h3>
                    <div className="flex gap-4 mt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {task.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.time}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${
                    task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                    task.priority === 'Medium' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {task.priority}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Learning Hub</h3>
                <p className="opacity-80">Unsure about store policies? Ask the AI Assistant for guidance.</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 opacity-50" />
          </div>
        </div>

        {/* Alerts & Inventory Panel */}
        <div className="space-y-6">
          {/* Low Stock Alerts */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-red-50">
              <h2 className="text-xl font-bold flex items-center gap-2 text-red-600">
                <AlertCircle className="w-6 h-6" />
                Inventory Alerts
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {lowStockItems.length === 0 ? (
                <p className="text-slate-400 text-center py-8">All stock levels are optimal.</p>
              ) : (
                lowStockItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <img src={item.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
                      <p className="text-xs text-red-500 font-bold">Only {item.stock} left</p>
                    </div>
                    <button className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-lg font-bold">RESTOCK</button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Search */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold mb-4">Item Code Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Enter item code (e.g. 204)" 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs py-2 border-b border-slate-50">
                <span className="text-slate-500">204</span>
                <span className="font-bold">Sugar 2kg</span>
              </div>
              <div className="flex justify-between text-xs py-2 border-b border-slate-50">
                <span className="text-slate-500">301</span>
                <span className="font-bold">Wheat Flour 2kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffView;
