import React from 'react';
import { BarChart3, Brain, Database, Award, Clock, CheckCircle, TrendingUp, PieChart, Zap, Target, Users, BookOpen, Star, ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function DataSciencePage({ onNavigate }) {
    const features = [
        {
            icon: Brain,
            title: 'Python for Data Science',
            description: 'Master Python libraries for data manipulation and analysis',
            skills: ['Pandas', 'NumPy', 'Scikit-learn']
        },
        {
            icon: TrendingUp,
            title: 'Statistical Analysis & Machine Learning',
            description: 'Apply statistical methods and ML algorithms to real data',
            skills: ['Regression', 'Classification', 'Time Series']
        },
        {
            icon: PieChart,
            title: 'Data Visualization (Tableau, Power BI)',
            description: 'Create compelling visualizations and dashboards',
            skills: ['Tableau', 'Power BI', 'Matplotlib']
        },
        {
            icon: Database,
            title: 'Big Data Technologies (Hadoop, Spark)',
            description: 'Process and analyze large-scale datasets',
            skills: ['Hadoop', 'Spark', 'Hive']
        },
        {
            icon: Zap,
            title: 'Deep Learning & Neural Networks',
            description: 'Build predictive models with neural networks',
            skills: ['TensorFlow', 'Keras', 'Neural Networks']
        },
        {
            icon: Target,
            title: 'Data Engineering & ETL',
            description: 'Design data pipelines and ETL processes',
            skills: ['ETL', 'Data Warehousing', 'SQL']
        }
    ];

    const benefits = [
        'Complete data science skill set from basics to advanced analytics',
        'Industry-standard tools and techniques used by top companies',
        'Real-world data projects portfolio with 8+ comprehensive analyses',
        'Career guidance and placement support with data-driven companies',
        'Lifetime access to course materials and dataset libraries',
        '24/7 technical support and access to data science community'
    ];

    const relatedCourses = [
        { name: 'AI & ML', path: 'ai-data-science', icon: Brain },
        { name: 'Multi-Cloud DevOps', path: 'multi-cloud-devops', icon: Database },
        { name: 'Full Stack Development', path: 'full-stack-dev', icon: BookOpen }
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
                            { label: 'Data Science & Analytics' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 right-16 h-32 w-32 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-sky-500 via-emerald-500 to-blue-600">
                            <BarChart3 className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Data Science Professional</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Transform data into action. Build analytics foundations, machine learning expertise, and visualization mastery that empower business intelligence and product decisions.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-sky-200">{getFeeDisplay('Data Science Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Data Science Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:from-sky-500/90 hover:to-emerald-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-100/90">14 Weeks</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/90">Live Cohort</span>
                            <span className="chip bg-blue-500/20 text-blue-100/90">8+ Projects</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Analytics pipeline end to end</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-200/75">{feature.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                                    {feature.skills.map((skill) => (
                                        <span key={skill} className="chip bg-slate-500/20 text-slate-100/85">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-emerald">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-emerald-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Analysts Choose This Track</h3>
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
                                    <span className="text-base font-semibold">14 Weeks</span>
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
                                    <Target className="h-7 w-7 text-emerald-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Level</span>
                                    <span className="text-base font-semibold">Beginner → Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Become a Data Scientist?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Join a cohort of analysts building measurable impact with predictive models, dashboards, and experimentation frameworks.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-sky-200">{getFeeDisplay('Data Science Professional')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Data Science & Analytics');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-500/90 hover:to-blue-600/90"
                            >
                                Enroll Now
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="glass-button text-sky-200 hover:bg-sky-500/10"
                            >
                                Schedule Consultation
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200/70">
                            <div className="inline-flex items-center gap-2">
                                <Star className="h-4 w-4 text-amber-300" />
                                4.9/5 Rating
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Users className="h-4 w-4 text-sky-200" />
                                5000+ Learners
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Award className="h-4 w-4 text-emerald-200" />
                                Certified Program
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Programs</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Extend your analytics craft</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedCourses.map((course) => (
                            <div
                                key={course.name}
                                className="group glass-card cursor-pointer p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                                onClick={() => onNavigate(course.path)}
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500">
                                    <course.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white">{course.name}</h4>
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