import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';
import { Code, Clock, CheckCircle, Award, Server, BrainCircuit, BookOpenCheck, Blocks, Sparkles, ChevronRight } from 'lucide-react';

export default function ProgrammingWithDSA({ onNavigate }) {
    const features = [
        {
            icon: Blocks,
            title: 'Data Structures Foundation',
            description: 'Master arrays, linked lists, stacks, queues, trees, graphs and hashing with real-world use cases.',
            skills: ['Arrays', 'Trees', 'Graphs', 'Heaps'],
            color: 'green'
        },
        {
            icon: BookOpenCheck,
            title: 'Algorithmic Thinking',
            description: 'Level up with recursion, dynamic programming, greedy, backtracking and advanced searching techniques.',
            skills: ['Recursion', 'Dynamic Programming', 'Greedy', 'Backtracking'],
            color: 'purple'
        },
        {
            icon: BrainCircuit,
            title: 'Interview Problem Solving',
            description: 'Solve FAANG-style problems, practice mock interviews and build confidence with timed contests.',
            skills: ['Mock Interviews', 'Competitive Coding', 'Complexity Analysis', 'System Design Basics'],
            color: 'red'
        }
    ];

    const benefits = [
        'Interview-ready DSA knowledge',
        'Hands-on problem solving sessions',
        'Mock interviews and placement guidance',
        'Lifetime access to curated resources'
    ];

    const relatedCourses = [
        { title: 'Full Stack Development', page: 'full-stack-dev', icon: Server, color: 'blue' },
        { title: 'Multi-Cloud DevOps Professional', page: 'multi-cloud-devops', icon: Sparkles, color: 'green' },
        { title: 'Data Science Professional', page: 'data-science', icon: BrainCircuit, color: 'cyan' }
    ];

    const heroHighlights = [
        { label: 'C++', classes: 'bg-indigo-500/20 text-indigo-200 border-indigo-500/30' },
        { label: 'Java', classes: 'bg-purple-500/20 text-purple-200 border-purple-500/30' },
        { label: 'Python', classes: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30' },
        { label: 'Problem Solving', classes: 'bg-amber-500/20 text-amber-200 border-amber-500/30' }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="institute"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Programming with DSA' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-20 right-16 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500">
                            <Code className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Programming with DSA</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Build algorithmic intuition, master core data structures, and crack product engineering interviews with structured practice and mentor feedback.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-indigo-200">{getFeeDisplay('Programming with DSA')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Programming with DSA');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-500/90 hover:to-purple-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            {heroHighlights.map((item) => (
                                <span key={item.label} className={`chip ${item.classes}`}>
                                    {item.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Problem solving foundations</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-200/75">{feature.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                                    {feature.skills.map((skill) => (
                                        <span key={skill} className={`chip bg-${feature.color}-500/15 text-${feature.color}-100/80`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-indigo-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Aspirants Choose This Track</h3>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 text-indigo-300" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-indigo-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-indigo-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Duration</span>
                                    <span className="text-base font-semibold">12 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-indigo-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Mode</span>
                                    <span className="text-base font-semibold">Live Online</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Server className="h-7 w-7 text-indigo-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Projects</span>
                                    <span className="text-base font-semibold">Mock Interviews</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Code className="h-7 w-7 text-indigo-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Level</span>
                                    <span className="text-base font-semibold">Beginner → Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-emerald">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Crack Coding Interviews With Confidence</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Solve curated problem sets, analyze complexity, and practice FAANG-style interviews in a collaborative environment.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-indigo-200">{getFeeDisplay('Programming with DSA')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Programming with DSA');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-500/90 hover:to-purple-500/90"
                            >
                                Enroll Now
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button text-indigo-200 hover:bg-indigo-500/10">
                                Talk To Mentor
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Related Courses</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Build your learning roadmap</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedCourses.map((course) => (
                            <div
                                key={course.title}
                                className="group glass-card cursor-pointer p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                                onClick={() => onNavigate(course.page)}
                            >
                                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${course.color}-500 to-${course.color}-600`}>
                                    <course.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white">{course.title}</h4>
                                <div className="mt-3 inline-flex items-center text-sm text-slate-200/70">
                                    Learn More
                                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
