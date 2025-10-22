import React from 'react';
import { Target, Users, Award, Lightbulb, Star, TrendingUp, Globe, Heart } from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import teamMembers from '../data/team';

export default function AboutPage({ onNavigate }) {
    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from course content to student support.',
            color: 'red'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building a supportive learning community where students help each other grow.',
            color: 'blue'
        },
        {
            icon: Award,
            title: 'Innovation',
            description: 'Staying at the forefront of technology trends and industry best practices.',
            color: 'green'
        },
        {
            icon: Lightbulb,
            title: 'Empowerment',
            description: 'Empowering individuals to reach their full potential in their chosen careers.',
            color: 'purple'
        }
    ];

    const stats = [
        { number: '5000+', label: 'Students Trained', icon: Users },
        { number: '95%', label: 'Success Rate', icon: TrendingUp },
        { number: '50+', label: 'Expert Instructors', icon: Award },
        { number: '24/7', label: 'Support Available', icon: Heart }
    ];

    // Only show heads and leads in leadership section
    const leadershipTeam = teamMembers.filter(member =>
        /head|ceo|founder/i.test(member.role)
    );

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'About Us' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                </div>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon">
                            <Globe className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="hero-title">About Agnidhra Technologies</h1>
                        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-200/90">
                            Empowering the next generation of technology leaders through mentor-led training in cybersecurity, software development, and emerging tech stacks.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-200/90">Founded 2020</span>
                            <span className="chip bg-purple-500/20 text-purple-200/90">5000+ Students</span>
                            <span className="chip bg-emerald-500/20 text-emerald-200/90">Industry Mentors</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="glass-card px-6 py-8 text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-white">{stat.number}</div>
                                <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-indigo">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/85">
                            Bridging the global skills gap by helping learners build project-ready expertise across cybersecurity, DevOps, and product engineering. We combine real-world simulations with mentorship so that every learner can thrive in modern teams.
                        </p>
                        <p className="mt-6 text-base leading-relaxed text-slate-200/80">
                            Our training philosophy is simple: learn by doing, with people who care deeply about your success. Every cohort is built around impact, from hands-on labs to placement support and lifelong community access.
                        </p>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Our Core Values</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Principles that guide how we teach, mentor, and support each learner</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {values.map((value) => (
                            <div key={value.title} className="glass-card p-6 text-left">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-purple-500">
                                        <value.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-200/85">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Why Choose Agnidhra?</h2>
                        <p className="mt-3 text-base leading-relaxed text-slate-200/80">
                            Small cohorts, mentor-led learning, and outcome-focused projects so you can ship faster and interview confidently.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="glass-card p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Expert Instructors</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">Learn from practitioners who lead security operations, SRE teams, and product orgs across high-growth companies.</p>
                        </div>
                        <div className="glass-card p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Project-First Learning</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">Ship case studies, lab playbooks, and production-grade projects that mirror real team scenarios.</p>
                        </div>
                        <div className="glass-card p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Career Acceleration</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">Interview prep, portfolio reviews, and referral support from mentors invested in your outcomes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Meet Our Leadership Team</h2>
                        <p className="mt-3 text-base leading-relaxed text-slate-200/80">Security architects, product builders, and educators who partner with you across the learning journey.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {leadershipTeam.map((member) => (
                            <div key={member.name} className="glass-card p-6 text-center">
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-cyan-200/80">{member.role}</p>
                                <p className="mt-3 text-sm text-slate-300/80">{member.expertise} Expert</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => onNavigate('team')}
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100 transition-colors hover:bg-cyan-500/25"
                        >
                            View Full Team
                        </button>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-10 text-center md:p-14">
                        <h2 className="text-3xl font-semibold text-white">Ready to Start Your Journey?</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Join thousands of technologists who have accelerated their careers with Agnidhra. Speak with our mentors, review the curriculum, and find the cohort that fits your ambition.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-transform duration-300 hover:scale-[1.02]"
                            >
                                Get in Touch
                            </button>
                            <button
                                onClick={() => { localStorage.setItem('selectedCourse', 'General Enrollment'); onNavigate('enroll'); }}
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 transition-colors duration-300 hover:border-white/40 hover:text-white"
                            >
                                Explore Programs
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-300/70">
                            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" />4.9/5 Rating</span>
                            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-sky-300" />5000+ Learners</span>
                            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-emerald-300" />Certified Training</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}