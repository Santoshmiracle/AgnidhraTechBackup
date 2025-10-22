import React from 'react';
import { Code, Target, Users, Award, Clock, CheckCircle, ChevronRight, Calendar, MessageCircle, Download, Shield, Zap, Globe, Lock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function OffensiveSecurityPage({ onNavigate }) {
    const features = [
        {
            icon: Target,
            title: 'Penetration Testing',
            description: 'Master systematic penetration testing methodologies and frameworks',
            skills: ['PTES', 'OSSTMM', 'NIST', 'OWASP'],
            color: 'red'
        },
        {
            icon: Globe,
            title: 'Web Application Security',
            description: 'Exploit and secure web applications against common vulnerabilities',
            skills: ['SQL Injection', 'XSS', 'CSRF', 'OWASP Top 10'],
            color: 'orange'
        },
        {
            icon: Shield,
            title: 'Network Security',
            description: 'Advanced network penetration testing and exploitation techniques',
            skills: ['Nmap', 'Metasploit', 'Wireshark', 'Burp Suite'],
            color: 'blue'
        },
        {
            icon: Lock,
            title: 'Vulnerability Assessment',
            description: 'Comprehensive vulnerability scanning and risk assessment',
            skills: ['Nessus', 'OpenVAS', 'Qualys', 'Risk Analysis'],
            color: 'green'
        },
        {
            icon: Zap,
            title: 'Wireless Security',
            description: 'Wireless network penetration testing and security',
            skills: ['WiFi Hacking', 'Bluetooth', 'RF Security', 'Aircrack-ng'],
            color: 'purple'
        },
        {
            icon: Users,
            title: 'Social Engineering',
            description: 'Human-centric security testing and awareness training',
            skills: ['Phishing', 'Pretexting', 'Physical Security', 'SE Tools'],
            color: 'pink'
        }
    ];

    const benefits = [
        'Become a certified Ethical Hacker',
        'Hands-on penetration testing experience',
        'Industry-recognized CEH certification prep',
        'Career guidance and placement support',
        'Lifetime access to course materials',
        '24/7 community support'
    ];

    const relatedCourses = [
        { title: 'Defensive Security Professional', page: 'defensive-security', icon: Shield, color: 'sky' },
        { title: 'Offensive Security Professional (Advanced)', page: 'offensive-security', icon: Users, color: 'green' },
        { title: 'Multi-Cloud DevOps', page: 'multi-cloud-devops', icon: Target, color: 'purple' }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="academy"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Academy' },
                            { label: 'Offensive Security Professional' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 left-1/3 h-32 w-32 rounded-full bg-rose-500/15 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500">
                            <Code className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Offensive Security Professional</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Master the attacker&apos;s mindset and ethical hacking toolkits. Learn to identify, exploit, and report vulnerabilities before adversaries can.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-amber-300">{getFeeDisplay('Offensive Security Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Offensive Security Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-500/90 hover:to-orange-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-rose-500/20 text-rose-200/90">Penetration Testing</span>
                            <span className="chip bg-orange-500/20 text-orange-200/90">Web Security</span>
                            <span className="chip bg-blue-500/20 text-blue-200/90">Network Exploitation</span>
                            <span className="chip bg-purple-500/20 text-purple-200/90">Wireless Operations</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Red-team disciplines and tooling</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-200/75">{feature.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                                    {feature.skills.map((skill) => (
                                        <span key={skill} className={`chip bg-${feature.color}-500/15 text-${feature.color}-200/85`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-orange-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Build Production-Ready Offensive Skills</h3>
                            <ul className="mt-6 space-y-3 text-sm text-slate-200/85">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 text-emerald-400" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-orange-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-orange-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Duration</span>
                                    <span className="text-base font-semibold">8 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Users className="h-7 w-7 text-orange-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Mode</span>
                                    <span className="text-base font-semibold">Live Cohort</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Target className="h-7 w-7 text-orange-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Level</span>
                                    <span className="text-base font-semibold">Intermediate</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-orange-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Certification</span>
                                    <span className="text-base font-semibold">CEH Prep</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Become an Ethical Hacker?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Join our comprehensive program and master offensive security techniques through guided labs, simulations, and red-team exercises.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-amber-300">{getFeeDisplay('Offensive Security Professional')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Offensive Security Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-500/90 hover:to-orange-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <button onClick={() => onNavigate('batches')} className="glass-button flex items-center justify-center gap-2">
                                <Calendar className="h-5 w-5" />
                                View Batches
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                Free Consultation
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <Download className="h-5 w-5" />
                                Download Syllabus
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Tracks</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Continue your learning journey</p>
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