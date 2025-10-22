import React, { useState } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';

export default function Header({ onNavigate, currentPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [academyOpen, setAcademyOpen] = useState(false);
    const [instituteOpen, setInstituteOpen] = useState(false);
    const [academyTimeout, setAcademyTimeout] = useState(null);
    const [instituteTimeout, setInstituteTimeout] = useState(null);

    // Updated navigation structure with dropdowns
    const navItems = [
        {
            name: 'Academy',
            dropdown: true,
            items: [
                { name: 'Defensive Security', page: 'defensive-security' },
                { name: 'Offensive Security', page: 'offensive-security' },
                { name: 'Specialized Add-ons', page: 'specialized-addons' }
            ]
        },
                {
                    name: 'Institute',
                    dropdown: true,
                    items: [
                        { name: 'Full Stack Development', page: 'full-stack-dev' },
                        { name: 'Multi-Cloud DevOps Professional', page: 'multi-cloud-devops' },
                        { name: 'AI & ML', page: 'ai-data-science' },
                        { name: 'Data Science & Analytics', page: 'data-science' },
                        { name: 'Database Management & SQL', page: 'database-management' },
                        { name: 'Mobile Development', page: 'mobile-dev' },
                        { name: 'Programming with DSA', page: 'programming-with-dsa' }
                    ]
                },
        { name: 'College Training', page: 'college-training' },
        { name: 'About', page: 'about' },
        { name: 'Team', page: 'team' },
        { name: 'Careers', page: 'careers' },
        { name: 'Events', page: 'events' },
        { name: 'Batches', page: 'batches' },
        { name: 'Contact', page: 'contact' }
    ];

    const handleNavigation = (page) => {
        onNavigate(page);
        setIsOpen(false);
        setAcademyOpen(false);
        setInstituteOpen(false);
        if (academyTimeout) clearTimeout(academyTimeout);
        if (instituteTimeout) clearTimeout(instituteTimeout);
    };

    const handleAcademyEnter = () => {
        if (academyTimeout) clearTimeout(academyTimeout);
        setAcademyOpen(true);
    };

    const handleAcademyLeave = () => {
        const timeout = setTimeout(() => setAcademyOpen(false), 300);
        setAcademyTimeout(timeout);
    };

    const handleInstituteEnter = () => {
        if (instituteTimeout) clearTimeout(instituteTimeout);
        setInstituteOpen(true);
    };

    const handleInstituteLeave = () => {
        const timeout = setTimeout(() => setInstituteOpen(false), 300);
        setInstituteTimeout(timeout);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05061a]/80 backdrop-blur-xl shadow-[0_12px_40px_-30px_rgba(15,23,42,0.85)]">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => handleNavigation('home')} className="flex items-center space-x-3 text-left">
                    <img src="/logo.png" alt="Agnidhra Technologies Logo" className="w-9 h-9 rounded-full" />
                    <span className="text-xl md:text-2xl font-bold text-white">Agnidhra Technologies</span>
                </button>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, index) => (
                        item.dropdown ? (
                            <div key={index} className="relative">
                                <div 
                                    onMouseEnter={item.name === 'Academy' ? handleAcademyEnter : handleInstituteEnter}
                                    onMouseLeave={item.name === 'Academy' ? handleAcademyLeave : handleInstituteLeave}
                                >
                                    <button 
                                        className="flex items-center text-slate-200 font-semibold pb-1 transition-colors duration-300 hover:text-sky-300"
                                    >
                                        {item.name}
                                        <ChevronDown size={16} className="ml-1" />
                                    </button>
                                    
                                    {/* Dropdown Menu */}
                                    {((item.name === 'Academy' && academyOpen) || (item.name === 'Institute' && instituteOpen)) && (
                                        <div 
                                            className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-white/10 bg-white/10 p-2 shadow-[0_25px_55px_-30px_rgba(8,16,40,0.85)] backdrop-blur z-50"
                                        >
                                            {item.items.map((subItem, subIndex) => (
                                                <button
                                                    key={subIndex}
                                                    onClick={() => handleNavigation(subItem.page)}
                                                    className="block w-full text-left rounded-xl px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-sky-300"
                                                >
                                                    {subItem.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <button 
                                key={index} 
                                onClick={() => handleNavigation(item.page)} 
                                className="text-slate-200 font-semibold pb-1 transition-colors duration-300 hover:text-sky-300"
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>
                
                {/* Hidden admin link (appears when VITE_RECONCILE_KEY is set). Use import.meta.env for Vite. */}
                {(() => {
                    const env = typeof import.meta !== 'undefined' ? import.meta.env : (typeof process !== 'undefined' && process.env ? process.env : {});
                    const visible = !!(env.VITE_RECONCILE_KEY || env.REACT_APP_RECONCILE_KEY || env.RECONCILE_KEY);
                    if (!visible) return null;
                    return (
                        <div className="hidden md:flex items-center ml-4">
                            <button onClick={() => handleNavigation('admin-reconciliations')} className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-400/40 hover:text-sky-200">Admin</button>
                        </div>
                    );
                })()}

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-200 focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#05061a]/95 backdrop-blur-xl">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            item.dropdown ? (
                                <li key={index}>
                                    <div className="px-3 py-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-200 font-semibold">{item.name}</span>
                                            <button 
                                                onClick={() => {
                                                    if (item.name === 'Academy') setAcademyOpen(!academyOpen);
                                                    if (item.name === 'Institute') setInstituteOpen(!instituteOpen);
                                                }}
                                                className="text-slate-400 hover:text-sky-300"
                                            >
                                                <ChevronDown size={16} className={`transform transition-transform ${((item.name === 'Academy' && academyOpen) || (item.name === 'Institute' && instituteOpen)) ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>
                                        
                                        {/* Mobile Dropdown */}
                                        {((item.name === 'Academy' && academyOpen) || (item.name === 'Institute' && instituteOpen)) && (
                                            <ul className="mt-2 ml-4 space-y-1">
                                                {item.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <button
                                                            onClick={() => handleNavigation(subItem.page)}
                                                            className="block w-full text-left rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-sky-300"
                                                        >
                                                            {subItem.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ) : (
                                <li key={index}>
                                    <button 
                                        onClick={() => handleNavigation(item.page)} 
                                        className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-sky-300"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        ))}
                        {/* Mobile Admin link when env var present */}
                        {(() => {
                            const env = typeof import.meta !== 'undefined' ? import.meta.env : (typeof process !== 'undefined' && process.env ? process.env : {});
                            const visible = !!(env.VITE_RECONCILE_KEY || env.REACT_APP_RECONCILE_KEY || env.RECONCILE_KEY);
                            if (!visible) return null;
                            return (
                                <li>
                                    <button onClick={() => { handleNavigation('admin-reconciliations'); setIsOpen(false); }} className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-sky-300">Admin</button>
                                </li>
                            );
                        })()}
                    </ul>
                </div>
            )}
        </header>
    );
}

