import React from 'react';
import { Users, GraduationCap, BookOpen, IndianRupee, CheckCircle, Calendar, MessageCircle, Download, Award, Globe, Shield, Mail, Phone, Briefcase, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';

export default function CollegeTrainingPage({ onNavigate }) {
    const features = [
        {
            icon: GraduationCap,
            title: 'Customized Curriculum',
            description: 'Tailored training programs designed specifically for your college\'s requirements and student needs',
            skills: ['Curriculum Design', 'Academic Alignment', 'Industry Standards', 'Flexible Scheduling'],
            color: 'purple'
        },
        {
            icon: Users,
            title: 'Batch Size Optimization',
            description: 'Competitive pricing that decreases with larger student batches, making quality education accessible',
            skills: ['Cost Optimization', 'Group Learning', 'Resource Management', 'Scalable Solutions'],
            color: 'green'
        },
        {
            icon: Briefcase,
            title: 'Job Oriented Training',
            description: 'Courses focused on employability, interview preparation, and placement support for students',
            skills: ['Resume Building', 'Interview Prep', 'Placement Drives', 'Career Counseling'],
            color: 'blue'
        },
        {
            icon: Sparkles,
            title: 'Soft Skills Development',
            description: 'Enhance communication, teamwork, leadership, and professional etiquette for holistic growth',
            skills: ['Communication', 'Teamwork', 'Leadership', 'Professional Etiquette'],
            color: 'yellow'
        },
        {
            icon: Award,
            title: 'Industry Recognition',
            description: 'Programs designed with input from industry experts and aligned with current market demands',
            skills: ['Industry Experts', 'Market Alignment', 'Career Guidance', 'Placement Support'],
            color: 'orange'
        },
        {
            icon: Globe,
            title: 'Practical Learning',
            description: 'Hands-on projects, real-world scenarios, and live industry case studies for comprehensive learning',
            skills: ['Live Projects', 'Case Studies', 'Practical Training', 'Industry Exposure'],
            color: 'pink'
        }
    ];

    const benefits = [
        'Customized curriculum tailored to your college\'s requirements',
        'Flexible scheduling to fit academic calendars',
        'Industry-expert instructors with real-world experience',
        'Hands-on practical training with live projects',
        'Certification upon completion',
        'Competitive pricing based on student batch size'
    ];

    const pricingTiers = [
        { students: '50', price: '₹1,000', color: 'blue' },
        { students: '100', price: '₹500', color: 'green' },
        { students: '200', price: '₹300', color: 'purple' }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'College Training' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-24 right-24 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600">
                            <GraduationCap className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>College Training Programs</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Deliver industry-grade skill tracks on campus. We tailor curricula, instructors, and delivery models to match your academic calendar and student goals.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-100/85">Customized</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/85">Affordable</span>
                            <span className="chip bg-violet-500/20 text-violet-100/85">Industry Focused</span>
                            <span className="chip bg-amber-500/20 text-amber-100/85">Hands-on</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Why Institutions Partner With Us</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Tailored enablement for campuses</p>
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
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Flagship Academies</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Cybersecurity &amp; emerging tech</p>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="glass-panel p-8">
                            <div className="flex items-center gap-4">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500">
                                    <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Cybersecurity Academy</h3>
                            </div>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {['Defensive Security', 'Offensive Security', 'Specialized Add-ons'].map((course) => (
                                    <li key={course} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-emerald-300" />
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-8">
                            <div className="flex items-center gap-4">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Technology Institute</h3>
                            </div>
                            <ul className="mt-6 space-y-3 text-sm text-slate-100/85">
                                {['Full Stack Development', 'Multi-Cloud DevOps', 'AI & ML', 'Database Management & SQL', 'Mobile Development', 'Programming with DSA'].map((course) => (
                                    <li key={course} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-emerald-300" />
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                            <h3 className="mt-4 text-2xl font-semibold text-white">Designed for academic impact</h3>
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
                                <IndianRupee className="h-6 w-6" />
                                <span className="text-xs uppercase tracking-[0.35em]">Flexible Pricing</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Scale training, not cost</h3>
                            <div className="mt-6 space-y-4 text-sm text-slate-100/85">
                                {pricingTiers.map((tier) => (
                                    <div key={tier.students} className="glass-card flex items-center justify-between p-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Batch Size</p>
                                            <span className="text-lg font-semibold text-white">{tier.students} students</span>
                                        </div>
                                        <span className={`text-2xl font-bold text-${tier.color}-200`}>{tier.price}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-center text-xs text-slate-100/70">* Indicative pricing. We customize per campus requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready to Transform Your College?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Partner with us for end-to-end execution—curriculum design, delivery, labs, and placement enablement tailored for your students.
                        </p>
                        <div className="mt-6 grid gap-4 text-sm text-slate-200/85 md:grid-cols-3">
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                Get Custom Quote
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Schedule Call
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <Download className="h-5 w-5" />
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="glass-panel p-8 text-center md:p-10">
                        <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
                        <p className="mt-3 text-sm text-slate-200/80">
                            Speak with our academic partnerships team for tailored proposals and calendar alignment.
                        </p>
                        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-center">
                            <div className="glass-chip flex items-center gap-2 text-sky-100">
                                <Mail className="h-5 w-5" />
                                agnidhra.trainings@gmail.com
                            </div>
                            <div className="glass-chip flex items-center gap-2 text-sky-100">
                                <Phone className="h-5 w-5" />
                                +91-7331123651
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}