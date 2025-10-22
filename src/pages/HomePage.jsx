import React, { useState } from 'react';
import { Shield, Users, Target, Code, Sparkles, Briefcase, Award, MessageCircle, Server, BrainCircuit, ChevronRight, Calendar, MapPin, Users as UsersIcon, CheckCircle, ArrowRight, Star, TrendingUp, Clock, Database } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle.jsx';
import { isDiwaliPeriod } from '../utils/pricing';
import { motion } from 'framer-motion';
import { upcomingEvents } from '@/data/events';

// --- Sub-components specific to HomePage ---

const heroHighlights = [
    {
        title: 'Live mentor support',
        detail: 'Exclusive Discord and WhatsApp mentorship with 1:8 cohort ratios.'
    },
    {
        title: 'Career acceleration',
        detail: 'Interview prep, mock assessments, and referrals across 50+ partner companies.'
    },
    {
        title: 'Industry-grade labs',
        detail: 'Hands-on SOC, DevOps, and full-stack projects mirroring modern team workflows.'
    }
];

const heroStats = [
    { value: '500+', label: 'Learners placed' },
    { value: '95%', label: 'Interview success' },
    { value: '50+', label: 'Hiring partners' },
    { value: '4.9/5', label: 'Learner rating' }
];

const academyPrograms = [
    {
        title: 'Defensive Security Professional',
        description: 'Hands-on SOC analyst training covering threat detection, triage, and incident response with 24/7 lab access.',
        tags: ['SIEM', 'Threat Hunting', 'Incident Response'],
        icon: Shield,
        accentFrom: 'from-sky-500',
        accentTo: 'to-blue-600',
        status: 'enrolling',
        page: 'defensive-security'
    },
    {
        title: 'Offensive Security Professional',
        description: 'Advanced penetration testing, exploit development, and red-team operations mapped to industry certifications.',
        tags: ['Ethical Hacking', 'Exploit Dev', 'Red Team'],
        icon: Code,
        accentFrom: 'from-rose-500',
        accentTo: 'to-red-600',
        status: 'comingSoon',
        page: 'offensive-security'
    },
    {
        title: 'Specialized Cyber Add-ons',
        description: 'Deep dives into malware analysis, incident response, digital forensics, and cloud security for experienced learners.',
        tags: ['Malware', 'Forensics', 'Cloud Security'],
        icon: Sparkles,
        accentFrom: 'from-amber-500',
        accentTo: 'to-orange-500',
        status: 'comingSoon',
        page: 'specialized-addons'
    }
];

const valueHighlights = [
    {
        title: 'Project-first learning',
        description: 'Every cohort ships real client-style deliverables so you graduate with a portfolio that proves your craft.',
        icon: Briefcase,
        accent: 'text-sky-300'
    },
    {
        title: 'Personal mentorship',
        description: '1:1 weekly check-ins, structured doubt clearing, and feedback loops from industry practitioners.',
        icon: Users,
        accent: 'text-purple-300'
    },
    {
        title: 'Career acceleration',
        description: 'Placement support, resume revamps, mock interviews, and referrals into 50+ hiring partners.',
        icon: Award,
        accent: 'text-emerald-300'
    },
    {
        title: 'Modern lab stack',
        description: 'SOC, cloud, and DevOps labs hosted on enterprise tooling so you practice exactly how teams work today.',
        icon: Sparkles,
        accent: 'text-amber-300'
    }
];

const admissionsSteps = [
    {
        step: 'Step 01',
        title: 'Share your goals',
        description: 'Tell us what you want to achieve so we can recommend the right cohort, timeline, and learning path.'
    },
    {
        step: 'Step 02',
        title: 'Experience a live session',
        description: 'Join a free strategy call plus a sample class to understand our teaching style and lab environment.'
    },
    {
        step: 'Step 03',
        title: 'Confirm your seat',
        description: 'Complete enrollment, set up your tools, and start learning with pre-work while we onboard you into the community.'
    }
];

