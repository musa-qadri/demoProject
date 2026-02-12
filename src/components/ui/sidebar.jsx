import React from 'react';
import { LayoutDashboard, Users, UserCircle, CreditCard, Settings, LogOut, ChevronDown, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const menuItems = [
    { name: 'Account Management', icon: <img src="/side1.png" alt="Account" className=" object-contain" /> },
    { name: 'Services', icon: <img src="/side2.png" alt="Account" className="w-5 object-contain" />, hasChild: true },
    { name: 'Human Resources', icon: <img src="/side3.png" alt="Account" className="h-6 object-contain"/> },
    { name: 'Contractor Portal', icon: <img src="/side4.png" alt="Account" className="h-6 object-contain"/>, active: true },
    { name: 'Finance', icon:<img src="/side5.png" alt="Account" className="h-5 object-contain" /> },
    { name: 'Client Portal', icon: <img src="/side6.png" alt="Account" className="h-5 object-contain"/> },
    { name: 'Setup', icon: <img src="/side7.png" alt="Account" className="h-5 object-contain" /> },
  ];

  return (
    <div className="w-full mt-1 h-screen bg-white border-r border-gray-200 flex flex-col py-6 shadow-sm rounded-r-lg px-4">
      {/* Logo Section */}
      <div className="mb-8 px-3">
        <img src="/logo1.png" alt="Linguistica" className="h-12 object-contain" />
      </div>

      {/* Main Menu Label */}
      <div className="px-3 mb-3">
        <p className="text-[14px] text-gray-400 font-bold uppercase tracking-widest">Main Menu</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-0.5">
        {menuItems.map((item, idx) => (
          <Button
            key={idx}
            variant="ghost"
            className={`w-full justify-between px-3 py-2.5 h-auto rounded-lg relative ${item.active
                ? 'bg-white text-gray-800 font-semibold hover:bg-white'
                : 'text-gray-600 hover:bg-gray-50 font-medium'
              }`}
          >
            {item.active && (
              <div className="absolute right-0  top-0 bottom-0 w-1 bg-[#443B83] rounded-r-full"></div>
            )}
            <div className="flex items-center gap-3">
              <span className={item.active ? 'text-indigo-600' : 'text-gray-500'}>{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
            {item.hasChild && <ChevronDown size={14} className="text-gray-400" />}
          </Button>
        ))}
      </nav>

      {/* Logout */}
      <div className="pt-4 mt-4 px-3">
        <Button variant="ghost" className="w-full bg-gray-100 justify-start gap-3 px-3 py-2.5 h-auto text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
          <img src="/logoutBtn.png" alt="Logout" className="h-5 object-contain" />
          <span className="text-sm">Logout</span>
        </Button>
      </div>
    </div>
  );
}