
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
import { SALES_DATA, MOCK_PRODUCTS } from '../constants';

const ManagerView: React.FC = () => {
  const totalStock = MOCK_PRODUCTS.reduce((acc, p) => acc + p.stock, 0);
  const totalRevenue = SALES_DATA.reduce((acc, s) => acc + s.revenue, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Executive Insights</h1>
        <p className="text-slate-500">Real-time performance metrics and AI-driven predictions.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: `KES ${totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+12%', up: true },
          { label: 'Weekly Traffic', value: '1,445', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+5%', up: true },
          { label: 'Items in Stock', value: totalStock.toString(), icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50', trend: '-2%', up: false },
          { label: 'Staff Performance', value: '98%', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50', trend: 'Optimal', up: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center text-xs font-bold ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                {stat.trend}
                {stat.up ? <ArrowUpRight className="w-3 h-3 ml-1" /> : <ArrowDownRight className="w-3 h-3 ml-1" />}
              </div>
            </div>
            <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
            <span className="text-2xl font-black text-slate-900 mt-1">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Sales Performance
            </h2>
            <select className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-3 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SALES_DATA}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                />
                <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Panel */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">SmartMart AI Predictions</h3>
          </div>
          <div className="space-y-6 flex-1">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-blue-400 font-bold uppercase mb-2">Demand Forecast</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Expecting a 15% surge in Sugar and Flour sales this weekend due to the upcoming holiday. Recommendation: Increase shelf stocking levels in Aisle 1.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-emerald-400 font-bold uppercase mb-2">Inventory Health</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Fresh produce turnover is optimal. However, baby products in Aisle 6 have slowed down. Consider a promotion to clear stock.
              </p>
            </div>
          </div>
          <button className="mt-8 w-full bg-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
            Generate Full Report
          </button>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold mb-6">Top Performing Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 text-xs uppercase tracking-wider border-b border-slate-100">
                <th className="pb-4 font-medium">Product</th>
                <th className="pb-4 font-medium">Category</th>
                <th className="pb-4 font-medium">Stock Status</th>
                <th className="pb-4 font-medium text-right">Revenue Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_PRODUCTS.slice(0, 5).map(p => (
                <tr key={p.id} className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <span className="font-bold text-slate-800">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-slate-500">{p.category}</td>
                  <td className="py-4">
                    <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: `${Math.min(100, p.stock)}%`}} />
                    </div>
                  </td>
                  <td className="py-4 text-right font-black text-slate-900">12%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerView;