const CybersecurityAcademy = ({ onNavigate }) => (
    <section id="academy" className="bg-slate-950 py-24">
        <div className="container mx-auto px-6">
            <SectionTitle>Cybersecurity Academy</SectionTitle>
            <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                Master job-ready cyber skills with layered mentorship, live blue-team labs, and red-team simulations guided by industry mentors.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {academyPrograms.map((program) => (
                    <div
                        key={program.title}
                        className="group relative h-full overflow-hidden rounded-3xl border border-slate-700/30 bg-slate-900/60 p-8 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-500/40"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.accentFrom} ${program.accentTo} shadow-lg`}>
                                <program.icon className="h-7 w-7 text-white" />
                            </div>
                            <span
                                className={`${
                                    program.status === 'comingSoon'
                                        ? 'border border-amber-400/40 bg-amber-500/10 text-amber-200'
                                        : 'border border-sky-400/40 bg-sky-500/10 text-sky-100'
                                } rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide`}
                            >
                                {program.status === 'comingSoon' ? 'Coming Soon' : 'Enrolling'}
                            </span>
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold text-white">{program.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">{program.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {program.tags.map((tag) => (
                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                            <span className="text-xs uppercase tracking-wide text-slate-500">
                                {program.status === 'comingSoon' ? 'Join the waitlist' : 'Live cohort this month'}
                            </span>
                            <button
                                type="button"
                                onClick={() => onNavigate(program.page)}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-sky-400/40 hover:bg-sky-500/20"
                            >
                                View details
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TechnologyInstitute = ({ onNavigate }) => {
    const cards = [
        {
            key: 'fullstack',
            title: 'Full Stack Development',
            page: 'full-stack-dev',
            icon: Code,
            tags: ['React', 'Node.js', 'MongoDB'],
            desc: 'Master front-end and back-end development with modern frameworks and best practices.',
            comingSoon: true,
            colorFrom: 'from-blue-500',
            colorTo: 'to-cyan-600'
        },
        {
            key: 'multicloud',
            title: 'Multi-Cloud DevOps Professional',
            page: 'multi-cloud-devops',
            icon: Server,
            tags: ['AWS', 'Docker', 'Kubernetes'],
            desc: 'Learn cloud platforms, containerization, and DevOps pipelines for scalable applications.',
            comingSoon: false,
            colorFrom: 'from-green-500',
            colorTo: 'to-teal-600'
        },
        {
            key: 'ai',
            title: 'AI & ML Professional',
            page: 'ai-data-science',
            icon: BrainCircuit,
            tags: ['Python', 'TensorFlow', 'ML'],
            desc: 'Explore machine learning and AI applications with hands-on projects and deep learning modules.',
            comingSoon: true,
            colorFrom: 'from-purple-500',
            colorTo: 'to-violet-600'
        },
        {
            key: 'database',
            title: 'Database Management & SQL',
            page: 'database-management',
            icon: Database,
            tags: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
            desc: 'Learn database design, SQL querying, and management with popular RDBMS and NoSQL systems.',
            comingSoon: true,
            colorFrom: 'from-green-500',
            colorTo: 'to-emerald-600'
        },
        {
            key: 'mobile',
            title: 'Mobile Development',
            page: 'mobile-dev',
            icon: MessageCircle,
            tags: ['React Native', 'Flutter', 'iOS/Android'],
            desc: 'Build native and cross-platform mobile apps for iOS and Android platforms.',
            comingSoon: true,
            colorFrom: 'from-pink-500',
            colorTo: 'to-rose-600',
            colSpan: 'md:col-span-2 lg:col-span-1'
        },
        {
            key: 'programming',
            title: 'Programming with DSA',
            page: 'programming-with-dsa',
            icon: BrainCircuit,
            tags: ['DSA', 'Problem Solving', 'Interview Prep'],
            desc: 'Build strong problem-solving and data-structures skills for interviews and competitive programming.',
            comingSoon: false,
            colorFrom: 'from-indigo-500',
            colorTo: 'to-blue-600'
        },
        {
            key: 'datascience',
            title: 'Data Science Professional',
            page: 'data-science',
            icon: Code,
            tags: ['Pandas', 'NumPy', 'ML', 'Visualization'],
            desc: 'Transform data into insights with courses in statistics, ML, visualization and big-data tooling.',
            comingSoon: false,
            colorFrom: 'from-cyan-500',
            colorTo: 'to-teal-600'
        }
    ];

    return (
        <section id="institute" className="relative overflow-hidden bg-gradient-to-br from-[#050510] via-[#08132b] to-[#050510] py-24">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(90,161,255,0.14),transparent_65%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_70%)]" aria-hidden />
            <div className="container relative mx-auto px-6">
                <SectionTitle>Technology Institute</SectionTitle>
                <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                    Build modern engineering skills across cloud, AI, and software stacks through immersive cohorts, collaborative labs, and mentor feedback.
                </p>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card) => (
                        <div
                            key={card.key}
                            className={`group relative h-full overflow-hidden rounded-3xl border border-slate-700/40 bg-gradient-to-br from-slate-900/85 via-slate-800/70 to-slate-900/60 p-8 shadow-[0_25px_60px_-20px_rgba(7,16,40,0.65)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-[0_35px_80px_-20px_rgba(56,189,248,0.35)] ${card.colSpan ?? ''}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.colorFrom} ${card.colorTo} shadow-lg`}>
                                    <card.icon className="h-7 w-7 text-white" />
                                </div>
                                <span
                                    className={`${
                                        card.comingSoon
                                            ? 'border border-amber-400/40 bg-amber-500/10 text-amber-200'
                                            : 'border border-emerald-400/40 bg-emerald-500/10 text-emerald-100'
                                    } rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide`}
                                >
                                    {card.comingSoon ? 'Coming Soon' : 'Enrolling'}
                                </span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">{card.desc}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {card.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-wide text-slate-500">
                                    {card.comingSoon ? 'Request early access' : 'Project-first curriculum'}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => onNavigate(card.page)}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-sky-400/40 hover:bg-sky-500/20"
                                >
                                    View syllabus
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyUs = () => (
    <section id="why-us" className="bg-slate-900 py-24">
        <div className="container mx-auto px-6">
            <SectionTitle>Why Train With Us?</SectionTitle>
            <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                Every cohort is built around outcomes: building with modern tooling, practising on real datasets, and having mentors who are invested in your journey.
            </p>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {valueHighlights.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-3xl border border-slate-700/30 bg-slate-900/60 p-8 text-left shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-500/40"
                    >
                        <div className={`${item.accent} mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 ring-1 ring-white/10`}>
                            <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Admissions = () => (
    <section id="admissions" className="relative overflow-hidden bg-gradient-to-br from-[#090720] via-[#161252] to-[#090720] py-24">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(circle_at_top,_rgba(144,97,255,0.18),transparent_70%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_70%)]" aria-hidden />
        <div className="container relative mx-auto px-6">
            <SectionTitle>Admissions Process</SectionTitle>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                We keep enrolment personal and transparent so you know exactly how the cohort will help you hit your next milestone.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                {admissionsSteps.map((step) => (
                    <div key={step.title} className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-xl shadow-indigo-950/40 backdrop-blur">
                        <span className="mx-auto mb-4 inline-flex rounded-full border border-sky-300/30 bg-sky-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
                            {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-100/80">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Events = ({ onNavigate, events = [] }) => {
    const typeStyles = {
        Workshop: {
            badge: 'bg-blue-500/15 text-blue-200 border border-blue-500/30',
            button: 'from-blue-500 to-cyan-500'
        },
        Masterclass: {
            badge: 'bg-purple-500/15 text-purple-200 border border-purple-500/30',
            button: 'from-purple-500 to-violet-500'
        },
        Conference: {
            badge: 'bg-green-500/15 text-green-200 border border-green-500/30',
            button: 'from-green-500 to-emerald-500'
        },
        'Panel Discussion': {
            badge: 'bg-orange-500/15 text-orange-200 border border-orange-500/30',
            button: 'from-orange-500 to-amber-500'
        }
    };

    const defaultStyles = {
        badge: 'bg-slate-600/20 text-slate-200 border border-slate-500/30',
        button: 'from-slate-600 to-slate-500'
    };

    return (
        <section id="events" className="relative overflow-hidden bg-gradient-to-br from-[#041218] via-[#0b2835] to-[#041218] py-24">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_65%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.14),transparent_70%)]" aria-hidden />
            <div className="container relative mx-auto px-6">
                <SectionTitle>Upcoming Events</SectionTitle>
                <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                    Learn with the community, meet mentors, and stay ahead of emerging trends through hands-on workshops and AMAs.
                </p>
                <div className="max-w-4xl mx-auto space-y-6">
                    {events.length === 0 && (
                        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-slate-100/80 shadow-[0_20px_45px_-25px_rgba(8,12,34,0.55)] backdrop-blur">
                            New events are on the way. Check back soon or explore the full calendar.
                        </div>
                    )}
                    {events.map((event, index) => {
                        const style = typeStyles[event.type] || defaultStyles;
                        return (
                            <div
                                key={event.title + index}
                                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_30px_70px_-25px_rgba(8,17,28,0.6)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_35px_80px_-20px_rgba(56,189,248,0.35)]"
                            >
                                <div className="flex items-start justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${style.badge}`}>
                                        {event.type}
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300 mb-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 text-sky-400 mr-2" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 text-purple-400 mr-2" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 text-green-400 mr-2" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <UsersIcon className="w-4 h-4 text-pink-400 mr-2" />
                                        <span>{event.attendees} registered</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-wide text-slate-500">{event.spotsLeft} spots left</span>
                                    <button
                                        type="button"
                                        onClick={() => onNavigate('events')}
                                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${style.button} px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-transform hover:-translate-y-0.5`}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <button
                        type="button"
                        onClick={() => onNavigate('events')}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-sky-500/40 hover:bg-sky-500/20"
                    >
                        Explore All Events
                        <ChevronRight size={18} className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const Batches = ({ onNavigate }) => (
    <section id="batches" className="bg-slate-900 py-24">
        <div className="container mx-auto px-6">
            <SectionTitle>Upcoming Batches</SectionTitle>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                Pick the batch that suits your schedule. All cohorts include recordings, live support, and capstone reviews.
            </p>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                {[
                    {
                        title: 'Cybersecurity Academy',
                        start: 'November 1, 2025',
                        duration: '8 weeks',
                        mode: 'Live + guided labs',
                        seats: '15 seats left',
                        accent: 'from-sky-500 to-blue-500'
                    },
                    {
                        title: 'Technology Institute',
                        start: 'November 15, 2025',
                        duration: '12 weeks',
                        mode: 'Live + weekend clinics',
                        seats: '20 seats left',
                        accent: 'from-violet-500 to-purple-500'
                    }
                ].map((batch) => (
                    <div key={batch.title} className="rounded-3xl border border-slate-700/30 bg-slate-900/60 p-8 shadow-lg backdrop-blur">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-white">{batch.title}</h3>
                            <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${batch.accent} px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white`}>
                                Enrolling
                            </span>
                        </div>
                        <div className="mt-6 space-y-2 text-sm text-slate-300">
                            <p><span className="text-slate-400">Start:</span> {batch.start}</p>
                            <p><span className="text-slate-400">Duration:</span> {batch.duration}</p>
                            <p><span className="text-slate-400">Format:</span> {batch.mode}</p>
                            <p><span className="text-slate-400">Seats:</span> {batch.seats}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => onNavigate('batches')}
                            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${batch.accent} px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-transform hover:-translate-y-0.5`}
                        >
                            Reserve my seat
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Trainers = () => ( <section id="trainers" className="py-20 bg-slate-900"><div className="container mx-auto px-6"><SectionTitle>Meet Your Trainers</SectionTitle><div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"><div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center"><img src="/logo.png" alt="Santosh Kumar" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-600" /><h3 className="text-2xl font-bold text-white">Santosh Kumar</h3><p className="text-sky-400 font-semibold mb-3">Lead Trainer & Founder</p><p className="text-slate-300">With 8 years of experience, Santosh provides a practical, end-to-end understanding of the tech landscape.</p></div><div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center"><img src="/logo.png" alt="Jeevan Kumar" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-600" /><h3 className="text-2xl font-bold text-white">Jeevan Kumar</h3><p className="text-sky-400 font-semibold mb-3">Co-Trainer | SOC Certified</p><p className="text-slate-300">With 6 years of experience, Jeevan brings rich practical exposure to the security landscape.</p></div></div></div></section>);
const Testimonials = () => ( <section id="testimonials" className="py-20 bg-slate-800"><div className="container mx-auto px-6"><SectionTitle>What Our Students Say</SectionTitle><div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"><div className="bg-slate-900 p-8 rounded-lg border border-slate-700"><p className="text-slate-300 italic mb-6">"The project-based approach was a game-changer. I landed a job as a SOC Analyst within two months of finishing the course!"</p><div className="flex items-center"><img src="https://placehold.co/50x50/0F172A/38BDF8?text=R" alt="Rohan S." className="w-12 h-12 rounded-full mr-4"/><div><h4 className="font-bold text-white">Rohan S.</h4><p className="text-sm text-slate-400">Cyber Security Graduate</p></div></div></div><div className="bg-slate-900 p-8 rounded-lg border border-slate-700"><p className="text-slate-300 italic mb-6">"The focus on real-world scenarios and hands-on labs prepared me for the technical interviews. Highly recommended!"</p><div className="flex items-center"><img src="https://placehold.co/50x50/0F172A/38BDF8?text=A" alt="Anjali P." className="w-12 h-12 rounded-full mr-4"/><div><h4 className="font-bold text-white">Anjali P.</h4><p className="text-sm text-slate-400">Cyber Security Graduate</p></div></div></div></div></div></section>);
const Contact = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `*New Website Inquiry*%0A%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A💬 Message: ${formData.message}`;
        const whatsappUrl = `https://wa.me/917331123651?text=${message}`;
        window.open(whatsappUrl, '_blank');
        alert('Thank you for your message! Redirecting to WhatsApp...');
        setFormData({ name: '', email: '', message: '' });
    };

    const launchWhatsApp = () => {
        window.open('https://wa.me/917331123651', '_blank');
    };

    return (
        <section id="contact" className="bg-slate-950 py-24">
            <div className="container mx-auto px-6">
                <SectionTitle>Get In Touch</SectionTitle>
                <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
                    Have questions about the programs or want to plan your learning path? Share your details and our academic advisors will reach out.
                </p>
                <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-3xl border border-slate-700/30 bg-slate-900/70 p-8 shadow-lg backdrop-blur">
                        <h3 className="text-xl font-semibold text-white">Talk to an advisor</h3>
                        <p className="mt-2 text-sm text-slate-300">We respond within 24 hours on working days.</p>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                                    Tell us how we can help
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Share information about the course, timing, or support you need."
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-blue-500/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-between rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-600/20 via-blue-600/20 to-purple-600/20 p-8 text-white shadow-xl">
                        <div>
                            <h3 className="text-2xl font-semibold">Need quick answers?</h3>
                            <p className="mt-3 text-sm text-slate-100/90">
                                Chat with us instantly on WhatsApp or schedule a call to walk through the curriculum, pricing, and payment options.
                            </p>
                            <button
                                type="button"
                                onClick={launchWhatsApp}
                                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                            >
                                <MessageCircle size={16} /> Chat on WhatsApp
                            </button>
                            <div className="mt-6 space-y-3 text-sm text-slate-100/80">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-200" /> Personalised learning roadmap
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-200" /> Flexible payment guidance
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-200" /> Scholarship eligibility check
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                localStorage.setItem('selectedCourse', 'General Enrollment');
                                onNavigate('enroll');
                            }}
                            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                        >
                            Start Enrollment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main HomePage Component ---

