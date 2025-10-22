import React from 'react';
import { Database, Code, Globe, Award, Clock, CheckCircle, ChevronRight, Calendar, MessageCircle, Download, Server, BrainCircuit, Zap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function DatabaseManagementPage({ onNavigate }) {
    const features = [
        {
            icon: Database,
            title: 'SQL Fundamentals',
            description: 'Master SQL queries, joins, subqueries, and database manipulation',
            skills: ['SELECT Queries', 'JOINs', 'Aggregations', 'Subqueries'],
            color: 'blue'
        },
        {
            icon: Server,
            title: 'MySQL Database',
            description: 'Learn MySQL database design, administration, and optimization',
            skills: ['Database Design', 'Indexing', 'Stored Procedures', 'Triggers'],
            color: 'green'
        },
        {
            icon: BrainCircuit,
            title: 'PostgreSQL',
            description: 'Advanced database concepts with PostgreSQL and enterprise features',
            skills: ['Advanced SQL', 'JSON Support', 'Full-text Search', 'Extensions'],
            color: 'purple'
        },
        {
            icon: Zap,
            title: 'NoSQL Databases',
            description: 'Explore MongoDB and document-based database systems',
            skills: ['MongoDB', 'Document Model', 'Aggregation', 'Indexing'],
            color: 'cyan'
        },
        {
            icon: Code,
            title: 'Database Security',
            description: 'Learn database security, backup, and disaster recovery',
            skills: ['Access Control', 'Encryption', 'Backup Strategies', 'Auditing'],
            color: 'orange'
        },
        {
            icon: Globe,
            title: 'Performance Tuning',
            description: 'Optimize database performance and query execution',
            skills: ['Query Optimization', 'Profiling', 'Monitoring', 'Scaling'],
            color: 'pink'
        }
    ];

    const benefits = [
        'Comprehensive knowledge of SQL and database systems',
        'Hands-on experience with popular RDBMS and NoSQL databases',
        'Database design and optimization skills for real-world applications',
        'Career opportunities in database administration and development',
        'Lifetime access to database resources and practice environments',
        '24/7 support for database-related queries and projects'
    ];

    const relatedCourses = [
        { title: 'Full Stack Development', page: 'full-stack-dev', icon: Code, color: 'blue' },
    { title: 'AI & ML', page: 'ai-data-science', icon: BrainCircuit, color: 'green' },
        { title: 'Cloud & DevOps', page: 'cloud-devops', icon: Server, color: 'purple' }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="institute"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Institute' },
                            { label: 'Database Management & SQL' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 right-24 h-32 w-32 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.16),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500">
                            <Database className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Database Management &amp; SQL</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Design resilient schemas, optimize queries, and secure mission-critical data platforms across SQL and NoSQL ecosystems.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-emerald-200">{getFeeDisplay('Database Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Database Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-emerald-500 to-lime-500 text-white hover:from-emerald-500/90 hover:to-lime-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-100/85">SQL</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/85">MySQL</span>
                            <span className="chip bg-violet-500/20 text-violet-100/85">PostgreSQL</span>
                            <span className="chip bg-orange-500/20 text-orange-100/85">MongoDB</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Modern data platform engineering</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                            <div className="flex items-center gap-3 text-emerald-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Administrators Pick This Track</h3>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 text-emerald-300" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-emerald-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-emerald-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Duration</span>
                                    <span className="text-base font-semibold">10 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Database className="h-7 w-7 text-emerald-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Mode</span>
                                    <span className="text-base font-semibold">Live Online</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-emerald-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Projects</span>
                                    <span className="text-base font-semibold">8+ Builds</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Globe className="h-7 w-7 text-emerald-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Level</span>
                                    <span className="text-base font-semibold">Beginner → Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-emerald">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Master Database Management</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Move from SQL fundamentals to production-grade database operations with mentorship from seasoned DBAs.
                        </p>
                        <div className="mt-6 grid gap-4 text-sm text-slate-200/85 md:grid-cols-3">
                            <button onClick={() => onNavigate('batches')} className="glass-button flex items-center justify-center gap-2">
                                <Calendar className="h-5 w-5" />
                                View Batches
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Database Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-emerald-500 to-lime-500 text-white hover:from-emerald-500/90 hover:to-lime-500/90"
                            >
                                Book Consultation
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
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
                        <h3 className="text-2xl font-semibold text-white">Explore Related Courses</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Broaden your engineering stack</p>
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