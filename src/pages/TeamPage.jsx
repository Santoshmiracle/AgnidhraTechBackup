import React from 'react';
import { Mail, Linkedin, Github, Users, Award, BookOpen, Star, Heart } from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import teamMembers from '../data/team';

export default function TeamPage({ onNavigate }) {
    const teamStats = [
        { number: '50+', label: 'Expert Instructors', icon: Users },
        { number: '200+', label: 'Years Combined Experience', icon: Award },
        { number: '15+', label: 'Specializations', icon: BookOpen },
        { number: '5000+', label: 'Students Mentored', icon: Heart }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Our Team' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                </div>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="hero-card surface-alt">
                        <div className="hero-icon bg-gradient-to-r from-purple-500 to-pink-600">
                            <Users className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="hero-title">Meet Our Expert Team</h1>
                        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-200/90">
                            Instructors, mentors, and program strategists who have built security operations, product teams, and engineering orgs across high-growth companies.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-purple-500/20 text-purple-100/80">Industry Veterans</span>
                            <span className="chip bg-pink-500/20 text-pink-100/80">Certified Experts</span>
                            <span className="chip bg-blue-500/20 text-blue-100/80">Passionate Educators</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-indigo">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-8 md:grid-cols-4">
                        {teamStats.map((stat) => (
                            <div key={stat.label} className="glass-card px-6 py-8 text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.number}</div>
                                <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Leadership &amp; Faculty</h2>
                        <p className="mt-3 text-base leading-relaxed text-slate-200/80">
                            Meet the mentors who will guide you through every milestone of your learning journey.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="glass-card p-6">
                                <div className="mb-6 text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-xl font-bold text-white">
                                        {member.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-purple-200/80">{member.role}</p>
                                    <div className="mt-4 flex justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                                        <span className="rounded-full border border-white/10 px-3 py-1">{member.expertise}</span>
                                        <span className="rounded-full border border-white/10 px-3 py-1">{member.experience}</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-200/80">{member.bio}</p>
                                <div className="mt-6 flex justify-center gap-3">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-200"
                                        title="Email"
                                    >
                                        <Mail size={18} />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-200"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-200"
                                        title="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-10 text-center md:p-14">
                        <h2 className="text-3xl font-semibold text-white">Join Our Growing Team</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            We are always on the lookout for mentors, instructors, and program coaches who love building talent. If you live and breathe learning culture, let’s talk.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button
                                onClick={() => onNavigate('careers')}
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-transform duration-300 hover:scale-[1.02]"
                            >
                                View Career Opportunities
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 transition-colors duration-300 hover:border-white/40 hover:text-white"
                            >
                                Get in Touch
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-300/70">
                            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" />4.9/5 Rating</span>
                            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-sky-300" />5000+ Students</span>
                            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-emerald-300" />Industry Leaders</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}