export default function HomePage({ onNavigate }) {
    const [isFaqBotOpen, setIsFaqBotOpen] = useState(false);
    // Use shared helper to determine Diwali period
    const isDiwali = isDiwaliPeriod();

    return (
        <>
                        <motion.section
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%)]" />
                            <div className="pointer-events-none absolute -top-40 right-[-30%] h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-3xl" />
                            <div className="container relative mx-auto px-6">
                                <div className="grid items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
                                    <div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-200">
                                            Future ready talent
                                        </div>
                                        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                                            Launch a tech career with <span className="text-sky-400">mentor-led</span> and <span className="text-purple-400">project-first</span> learning.
                                        </h1>
                                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                                            Upskill in cybersecurity, DevOps, AI, and full-stack development through curated cohorts that blend live instruction, collaborative labs, and career coaching tailored to Indian tech aspirants.
                                        </p>
                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                            <button
                                                type="button"
                                                onClick={() => { localStorage.setItem('selectedCourse', 'General Enrollment'); onNavigate('enroll'); }}
                                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-blue-500/30"
                                            >
                                                Start Your Journey
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => onNavigate('defensive-security')}
                                                className="inline-flex items-center justify-center rounded-xl border border-slate-600/80 px-6 py-4 text-base font-semibold text-slate-200 transition-colors duration-300 hover:border-slate-400 hover:text-white"
                                            >
                                                Explore All Programs
                                            </button>
                                        </div>
                                        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                                            {heroStats.map((stat) => (
                                                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-200">
                                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                                    <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -top-8 -right-8 hidden h-16 w-16 rounded-full border border-sky-500/40 lg:block" aria-hidden />
                                        <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Next Cohort</p>
                                                    <p className="mt-2 text-2xl font-semibold text-white">{isDiwaliPeriod() ? 'Festive Fast-Track' : 'November Intake'}</p>
                                                </div>
                                                <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-purple-500 p-3">
                                                    <Calendar className="h-6 w-6 text-white" />
                                                </div>
                                            </div>
                                            <div className="mt-6 space-y-4">
                                                {heroHighlights.map((item) => (
                                                    <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                                                        <CheckCircle className="mt-0.5 h-4 w-4 text-sky-400" />
                                                        <div>
                                                            <p className="font-semibold text-white">{item.title}</p>
                                                            <p className="text-sm text-slate-300">{item.detail}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-8 flex items-center justify-between rounded-2xl border border-sky-500/30 bg-sky-500/10 px-5 py-4 text-sm text-sky-100">
                                                <span>Book a personalised counselling session</span>
                                                <button
                                                    type="button"
                                                    onClick={() => onNavigate('contact')}
                                                    className="rounded-lg border border-sky-400 px-3 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-sky-500/20"
                                                >
                                                    Talk to us
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                        <WhyUs />
                        <CybersecurityAcademy onNavigate={onNavigate} />
                        <TechnologyInstitute onNavigate={onNavigate} />
                        <Admissions />
            <Events onNavigate={onNavigate} events={upcomingEvents.slice(0, 3)} />
            <Batches onNavigate={onNavigate} />
            <Contact onNavigate={onNavigate} />
        </>
    );
}

