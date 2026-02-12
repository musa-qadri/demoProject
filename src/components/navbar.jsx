import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
    return (
        <div className="w-[98%]  mt-1 mx-auto bg-white h-20 px-8 flex items-center justify-between rounded-lg shadow-lg">
            {/* Title Section */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Interpreter</h1>
                <p className="text-xs text-gray-500 mt-0.5">Manage your applications, assignments, and profile in one place.</p>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <div className="relative p-2.5 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
                    <Bell size={18} className="text-gray-700" />
                    <Badge className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-bold p-0">
                        2
                    </Badge>
                </div>

                {/* Profile Avatar */}
                <Avatar className="w-10 h-10 rounded-lg cursor-pointer hover:ring-2 hover:ring-indigo-300 transition-all">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}