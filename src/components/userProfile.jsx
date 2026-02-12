import React from 'react';
import { User, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from 'next/image';

export default function ProfileSection() {
    const scheduleData = [
        { day: 'Monday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Tuesday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Wednesday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Thursday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Friday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Saturday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
        { day: 'Sunday', start: '08:00:00', end: '16:00:00', firstBreak: '10:15:00', secondBreak: '13:00:00', meal: '16:00:00' },
    ];

    const menuItems = [
        'General Data',
        'QC Forms',
        'Feedback & Warnings',
        'Schedule',
        'Certificates',
        'Evaluations'
    ];

    const navTabs = [
        'Home', 'Profile', 'Paperworks', 'Health Requirements',
        'Orientations', 'My Pay', 'Training/Certificates',
        'Performance', 'Share Feed Back', 'Company Doc'
    ];

    return (
        <div className="w-[98%] mx-auto bg-white px-2 rounded-lg shadow-lg mt-2 py-4">
            <div className="max-w-full">
                {/* Navigation Tabs */}
                <div className="flex gap-2 mb-5 border-b  border-gray-200">
                    {navTabs.map((tab, idx) => (
                        <Button
                            key={idx}
                            variant={tab === 'Profile' ? 'default' : 'ghost'}
                            className={` text-sm font-medium transition-all ${tab === 'Profile'
                                    ? 'bg-indigo-600 text-white rounded rounded border-b border-indigo-600 hover:bg-indigo-700'
                                    : 'text-gray-600 border mb-2 hover:text-gray-900 hover:bg-gray-50 rounded-t-md rounded'
                                }`}
                        >
                            {tab}
                        </Button>
                    ))}
                </div>

                <div className="flex gap-5">
                    {/* Sidebar Profile Card */}
                    <div className="w-[24%] ">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                                PROFILE
                                <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">i</div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {/* Avatar Section */}
                            <div className="relative">
                                <div className="w-full aspect-square bg-gradient-to-br bg-[#FED60E] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                    <div className="w-28 h-32 flex items-end justify-center">
                                        {/* <User size={100} className="text-teal-600" strokeWidth={2.5} /> */}
                                        <Image
                                        width={400}
                                        height={400}
                                        src="/boypic.png" alt="Linguistica" className=" object-contain" />
                                    </div>
                                </div>
                                <Button size="sm" variant="destructive" className="absolute bottom-2 left-2 text-[11px] px-2.5 py-1.5 h-auto shadow-sm">
                                    <Trash2 size={11} className="mr-1" />
                                    Remove Picture
                                </Button>
                            </div>

                            {/* Role Badges */}
                            <div className="flex">
                                <div className="w-full justify-center  text-black font-semibold ">
                                    Spanish Contractor
                                </div>
                                <Badge className=" justify-center bg-indigo-900 text-white py-1 px-5 rounded-md font-semibold text-xs shadow-sm hover:bg-indigo-600">
                                    US-Based
                                </Badge>
                            </div>

                            {/* Menu Items */}
                            <nav className="space-y-0.5">
                                {menuItems.map((item, idx) => (
                                    <Button
                                        key={idx}
                                        variant="ghost"
                                        className={`w-full justify-start px-3 py-2 h-auto rounded-md transition-all text-sm relative ${item === 'Schedule'
                                                ? 'bg-gray-50 text-gray-900 font-semibold hover:bg-gray-50'
                                                : 'text-gray-600 hover:bg-gray-50 font-medium'
                                            }`}
                                    >
                                        {item === 'Schedule' && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-r-sm"></div>
                                        )}
                                        {item}
                                    </Button>
                                ))}
                            </nav>
                        </CardContent>
                    </div>

                    {/* Main Content */}
                    <Card className="flex-1 mt-14 border-gray-100 shadow-sm">
                        <CardHeader className="pb-4 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    INTERPRETER ID: <span className="text-gray-900  font-bold">#5389143</span>
                                </CardTitle>
                                <div className="text-sm text-gray-600">
                                    User ID: <span className="font-bold text-gray-900">1729</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="">
                            {/* Schedule Table */}
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 font-boldx  hover:bg-gray-50">
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide"># Week Day</TableHead>
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide">Start Time</TableHead>
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide">End Time</TableHead>
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide">First Break</TableHead>
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide">Second Break</TableHead>
                                        <TableHead className="text-[14px] font-bold text-gray-600 uppercase tracking-wide">Meal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {scheduleData.map((row, idx) => (
                                        <TableRow key={idx} className="hover:bg-gray-50">
                                            <TableCell className="font-medium text-sm text-gray-700">
                                                <span className="text-gray-500 mr-2">{idx + 1}</span>
                                                {row.day}
                                            </TableCell>
                                            <TableCell className="text-sm text-gray-700">{row.start}</TableCell>
                                            <TableCell className="text-sm text-gray-700">{row.end}</TableCell>
                                            <TableCell className="text-sm text-gray-700">{row.firstBreak}</TableCell>
                                            <TableCell className="text-sm text-gray-700">{row.secondBreak}</TableCell>
                                            <TableCell className="text-sm text-gray-700">{row.meal}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}