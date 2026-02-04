
import React, { useState } from 'react';
import { Search, ShoppingCart, Filter, Tag, Star, ChevronRight, X, Trash2, Plus, ShoppingBag, Eye, CheckCircle2, Loader2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product, Category } from '../types';

const CATEGORIES: Category[] = ['Grains', 'Fresh foods', 'Meat & dairy', 'Packaged foods', 'Beverages', 'Household items', 'Baby products'];

const CustomerView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularItems = MOCK_PRODUCTS.filter(p => p.isPopular).slice(0, 5);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    // Reset checkout status if user starts adding items again
    if (checkoutStatus === 'success') setCheckoutStatus('idle');
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setCheckoutStatus('processing');
    // Simulate a payment delay
    setTimeout(() => {
      setCheckoutStatus('success');
      setCart([]); // Clear the cart after successful payment
    }, 2000);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="pb-20 relative">
      {/* Hero Section */}
      <div className="relative h-72 bg-blue-900 overflow-hidden rounded-b-[3rem]">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-full object-cover opacity-30 scale-105"
          alt="Store Hero"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">WintaMart Visual Gallery</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
            Experience the future of grocery shopping. Explore our high-definition catalog of over 20+ fresh items. 
            Ask SmartMart AI to find anything for you!
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-10">
        {/* Search & Cart Bar */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center border border-slate-100">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input 
              type="text"
              placeholder="Search for tomatoes, beef, potatoes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg">
              <Filter className="w-5 h-5" />
              <span className="font-bold">Filter</span>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 relative shadow-lg shadow-blue-200"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="font-bold">Cart ({cart.length})</span>
            </button>
          </div>
        </div>

        {/* Flash Deals / Popular Items Gallery */}
        <div className="mt-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Featured Gallery</h2>
              <p className="text-slate-500">Must-have items for your kitchen</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4">
            {popularItems.map(item => (
              <div key={`pop-${item.id}`} className="flex-shrink-0 w-64 group cursor-pointer" onClick={() => addToCart(item)}>
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-sm">Quick Add +</p>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black px-2 py-1 rounded-lg">
                    POPULAR
                  </div>
                </div>
                <h4 className="font-bold text-slate-800">{item.name}</h4>
                <p className="text-blue-600 font-black">KES {item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Scroller */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-8 py-3 rounded-2xl whitespace-nowrap font-bold transition-all ${activeCategory === 'All' ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            All Products
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl whitespace-nowrap font-bold transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-50 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {product.isPopular && (
                    <div className="bg-amber-400 text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10px] font-black shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      TOP PICK
                    </div>
                  )}
                  {product.stock < 15 && (
                    <div className="bg-red-500 text-white px-3 py-1.5 rounded-xl text-[10px] font-black shadow-lg">
                      LOW STOCK
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-blue-600 font-black bg-blue-50 px-2 py-1 rounded-lg">{product.category}</span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Eye className="w-3 h-3" /> {product.location}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900">KES {product.price}</span>
                      <span className="text-xs text-slate-400 font-medium">per {product.unit}</span>
                    </div>
                    <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 uppercase">
                      In Stock: {product.stock}
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-95 shadow-lg group-hover:translate-y-[-2px]"
                  >
                    <Plus className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotions Banner */}
        <div className="mt-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-blue-200">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Tag className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Exclusive Store Deal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic leading-tight uppercase">Visual Shopping Experience</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Scan any item with your phone or ask SmartMart AI at the kiosk for a visual recipe suggestion using these fresh ingredients.
            </p>
          </div>
          <button className="bg-white text-blue-700 px-10 py-5 rounded-3xl font-black text-xl shadow-2xl flex items-center gap-3 hover:bg-slate-100 transition-all active:scale-95 hover:rotate-2">
            Explore All Recipes
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Checkout Success Feedback Overlay */}
      {checkoutStatus === 'success' && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center shadow-2xl border border-white/20 transform animate-in zoom-in-95 duration-500">
            <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-emerald-200/50">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 animate-in bounce-in" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Payment Successful!</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Your order has been processed. <br />
              <span className="font-bold text-blue-600 italic">Please receive your items at the pickup counter.</span>
            </p>
            <button 
              onClick={() => {
                setCheckoutStatus('idle');
                setIsCartOpen(false);
              }}
              className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-800 transition-all active:scale-95"
            >
              Back to Store
            </button>
            <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-widest font-black">
              Transaction ID: WM-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-[100] transition-opacity backdrop-blur-md"
          onClick={() => setIsCartOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-[0_0_100px_rgba(0,0,0,0.2)] flex flex-col animate-in slide-in-from-right duration-500 ease-out"
            onClick={e => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-100">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 leading-none">Your Cart</h2>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">{cart.length} items selected</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-3 hover:bg-slate-100 rounded-2xl transition-all"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                  <div className="bg-slate-50 p-8 rounded-full mb-6">
                    <ShoppingBag className="w-16 h-16 opacity-40" />
                  </div>
                  <p className="text-xl font-black text-slate-400">Cart is empty</p>
                  <p className="text-sm mt-2 text-slate-400">Add some fresh visual items!</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-8 text-blue-600 font-black hover:underline text-lg"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-5 group animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 py-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-slate-800 text-lg leading-tight line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-slate-200 hover:text-red-500 transition-colors p-1"
                          title="Remove from cart"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">{item.unit}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="font-black text-xl text-blue-600">KES {item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-slate-50 border-t border-slate-200 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-black text-slate-500 uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="font-black text-3xl text-slate-900">KES {totalPrice.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={checkoutStatus === 'processing'}
                  className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:bg-blue-400 disabled:scale-100"
                >
                  {checkoutStatus === 'processing' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Secure Checkout'
                  )}
                </button>
                <div className="flex items-center justify-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" className="h-6 opacity-40" alt="M-Pesa" />
                  <div className="w-px h-4 bg-slate-300" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    AI-Verified Payments
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerView;
