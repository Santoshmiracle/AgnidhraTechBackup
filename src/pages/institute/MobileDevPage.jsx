import React from 'react';
import { Smartphone, Code, Globe, Award, Clock, CheckCircle, ChevronRight, Calendar, MessageCircle, Download, Server, BrainCircuit, Zap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';

export default function MobileDevPage({ onNavigate }) {
    const features = [
        {
            icon: Code,
            title: 'Native iOS Development',
            description: "Build native iOS apps using Swift and SwiftUI with Apple's latest frameworks",
            skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
            color: 'blue'
        },
        {
            icon: Code,
            title: 'Native Android Development',
            description: 'Create Android apps with Kotlin and Jetpack Compose for modern mobile experiences',
            skills: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Material Design'],
            color: 'green'
        },
        {
            icon: Globe,
            title: 'Cross-Platform Development',
            description: 'Build apps for both iOS and Android using React Native and Flutter',
            skills: ['React Native', 'Flutter', 'Dart', 'JavaScript'],
            color: 'purple'
        },
        {
            icon: Server,
            title: 'Backend Integration',
            description: 'Connect mobile apps with REST APIs and real-time services',
            skills: ['REST APIs', 'GraphQL', 'Firebase', 'WebSocket'],
            color: 'cyan'
        },
        {
            icon: BrainCircuit,
            title: 'App Store Deployment',
            description: 'Learn to publish apps on App Store and Google Play Store',
            skills: ['App Store Connect', 'Google Play Console', 'Code Signing', 'App Review'],
            color: 'orange'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Optimize app performance, memory usage, and battery consumption',
            skills: ['Profiling', 'Memory Management', 'Battery Optimization', 'Offline Support'],
            color: 'pink'
        }
    ];

    const benefits = [
        'Build apps for iOS, Android, and cross-platform',
        'Industry-standard mobile development practices',
        'Portfolio of published mobile applications',
        'App store submission and deployment guidance',
        'Lifetime access to course materials',
        '24/7 technical support and mentorship'
    ];

    const relatedCourses = [
        { title: 'Full Stack Development', page: 'full-stack-dev', icon: Code, color: 'blue' },
        { title: 'Cloud & DevOps Professional', page: 'cloud-devops', icon: Server, color: 'green' },
        { title: 'Programming with DSA', page: 'programming-with-dsa', icon: BrainCircuit, color: 'purple' }
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
                            { label: 'Mobile Development' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 right-20 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-fuchsia-500 via-purple-500 to-rose-500">
                            <Smartphone className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Mobile Development</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Architect native and cross-platform apps, integrate real-time services, and ship polished experiences to the App Store and Google Play.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-pink-200">{getFeeDisplay('Mobile Development')}</span>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'Mobile Development');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white hover:from-fuchsia-500/90 hover:to-purple-500/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-blue-500/20 text-blue-100/85">React Native</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/85">Flutter</span>
                            <span className="chip bg-violet-500/20 text-violet-100/85">Swift</span>
                            <span className="chip bg-amber-500/20 text-amber-100/85">Kotlin</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">What You&apos;ll Master</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Crafting mobile product journeys</p>
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

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-rose-200/90">
                                <Award className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Benefits</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Why Builders Pick This Track</h3>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 text-rose-300" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8 md:p-10">
                            <div className="flex items-center gap-3 text-rose-200/90">
                                <Clock className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Program Snapshot</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Training Overview</h3>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Clock className="h-7 w-7 text-rose-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Duration</span>
                                    <span className="text-base font-semibold">14 Weeks</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Smartphone className="h-7 w-7 text-rose-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Mode</span>
                                    <span className="text-base font-semibold">Live Online</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Award className="h-7 w-7 text-rose-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Projects</span>
                                    <span className="text-base font-semibold">4+ Apps</span>
                                </div>
                                <div className="glass-chip flex flex-col items-center gap-2 text-center text-white/90">
                                    <Globe className="h-7 w-7 text-rose-200" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Level</span>
                                    <span className="text-base font-semibold">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Build Mobile Apps?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Prototype swiftly, polish performance, and launch feature-rich apps guided by engineers who ship mobile products daily.
                        </p>
                        <div className="mt-6 grid gap-4 text-sm text-slate-200/85 md:grid-cols-3">
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

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-semibold text-white">Explore Related Courses</h3>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Next steps for builders</p>
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