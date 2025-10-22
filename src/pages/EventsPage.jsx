import React, { useState } from 'react';
import {
    Calendar,
    MapPin,
    Users,
    Clock,
    Star,
    Award,
    BookOpen,
    Filter,
    Search
} from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function EventsPage({ onNavigate }) {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = upcomingEvents.filter(event => {
        const matchesFilter = filter === 'all' || event.category === filter;
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             event.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const eventStats = [
        { number: '50+', label: 'Events Hosted', icon: Calendar },
        { number: '2000+', label: 'Attendees', icon: Users },
        { number: '95%', label: 'Satisfaction Rate', icon: Star },
        { number: '15+', label: 'Expert Speakers', icon: Award }
    ];

    const categories = [
        { id: 'all', name: 'All Events', count: upcomingEvents.length },
        { id: 'cybersecurity', name: 'Cybersecurity', count: upcomingEvents.filter(e => e.category === 'cybersecurity').length },
        { id: 'devops', name: 'DevOps', count: upcomingEvents.filter(e => e.category === 'devops').length },
        { id: 'ai-ml', name: 'AI & ML', count: upcomingEvents.filter(e => e.category === 'ai-ml').length },
        { id: 'development', name: 'Development', count: upcomingEvents.filter(e => e.category === 'development').length }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Events & Workshops' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />

                    <div className="hero-card surface-alt">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-orange-500 via-red-500 to-amber-400 shadow-lg">
                            <Calendar className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="hero-title">Events &amp; Workshops</h1>
                        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-100/85">
                            Join immersive workshops, live demos, and community meetups led by Agnidhra mentors and industry experts.
                            Build skills, network with peers, and stay ahead of the security curve.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                            <span className="glass-chip bg-orange-500/20 text-orange-100/85">Live &amp; Virtual Formats</span>
                            <span className="glass-chip bg-red-500/20 text-red-100/85">Expert Speakers</span>
                            <span className="glass-chip bg-amber-500/20 text-amber-100/85">Hands-on Labs</span>
                            <span className="glass-chip bg-sky-500/20 text-sky-100/85">Certification Tracks</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6 pb-16">
                    <div className="grid gap-8 md:grid-cols-4">
                        {eventStats.map((stat) => (
                            <div key={stat.label} className="glass-card p-6 text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-amber-500">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-3xl font-semibold text-white">{stat.number}</div>
                                <p className="mt-2 text-sm text-slate-200/80">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 glass-panel p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setFilter(category.id)}
                                        className={`glass-chip border ${
                                            filter === category.id
                                                ? 'border-orange-400/60 bg-orange-500/15 text-orange-100'
                                                : 'border-white/10 bg-white/5 text-slate-200/80 hover:border-orange-400/40'
                                        }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                            <div className="relative md:w-72">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Search events"
                                    className="glass-input w-full pl-11 pr-4 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 space-y-16">
                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold text-white">Upcoming Events</h2>
                                <p className="mt-3 text-sm text-slate-200/80">Reserve your seat for our next cohort of expert-led sessions.</p>
                            </div>
                            <div className="grid gap-8 lg:grid-cols-2">
                                {filteredEvents.map((event) => (
                                    <div key={event.title} className={`glass-card border ${event.featured ? 'border-orange-400/50 bg-orange-500/10' : 'border-white/10 bg-white/5'} p-6 transition-transform duration-300 hover:-translate-y-1`}>
                                        {event.featured && (
                                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/15 px-4 py-1 text-xs font-semibold text-orange-100">
                                                <Star className="h-3.5 w-3.5" /> Featured Event
                                            </div>
                                        )}
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                                                <span className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/80">
                                                    <Filter className="mr-2 h-3.5 w-3.5 text-orange-300" />
                                                    {event.type}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => onNavigate('contact')}
                                                className="glass-button bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 px-5 py-2 text-xs font-semibold text-white"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <div className="mt-6 grid gap-4 text-sm text-slate-200/80 md:grid-cols-2">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-orange-300" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-sky-300" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-emerald-300" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-violet-300" />
                                                {event.attendees} registered
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-slate-200/80">{event.description}</p>
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <span className={`font-semibold ${
                                                event.spotsLeft > 50 ? 'text-emerald-200' : event.spotsLeft > 20 ? 'text-amber-200' : 'text-rose-200'
                                            }`}>
                                                {event.spotsLeft} spots left
                                            </span>
                                            <span className="text-slate-400">Entry: {event.price || 'Free'}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold text-white">Highlights From Past Events</h2>
                                <p className="mt-3 text-sm text-slate-200/80">Discover the impact of previous cohorts and flagship webinars.</p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-3">
                                {pastEvents.map((event) => (
                                    <div key={event.title} className="glass-card border border-white/10 bg-white/5 p-5">
                                        <h3 className="text-base font-semibold text-white">{event.title}</h3>
                                        <div className="mt-4 space-y-3 text-sm text-slate-200/80">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-orange-300" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-sky-300" />
                                                {event.attendees} attendees
                                            </div>
                                        </div>
                                        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/75">
                                            <BookOpen className="h-3.5 w-3.5 text-violet-300" />
                                            {event.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 glass-panel border border-orange-400/40 bg-orange-500/10 p-10 text-center text-slate-100/90">
                        <h2 className="text-3xl font-semibold text-white">Host With Agnidhra</h2>
                        <p className="mt-3 text-sm text-slate-200/80 max-w-3xl mx-auto">
                            Planning a masterclass, CTF, or community meetup? Partner with our program team to co-host branded experiences
                            that reach thousands of cybersecurity learners across India.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="glass-button bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 px-8 py-3 text-sm font-semibold text-white"
                            >
                                Partner With Us
                            </button>
                            <button
                                onClick={() => onNavigate('about')}
                                className="glass-button border border-orange-400/60 bg-transparent px-8 py-3 text-sm font-semibold text-orange-100"
                            >
                                View Collaboration Deck
                            </button>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200/80">
                            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-300" /> 4.9/5 participant rating</span>
                            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-sky-300" /> 2,000+ active community members</span>
                            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-emerald-300" /> 30+ industry mentors</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}