import React from 'react';
import { Shield, Target, Users, Award, Clock, CheckCircle, ChevronRight, Calendar, MessageCircle, Download, BookOpen, Zap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function DefensiveSecurityPage({ onNavigate }) {
    const features = [
        {
            icon: Shield,
            title: 'SIEM & Log Analysis',
            description: 'Master security information and event management systems',
            skills: ['Splunk', 'ELK Stack', 'Log Correlation'],
            color: 'sky'
        },
        {
            icon: Target,
            title: 'Threat Detection & Response',
            description: 'Learn advanced threat hunting and incident response techniques',
            skills: ['Threat Hunting', 'IR Procedures', 'MITRE ATT&CK'],
            color: 'red'
        },
        {
            icon: Users,
            title: 'Vulnerability Management',
            description: 'Comprehensive vulnerability assessment and remediation',
            skills: ['Nessus', 'OpenVAS', 'Risk Assessment'],
            color: 'green'
        },
        {
            icon: BookOpen,
            title: 'Digital Forensics',
            description: 'Investigate cyber incidents and preserve digital evidence',
            skills: ['Evidence Collection', 'Chain of Custody', 'Analysis Tools'],
            color: 'purple'
        },
        {
            icon: Zap,
            title: 'SOC Operations',
            description: 'Real-world security operations center management',
            skills: ['24/7 Monitoring', 'Alert Triage', 'Shift Handover'],
            color: 'yellow'
        },
        {
            icon: Award,
            title: 'Incident Response',
            description: 'Structured approach to handling security incidents',
            skills: ['NIST Framework', 'CSIRT', 'Communication'],
            color: 'indigo'
        }
    ];

    const benefits = [
        'Become a certified SOC Analyst',
        'Hands-on experience with real tools',
        'Industry-recognized certification prep',
        'Career guidance and placement support',
        'Lifetime access to course materials',
        '24/7 community support'
    ];

    const relatedCourses = [
        { title: 'Offensive Security Professional', page: 'offensive-security', icon: Target, color: 'red' },
        { title: 'Defensive Security Professional (Advanced)', page: 'defensive-security', icon: Shield, color: 'green' },
        { title: 'Multi-Cloud DevOps', page: 'multi-cloud-devops', icon: Users, color: 'purple' }
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
                            { label: 'Defensive Security Professional' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-sky-500 to-blue-600">
                            <Shield className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Defensive Security Professional</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Master the art of cybersecurity defense. Learn to protect organizations from cyber threats through comprehensive SOC operations and incident response training.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-rose-300">{getFeeDisplay('Defensive Security Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Defensive Security Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-500/90 hover:to-orange-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-200/90">SIEM &amp; Log Analysis</span>
                            <span className="chip bg-rose-500/20 text-rose-200/90">Threat Hunting</span>
                            <span className="chip bg-emerald-500/20 text-emerald-200/90">SOC Operations</span>
                            <span className="chip bg-violet-500/20 text-violet-200/90">Digital Forensics</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Core capabilities across blue-team operations</p>
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

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-sky-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Analysts Choose This Track</h3>
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
                            <div className="flex items-center gap-3 text-sky-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-sky-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Duration</span>
                                    <span className="text-base font-semibold">8 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Users className="h-7 w-7 text-sky-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Mode</span>
                                    <span className="text-base font-semibold">Live Cohort</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Target className="h-7 w-7 text-sky-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Level</span>
                                    <span className="text-base font-semibold">Intermediate</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-sky-300" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">Certification</span>
                                    <span className="text-base font-semibold">CompTIA CySA+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Start Your SOC Career?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Join our next batch, collaborate with industry mentors, and build an operational playbook that keeps organizations resilient.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-rose-300">{getFeeDisplay('Defensive Security Professional')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Defensive Security Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-500/90 hover:to-orange-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <button
                                onClick={() => onNavigate('batches')}
                                className="glass-button flex items-center justify-center gap-2"
                            >
                                <Calendar className="h-5 w-5" />
                                View Batches
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="glass-button flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Free Consultation
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="glass-button flex items-center justify-center gap-2"
                            >
                                <Download className="h-5 w-5" />
                                Download Syllabus
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Tracks</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Plan your next skill leap</p>
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