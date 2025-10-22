import React, { useState } from 'react';
import { MapPin, Clock, IndianRupee, Users, Heart, Zap, Award, Briefcase, Search, Star, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import SectionTitle from '@/components/SectionTitle';

export default function CareersPage({ onNavigate }) {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Unified benefits for all Lead Instructor roles
    const leadInstructorBenefits = [
        'Remote Work',
        'Flexible Hours',
        'Professional Development',
        'Competitive Salary'
    ];

    // Slightly different benefits for Student Success Specialist
    const studentSuccessBenefits = [
        'Remote Work',
        'Flexible Hours',
        'Professional Development',
        'Work-Life Balance',
        'Student Impact'
    ];

    const jobOpenings = [
        {
            title: 'Lead Instructor - Cybersecurity',
            type: 'Full-time',
            location: 'Remote',
            salary: '8-10 LPA',
            department: 'teaching',
            level: 'senior',
            description: 'Join our team as a Lead Instructor in Cybersecurity. Mentor students, design curriculum, and drive hands-on learning in enterprise security and risk management.',
            requirements: [
                '8+ years of experience in cybersecurity',
                'Industry certifications (CEH, CISSP, OSCP)',
                'Experience designing and delivering technical training',
                'Excellent communication and mentoring skills'
            ],
            benefits: leadInstructorBenefits,
            urgent: true
        },
        {
            title: 'Lead Instructor - AI & Data Science',
            type: 'Full-time',
            location: 'Remote',
            salary: '8-10 LPA',
            department: 'teaching',
            level: 'senior',
            description: 'Lead our AI & Data Science programs. Teach, mentor, and guide students in advanced AI, ML, and Data Science concepts and projects.',
            requirements: [
                'PhD or Masters in Data Science/AI/ML',
                'Experience with Python, TensorFlow, PyTorch, GenAI',
                'Industry experience in AI, ML, Data Science',
                'Teaching experience preferred'
            ],
            benefits: leadInstructorBenefits,
            urgent: true
        },
        {
            title: 'Lead Instructor - Full Stack Development',
            type: 'Full-time',
            location: 'Remote',
            salary: '8-10 LPA',
            department: 'teaching',
            level: 'senior',
            description: 'Lead our Full Stack Development courses. Mentor students in modern web technologies, frameworks, and best practices.',
            requirements: [
                '7+ years of experience in full stack development',
                'Expertise in React, Node.js, databases',
                'Experience teaching or mentoring developers',
                'Strong communication skills'
            ],
            benefits: leadInstructorBenefits,
            urgent: true
        },
        {
            title: 'Student Success Specialist',
            type: 'Full-time',
            location: 'Remote',
            salary: '4-6 LPA',
            department: 'support',
            level: 'entry',
            description: 'Support our students throughout their learning journey and ensure they achieve their career goals.',
            requirements: [
                'Bachelor\'s degree in any field',
                'Excellent communication skills',
                'Experience in education or customer success',
                'Empathetic and student-focused approach'
            ],
            benefits: studentSuccessBenefits,
            urgent: true
        }
    ];

    const filteredJobs = jobOpenings.filter(job => {
        const matchesFilter = filter === 'all' || job.department === filter;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             job.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const companyBenefits = [
        {
            icon: Heart,
            title: 'Great Culture',
            description: 'Collaborative and supportive work environment with passionate colleagues',
            color: 'text-pink-400'
        },
        {
            icon: Clock,
            title: 'Work-Life Balance',
            description: 'Flexible remote work and reasonable hours to maintain healthy lifestyle',
            color: 'text-green-400'
        },
        {
            icon: IndianRupee,
            title: 'Competitive Pay',
            description: 'Attractive salary packages with performance-based incentives',
            color: 'text-yellow-400'
        },
        {
            icon: Globe,
            title: 'Remote Work',
            description: 'Work from anywhere in India with modern collaboration tools',
            color: 'text-blue-400'
        },
        {
            icon: TrendingUp,
            title: 'Growth Opportunities',
            description: 'Continuous learning and career advancement paths available',
            color: 'text-purple-400'
        },
        {
            icon: Award,
            title: 'Recognition',
            description: 'Regular appreciation and rewards for outstanding contributions',
            color: 'text-orange-400'
        }
    ];

    const careerStats = [
        { number: '50+', label: 'Team Members', icon: Users },
        { number: '95%', label: 'Employee Satisfaction', icon: Heart },
        { number: '100%', label: 'Remote Work', icon: Globe },
        { number: '24/7', label: 'Learning Support', icon: Briefcase }
    ];

    const departments = [
        { id: 'all', name: 'All Departments', count: jobOpenings.length },
        { id: 'teaching', name: 'Teaching', count: jobOpenings.filter(j => j.department === 'teaching').length },
        { id: 'engineering', name: 'Engineering', count: jobOpenings.filter(j => j.department === 'engineering').length },
        { id: 'support', name: 'Support', count: jobOpenings.filter(j => j.department === 'support').length }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Careers' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />

                    <div className="hero-card surface-alt">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500">
                            <Briefcase className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Careers at Agnidhra</SectionTitle>
                        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-100/80">
                            Join our mission to empower the next generation of technology professionals. Collaborate with passionate mentors, build meaningful programs, and shape learner success worldwide.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                            <span className="glass-chip bg-teal-500/20 text-teal-100/85">Remote Work</span>
                            <span className="glass-chip bg-cyan-500/20 text-cyan-100/85">Growth Pathways</span>
                            <span className="glass-chip bg-emerald-500/20 text-emerald-100/85">Inclusive Culture</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-white">Life At Agnidhra</h2>
                        <p className="mt-3 text-sm text-slate-200/80">A collaborative remote-first culture where learning and impact thrive.</p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {careerStats.map((stat) => (
                            <div key={stat.label} className="glass-card p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-3xl font-semibold text-white">{stat.number}</div>
                                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-200/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-white">Why Choose Agnidhra?</h2>
                        <p className="mt-3 text-sm text-slate-100/80">We are a community of innovators, educators, and technologists dedicated to learner outcomes.</p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {companyBenefits.map((benefit) => (
                            <div key={benefit.title} className="glass-panel p-6 transition-transform duration-300 hover:-translate-y-1">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-100/80">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-emerald">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-white">Current Openings</h2>
                        <p className="mt-3 text-sm text-slate-100/80">Find the role that fits your expertise and join our growing team of mentors and enablers.</p>
                    </div>

                    <div className="mt-10 glass-panel p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-wrap gap-3">
                                {departments.map((dept) => (
                                    <button
                                        key={dept.id}
                                        onClick={() => setFilter(dept.id)}
                                        className={`glass-chip text-sm ${
                                            filter === dept.id
                                                ? 'bg-teal-500/30 text-white'
                                                : 'text-slate-200/80 hover:bg-teal-500/10'
                                        }`}
                                    >
                                        {dept.name} ({dept.count})
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full max-w-xs">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300/70" />
                                <input
                                    type="text"
                                    placeholder="Search roles..."
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    className="glass-input w-full rounded-xl border border-transparent bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder:text-slate-300/60 focus:border-teal-400/60 focus:outline-none focus:ring-1 focus:ring-teal-400/40"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-8">
                        {filteredJobs.map((job) => (
                            <div key={job.title} className="glass-card border border-teal-500/20 p-8 transition-transform duration-300 hover:-translate-y-1">
                                {job.urgent && (
                                    <span className="glass-chip mb-4 inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
                                        🚀 Urgent Hiring
                                    </span>
                                )}
                                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                                        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-100/75">
                                            <span className="glass-chip bg-white/10 text-teal-100">
                                                <Clock className="mr-2 h-4 w-4 text-teal-200" />
                                                {job.type}
                                            </span>
                                            <span className="glass-chip bg-white/10 text-cyan-100">
                                                <MapPin className="mr-2 h-4 w-4 text-cyan-200" />
                                                {job.location}
                                            </span>
                                            <span className="glass-chip bg-white/10 text-emerald-100">
                                                <IndianRupee className="mr-2 h-4 w-4 text-emerald-200" />
                                                {job.salary}
                                            </span>
                                            <span
                                                className={`glass-chip capitalize ${
                                                    job.level === 'senior'
                                                        ? 'bg-rose-500/20 text-rose-100'
                                                        : job.level === 'mid'
                                                            ? 'bg-amber-500/20 text-amber-100'
                                                            : 'bg-emerald-500/20 text-emerald-100'
                                                }`}
                                            >
                                                {job.level} level
                                            </span>
                                        </div>
                                        <p className="mt-5 text-sm leading-relaxed text-slate-100/80">{job.description}</p>
                                    </div>

                                    <div className="md:w-48">
                                        <button
                                            onClick={() => onNavigate('contact')}
                                            className="glass-button bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-500/90 hover:to-cyan-500/90"
                                        >
                                            <Zap className="h-4 w-4" />
                                            Apply Now
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-6 md:grid-cols-2">
                                    <div className="glass-panel bg-white/5 p-6">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Core Requirements</h4>
                                        <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
                                            {job.requirements.map((item) => (
                                                <li key={item} className="flex items-start gap-2">
                                                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-300" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="glass-panel bg-white/5 p-6">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">What You Receive</h4>
                                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-100/80">
                                            {job.benefits.map((benefit) => (
                                                <span key={benefit} className="glass-chip bg-white/10 text-slate-100">
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500">
                            <Star className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-semibold text-white">Don't See A Perfect Match?</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-100/85">
                            We love meeting talented people. Share your profile, and we'll explore how you can contribute to our learner success mission.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
                            <button onClick={() => onNavigate('contact')} className="glass-button bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-500/90 hover:to-cyan-500/90">
                                Send Your Resume
                            </button>
                            <button onClick={() => onNavigate('about')} className="glass-button text-teal-100 hover:bg-teal-500/10">
                                Learn About Us
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-100/70">
                            <span className="inline-flex items-center gap-2">
                                <Heart className="h-4 w-4 text-rose-300" />
                                Great Culture
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-emerald-300" />
                                Growth Opportunities
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Globe className="h-4 w-4 text-sky-300" />
                                Remote First
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}