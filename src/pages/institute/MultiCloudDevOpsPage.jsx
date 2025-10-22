import React from 'react';
import { Cloud, Server, GitBranch, Award, Clock, CheckCircle, Zap, Shield, Database, Target, Users, BookOpen, Star, Settings, ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function MultiCloudDevOpsPage({ onNavigate }) {
    const features = [
        {
            icon: Cloud,
            title: 'AWS, Azure & GCP Cloud Platforms',
            description: 'Master all major cloud platforms and their services',
            skills: ['AWS', 'Azure', 'GCP']
        },
        {
            icon: Settings,
            title: 'Infrastructure as Code (Terraform)',
            description: 'Automate infrastructure provisioning and management',
            skills: ['Terraform', 'CloudFormation', 'ARM Templates']
        },
        {
            icon: GitBranch,
            title: 'CI/CD Pipeline Implementation',
            description: 'Build automated deployment pipelines for applications',
            skills: ['Jenkins', 'GitLab CI', 'GitHub Actions']
        },
        {
            icon: Server,
            title: 'Container Orchestration (Kubernetes)',
            description: 'Deploy and manage containerized applications at scale',
            skills: ['Kubernetes', 'Docker', 'Helm']
        },
        {
            icon: Shield,
            title: 'Monitoring & Logging Solutions',
            description: 'Implement comprehensive monitoring and observability',
            skills: ['Prometheus', 'Grafana', 'ELK Stack']
        },
        {
            icon: Target,
            title: 'Security Best Practices',
            description: 'Secure cloud infrastructure and applications',
            skills: ['DevSecOps', 'Compliance', 'Security Tools']
        }
    ];

    const benefits = [
        'Multi-cloud expertise across AWS, Azure, and GCP platforms',
        'Industry-standard DevOps tools mastery with hands-on experience',
        'Real-world project-based learning with production deployments',
        'Career transition support for IT professionals and freshers',
        'Lifetime access to cloud resources and lab environments',
        '24/7 technical support and access to DevOps community'
    ];

    const relatedCourses = [
        { name: 'Multi-Cloud DevOps', path: 'multi-cloud-devops', icon: Cloud },
        { name: 'AI & ML', path: 'ai-data-science', icon: Database },
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
                            { label: 'Multi-Cloud DevOps Professional' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 right-16 h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600">
                            <Cloud className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Multi-Cloud DevOps Professional</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Build production-grade delivery pipelines across AWS, Azure, and GCP. Automate infrastructure, secure workloads, and operate resilient cloud platforms.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-cyan-200">{getFeeDisplay('Multi-Cloud DevOps Professional')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Multi-Cloud DevOps Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-500/90 hover:to-blue-600/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-cyan-500/20 text-cyan-100/85">AWS</span>
                            <span className="chip bg-blue-500/20 text-blue-100/85">Azure</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/85">GCP</span>
                            <span className="chip bg-indigo-500/20 text-indigo-100/85">Kubernetes</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">DevOps lifecycle across clouds</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
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

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-cyan-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Engineers Choose This Track</h3>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 text-cyan-300" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-cyan-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-cyan-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Duration</span>
                                    <span className="text-base font-semibold">12 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <GitBranch className="h-7 w-7 text-cyan-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Mode</span>
                                    <span className="text-base font-semibold">Live Online</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-cyan-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Certification</span>
                                    <span className="text-base font-semibold">AWS / Azure / GCP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Become a DevOps Engineer?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Launch, monitor, and evolve multi-cloud workloads with confidence. Join a mentor-led cohort and accelerate your DevOps career.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/85">
                            <span className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-cyan-200">{getFeeDisplay('Multi-Cloud DevOps Professional')}</span>
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Multi-Cloud DevOps Professional');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-500/90 hover:to-blue-600/90"
                            >
                                Enroll Now
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button text-cyan-200 hover:bg-cyan-500/10">
                                Chat With Us
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200/70">
                            <div className="inline-flex items-center gap-2">
                                <Star className="h-4 w-4 text-amber-300" />
                                4.9/5 Rating
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Users className="h-4 w-4 text-cyan-200" />
                                5000+ Learners
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Shield className="h-4 w-4 text-cyan-200" />
                                Enterprise Ready
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Programs</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Skilling pathways</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedCourses.map((course) => (
                            <div
                                key={course.name}
                                className="group glass-card cursor-pointer p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                                onClick={() => onNavigate(course.path)}
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
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