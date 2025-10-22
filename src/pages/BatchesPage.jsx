import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, Star, Award, BookOpen, Search, Zap } from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import SectionTitle from '@/components/SectionTitle';
import {
    getPriceNumber,
    isDiwaliPeriod,
    formatRupee,
    getOriginalPriceDisplay,
    getStandardPriceNumber,
    getDiwaliPriceNumber,
    isCourseDiwaliEligible
} from '../utils/pricing';

export default function BatchesPage({ onNavigate }) {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    // Use shared helper to determine Diwali period
    const isDiwali = isDiwaliPeriod();

    const upcomingBatches = [
        {
            program: 'Defensive Security Professional',
            startDate: 'October 25, 2025',
            duration: '8 Weeks',
            schedule: 'Mon, Wed, Fri - 7:00 PM IST',
            mode: 'Online Live',
            seats: 30,
            available: 12,
            features: ['Live Sessions', 'Hands-on Labs', '24/7 Support', 'Certification Prep'],
            category: 'cybersecurity',
            level: 'intermediate',
            popular: true
        },
        {
            program: 'Multi-Cloud DevOps Professional',
            startDate: 'October 25, 2025',
            duration: '12 Weeks',
            schedule: 'Mon-Fri - 5:00 PM IST',
            mode: 'Online Live',
            seats: 20,
            available: 15,
            features: ['Live Sessions', 'Cloud Labs', '24/7 Support', 'Multi-Cloud Cert'],
            category: 'devops',
            level: 'advanced',
            popular: true
        },
        {
            program: 'Programming with DSA',
            startDate: 'October 25, 2025',
            duration: '12 Weeks',
            schedule: 'Mon-Fri - 8:00 AM IST',
            mode: 'Online Live',
            seats: 35,
            available: 25,
            features: ['Live Sessions', 'Problem Solving', '24/7 Support', 'Interview Prep'],
            category: 'development',
            level: 'beginner',
            popular: true
        }
    ].map((batch) => {
        const priceNum = getPriceNumber(batch.program);
        const standardNum = getStandardPriceNumber();
        const diwaliNum = getDiwaliPriceNumber();
        const originalDisplay = getOriginalPriceDisplay();
        const originalNum = Number(originalDisplay.replace(/[^0-9]/g, ''));
        const eligibleForDiwali = isCourseDiwaliEligible(batch.program);

        let mainPriceNum = priceNum;
        let strikePriceNum = originalNum;
        let showDiwaliPricing = false;

        if (isDiwali && eligibleForDiwali) {
            mainPriceNum = diwaliNum;
            strikePriceNum = standardNum;
            showDiwaliPricing = true;
        }

        const savingsNum = Math.max(strikePriceNum - mainPriceNum, 0);

        return {
            ...batch,
            mainPrice: formatRupee(mainPriceNum),
            strikePrice: formatRupee(strikePriceNum),
            savingsDisplay: formatRupee(savingsNum),
            showDiwaliPricing,
            diwaliEligible: eligibleForDiwali
        };
    });

    const filteredBatches = upcomingBatches.filter(batch => {
        const matchesFilter = filter === 'all' || batch.category === filter;
        const matchesSearch = batch.program.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const batchStats = [
        { number: '50+', label: 'Active Batches', icon: Calendar },
        { number: '2000+', label: 'Students Enrolled', icon: Users },
        { number: '95%', label: 'Completion Rate', icon: Award },
        { number: '24/7', label: 'Learning Support', icon: BookOpen }
    ];

    const categories = [
        { id: 'all', name: 'All Programs', count: upcomingBatches.length },
        { id: 'cybersecurity', name: 'Cybersecurity', count: upcomingBatches.filter((batch) => batch.category === 'cybersecurity').length },
        { id: 'devops', name: 'DevOps', count: upcomingBatches.filter((batch) => batch.category === 'devops').length },
        { id: 'development', name: 'Development', count: upcomingBatches.filter((batch) => batch.category === 'development').length }
    ];
    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Upcoming Batches' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt">
                        <div className="absolute -top-20 right-20 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600">
                            <Calendar className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Upcoming Batches</SectionTitle>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200/85">
                            Secure your seat in our next cohort. Pick schedules that fit, invest in mentor-led learning, and accelerate your career outcomes.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-teal-500/20 text-teal-100/85">Live Online</span>
                            <span className="chip bg-cyan-500/20 text-cyan-100/85">Expert Mentors</span>
                            <span className="chip bg-emerald-500/20 text-emerald-100/85">Limited Seats</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Learning At A Glance</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Momentum across cohorts</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {batchStats.map((stat) => (
                            <div key={stat.label} className="glass-card p-6 text-center">
                                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-3xl font-semibold text-white">{stat.number}</div>
                                <div className="mt-2 text-sm text-slate-200/75">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean allow-overflow">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="glass-panel p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setFilter(category.id)}
                                        className={`glass-chip text-sm ${
                                            filter === category.id
                                                ? 'bg-teal-500/30 text-white'
                                                : 'text-slate-200/80 hover:bg-teal-500/10'
                                        }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full max-w-xs">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300/70" />
                                <input
                                    type="text"
                                    placeholder="Search programs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="glass-input w-full rounded-xl border border-transparent bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder:text-slate-300/60 focus:border-teal-400/60 focus:outline-none focus:ring-1 focus:ring-teal-400/40"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 text-center">
                        <h3 className="text-3xl font-semibold text-white">Available Batches</h3>
                        <p className="mt-3 text-sm text-slate-200/75">
                            Pick a cohort that aligns with your timing and learning goals.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-2" style={{overflow: 'visible', clipPath: 'none', zIndex: 10, position: 'relative', paddingBottom: '2rem'}}>
                        {filteredBatches.map((batch) => (
                            <div
                                key={batch.program}
                                className={`glass-card border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                    batch.popular ? 'border-teal-400/40' : 'border-slate-500/20'
                                }`}
                            >
                                {batch.popular && (
                                    <span className="glass-chip mb-4 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                                        🔥 Popular Choice
                                    </span>
                                )}
                                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{batch.program}</h4>
                                        <div className="mt-2 inline-flex items-center gap-2 text-sm text-teal-200">
                                            <Calendar className="h-4 w-4" />
                                            Starts {batch.startDate}
                                        </div>
                                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-200/70">
                                            <span
                                                className={`glass-chip ${
                                                    batch.level === 'beginner'
                                                        ? 'bg-emerald-500/20 text-emerald-100'
                                                        : batch.level === 'intermediate'
                                                            ? 'bg-amber-500/20 text-amber-100'
                                                            : 'bg-rose-500/20 text-rose-100'
                                                }`}
                                            >
                                                {batch.level}
                                            </span>
                                            <span className="glass-chip bg-slate-500/20 text-slate-100">{batch.category}</span>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-slate-200/70">
                                        <div className={`text-2xl font-semibold ${batch.showDiwaliPricing ? 'text-orange-200' : 'text-white'}`}>
                                            {batch.mainPrice}
                                        </div>
                                        <div className="mt-1 line-through text-xs text-slate-400">{batch.strikePrice}</div>
                                        <div className={`text-xs ${batch.showDiwaliPricing ? 'text-orange-200' : 'text-emerald-200'}`}>
                                            {batch.showDiwaliPricing ? 'Diwali Special • Save ' : 'You Save '}
                                            {batch.savingsDisplay}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 text-sm text-slate-200/80 md:grid-cols-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-teal-200" />
                                        {batch.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-cyan-200" />
                                        {batch.mode}
                                    </div>
                                </div>

                                <div className="mt-4 text-sm text-slate-200/80">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Schedule</p>
                                    <p className="mt-1 font-semibold text-white/90">{batch.schedule}</p>
                                </div>

                                <div className="mt-6">
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Includes</p>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                        {batch.features.map((feature) => (
                                            <span key={feature} className="glass-chip flex items-center gap-1 bg-slate-500/20 text-slate-100">
                                                <CheckCircle className="h-3 w-3 text-emerald-200" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between text-xs text-slate-200/75">
                                    <span
                                        className={
                                            batch.available > 15
                                                ? 'text-emerald-200'
                                                : batch.available > 8
                                                    ? 'text-amber-200'
                                                    : 'text-rose-200'
                                        }
                                    >
                                        {batch.available} seats left
                                    </span>
                                    <span>Total capacity {batch.seats}</span>
                                </div>

                                <button
                                    onClick={() => {
                                        localStorage.setItem('selectedCourse', batch.program);
                                        onNavigate('enroll');
                                    }}
                                    className="glass-button mt-6 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-500/90 hover:to-cyan-500/90"
                                >
                                    <Zap className="h-4 w-4" />
                                    Enroll Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-emerald">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h3 className="text-3xl font-semibold text-white">Simple Enrollment Process</h3>
                        <p className="mt-3 text-sm text-slate-100/80">Kickstart in three straightforward steps.</p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                step: '1',
                                title: 'Choose Your Batch',
                                copy: 'Select the cohort that aligns with your goals and preferred schedule.'
                            },
                            {
                                step: '2',
                                title: 'Complete Registration',
                                copy: 'Submit the enrollment form, confirm payment, and unlock your learner dashboard.'
                            },
                            {
                                step: '3',
                                title: 'Start Learning',
                                copy: 'Join live sessions, access resources, and engage with mentors immediately.'
                            }
                        ].map((item) => (
                            <div key={item.step} className="glass-panel p-8 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-lg font-semibold text-white">
                                    {item.step}
                                </div>
                                <h4 className="mt-5 text-lg font-semibold text-white">{item.title}</h4>
                                <p className="mt-3 text-sm leading-relaxed text-slate-100/80">{item.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready To Start Your Journey?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Seats fill fast for high-demand cohorts. Enroll now or speak with our advisors to find the perfect path.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-slate-200/85 md:flex-row">
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'General Enrollment');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-500/90 hover:to-cyan-500/90"
                            >
                                Enroll Now
                            </button>
                            <button onClick={() => onNavigate('contact')} className="glass-button text-teal-200 hover:bg-teal-500/10">
                                Get Free Consultation
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-100/70">
                            <span className="inline-flex items-center gap-2">
                                <Star className="h-4 w-4 text-amber-300" />
                                4.9/5 Rating
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Users className="h-4 w-4 text-sky-200" />
                                2000+ Students
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Award className="h-4 w-4 text-emerald-200" />
                                Certified Programs
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}