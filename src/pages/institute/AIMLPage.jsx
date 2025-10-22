import React from 'react';
import { Brain, Cpu, Database, Award, Clock, CheckCircle, Zap, Target, Users, BookOpen, Star, TrendingUp, Calendar, Download, ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function AIMLPage({ onNavigate }) {
    const features = [
        {
            icon: Brain,
            title: 'Machine Learning Algorithms',
            description: 'Master supervised and unsupervised learning workflows with industry datasets.',
            skills: ['Regression', 'Classification', 'Clustering'],
            color: 'rose'
        },
        {
            icon: Cpu,
            title: 'Deep Learning & Neural Networks',
            description: 'Design and train neural architectures that power modern AI products.',
            skills: ['CNN', 'RNN', 'Transformers'],
            color: 'violet'
        },
        {
            icon: Database,
            title: 'Computer Vision & NLP',
            description: 'Ship perception systems across imaging, speech, and language tasks.',
            skills: ['OpenCV', 'BERT', 'GPT'],
            color: 'sky'
        },
        {
            icon: Zap,
            title: 'TensorFlow & PyTorch',
            description: 'Work fluently with leading deep learning frameworks for production scale.',
            skills: ['TensorFlow', 'PyTorch', 'Keras'],
            color: 'amber'
        },
        {
            icon: Target,
            title: 'Model Deployment & MLOps',
            description: 'Operationalize models with CI/CD, containerization, and monitoring.',
            skills: ['Docker', 'Kubernetes', 'MLflow'],
            color: 'emerald'
        },
        {
            icon: Award,
            title: 'Responsible AI & Governance',
            description: 'Embed fairness, transparency, and compliance into every ML workflow.',
            skills: ['Bias Checks', 'AI Ethics', 'Privacy'],
            color: 'purple'
        }
    ];

    const benefits = [
        'Complete AI/ML stack from fundamentals through deployment readiness.',
        'Mentor-led labs featuring TensorFlow, PyTorch, and MLOps tooling.',
        'Portfolio of 10+ capstone projects spanning CV, NLP, and forecasting.',
        'Career guidance, mock interviews, and referrals with hiring partners.',
        'Lifetime access to updated courseware and community forums.',
        'Round-the-clock technical support across cohorts and alumni batches.'
    ];

    const overviewCards = [
        { icon: Clock, label: 'Duration', value: '18 Weeks', detail: 'Immersive Learning' },
        { icon: Database, label: 'Mode', value: 'Online Live', detail: 'Mentor-Led Sessions' },
        { icon: Award, label: 'Projects', value: '10+ Builds', detail: 'Portfolio Ready' }
    ];

    const relatedCourses = [
        { title: 'Data Science Professional', path: 'data-science', icon: TrendingUp, color: 'sky' },
        { title: 'Multi-Cloud DevOps Professional', path: 'multi-cloud-devops', icon: Database, color: 'emerald' },
        { title: 'Full Stack Development Professional', path: 'full-stack-dev', icon: BookOpen, color: 'violet' }
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
                            { label: 'AI & ML Professional' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_65%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-rose-500 via-violet-500 to-sky-500">
                            <Brain className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>AI &amp; ML Professional</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Build intelligent systems and predictive models across computer vision, natural language, and forecasting. Work with enterprise datasets, iterate on experiments, and deploy production-grade AI services.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-rose-200">{getFeeDisplay('AI & ML Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'AI & ML Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-sky-500 text-white hover:from-rose-500/90 hover:to-sky-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-rose-500/20 text-rose-200/85">18 Week Cohort</span>
                            <span className="chip bg-violet-500/20 text-violet-200/85">Live Mentor Sessions</span>
                            <span className="chip bg-emerald-500/20 text-emerald-200/85">10+ Portfolio Projects</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Applied AI disciplines and tooling</p>
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

            <section className="theme-section surface-indigo">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-violet-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Engineers Choose This Track</h3>
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
                            <div className="flex items-center gap-3 text-violet-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid gap-6 md:grid-cols-3">
                                {overviewCards.map((card) => (
                                    <div key={card.label} className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                        <card.icon className="h-7 w-7 text-violet-200" />
                                        <span className="text-xs uppercase tracking-[0.25em] text-slate-300/80">{card.label}</span>
                                        <span className="text-base font-semibold">{card.value}</span>
                                        <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400/80">{card.detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Launch Your AI Journey?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Join thousands of professionals who accelerated their careers with Agnidhra. Limited seats available for the next mentor-led cohort.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-rose-200">{getFeeDisplay('AI & ML Professional')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'AI & ML Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-rose-500 to-sky-500 text-white hover:from-rose-500/90 hover:to-sky-500/90"
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
                                <Users className="h-5 w-5" />
                                Speak to Mentor
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <Download className="h-5 w-5" />
                                Download Syllabus
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-300/70">
                            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" />4.9/5 Rating</span>
                            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-sky-300" />5000+ Students</span>
                            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-emerald-300" />Certified Program</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Programs</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Expand your engineering stack</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedCourses.map((course) => (
                            <div
                                key={course.title}
                                className="group glass-card cursor-pointer p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                                onClick={() => onNavigate(course.path)}
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