import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Phone, BookOpen, Send, CheckCircle, GraduationCap, Target, ChevronRight, Star, Zap, Award, Users, Clock, Shield, TrendingUp, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { getPriceNumber, getFeeDisplay, formatRupee } from '../utils/pricing';

export default function EnrollUsPage({ onNavigate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        background: '',
        goals: '',
        startDate: '',
        source: 'website'
    });
    const [submitted, setSubmitted] = useState(false);
    const [originCourse, setOriginCourse] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showPayModal, setShowPayModal] = useState(false);
    // default price after discount
    const [payAmount, setPayAmount] = useState('20000');
    const [enrollmentId, setEnrollmentId] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const generateEnrollmentId = () => {
        // Example: ENRL-123456-ABCD
        const suffix = Date.now().toString().slice(-6);
        const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
        return `ENRL-${suffix}-${rand}`;
    };

    // Use centralized pricing helper. getPriceNumber returns a Number.
    const getPriceForCourse = (course, originCourse) => {
        const n = getPriceNumber(course, originCourse);
        return String(n); // keep as string for existing UI handling (₹{payAmount})
    };

    const openPayModal = () => {
    // Give precedence to a selected addon (set by the addons page). Use stored originCourse if present.
    const storedAddon = localStorage.getItem('selectedAddon');
    const storedOrigin = localStorage.getItem('selectedCourse') || originCourse || '';
    const course = storedAddon || formData.course || storedOrigin || '';
    const amount = getPriceForCourse(course, storedOrigin);
    setPayAmount(amount);
    setEnrollmentId(generateEnrollmentId());
        setShowPayModal(true);
    };

    // Helper: detect whether stored originCourse qualifies for addon discount
    const addonDiscountApplies = () => {
        try {
            const storedOrigin = localStorage.getItem('selectedCourse') || originCourse || '';
            // detect when both an addon is being purchased and origin course matches addon eligibility
            const storedAddon = localStorage.getItem('selectedAddon');
            if (!storedAddon) return false;
            // Use getPriceNumber to see if addon would be discounted when passing storedOrigin
            const addonPriceForOrigin = getPriceNumber('Specialized Add-ons', storedOrigin);
            return Number(addonPriceForOrigin) === 5000;
        } catch (e) {
            return false;
        }
    };

    

    useEffect(() => {
        // Prefill course from origin if available
        try {
            const stored = localStorage.getItem('selectedCourse');
            if (stored) {
                setFormData(prev => ({ ...prev, course: stored }));
                setOriginCourse(stored);
                // preserve selectedCourse in localStorage for addon enrollment flows; do not remove here
            }
        } catch (e) {
            console.error('Error reading selectedCourse from localStorage', e);
        }
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic client-side validation
        const required = ['name', 'email', 'phone', 'course', 'goals'];
        const missing = required.filter((key) => !formData[key] || formData[key].toString().trim() === '');
        if (missing.length) {
            setShowAlert(true);
            return;
        }

    // Create WhatsApp message for enrollment (experience removed from form)
    const message = `*New Course Enrollment*%0A%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phone}%0A🎓 Course: ${formData.course}%0A🏢 Background: ${formData.background}%0A🎯 Goals: ${formData.goals}%0A📅 Start Date: ${formData.startDate}%0A📍 Source: ${formData.source}`;

        // WhatsApp URL
    const whatsappUrl = `https://wa.me/917331123651?text=${message}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success message and reset form
        setSubmitted(true);
        setShowAlert(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            background: '',
            goals: '',
            startDate: '',
            source: 'website'
        });
    };

    const handleNotifyPayment = async () => {
        // Prepare payload for server-side reconciliation
        const payload = {
            enrollmentId,
            transactionId,
            amount: Number(payAmount),
            // include the course the student is paying for (may be an addon)
            course: formData.course || originCourse || localStorage.getItem('selectedAddon') || 'NA',
            // include originCourse separately so server can apply addon discounts or bookkeeping
            originCourse: localStorage.getItem('selectedCourse') || originCourse || null,
            selectedAddon: localStorage.getItem('selectedAddon') || null,
            name: formData.name || 'NA',
            email: formData.email || 'NA',
            phone: formData.phone || 'NA',
            source: formData.source || 'website',
            currency: 'INR'
        };

        const env = typeof import.meta !== 'undefined' ? import.meta.env : {};
        const reconcileKey = env.VITE_RECONCILE_KEY || env.REACT_APP_RECONCILE_KEY || env.RECONCILE_KEY || '';

        try {
            // Post to Netlify function; it will store the record in Firestore
            const res = await fetch('/.netlify/functions/reconcile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-reconcile-key': reconcileKey },
                body: JSON.stringify(payload)
            });

            const ct = (res.headers.get && (res.headers.get('content-type') || '') || '').toLowerCase();

            if (!res.ok) {
                // capture raw response for debugging
                const raw = await (res.clone ? res.clone().text() : res.text());
                console.error('Reconcile endpoint returned error', res.status, raw);
                try { alert('Server reconciliation returned an error: ' + (raw && raw.slice ? raw.slice(0, 500) : raw)); } catch(e) {}
            } else if (ct.includes('application/json')) {
                try {
                    const json = await res.json();
                    if (!json || json.success === false) {
                        console.warn('Reconcile response indicates failure:', json);
                    }
                } catch (parseErr) {
                    const raw = await (res.clone ? res.clone().text() : res.text());
                    console.warn('Reconcile returned invalid JSON:', parseErr, raw);
                }
            } else {
                // non-JSON success response (possible HTML). capture for debug
                const raw = await (res.clone ? res.clone().text() : res.text());
                console.warn('Reconcile returned non-JSON response:', raw.slice ? raw.slice(0, 500) : raw);
            }
        } catch (err) {
            console.error('Failed to post reconciliation:', err);
            // proceed to open WhatsApp regardless
        }

    const msg = `Payment Notification:%0AAmount: ₹${payAmount}%0AEnrollmentID: ${enrollmentId}%0ATransactionID: ${transactionId || 'N/A'}%0AName: ${formData.name || 'NA'}%0ACourse: ${formData.course || originCourse || 'NA'}%0APlease confirm payment.`;
    const wa = `https://wa.me/917331123651?text=${encodeURIComponent(msg)}`;
        window.open(wa, '_blank');
        setShowPayModal(false);
        // clear selectedAddon after notifying payment so future enrollments are clean
        try { localStorage.removeItem('selectedAddon'); } catch (e) {}
    };

    const courseOptions = [
        'Defensive Security Professional',
        'Offensive Security Professional',
        'Cloud Security (Addon)',
        'Digital Forensics & Investigation (Addon)',
        'Malware Analysis & Reverse Engineering (Addon)',
        'GRC & Compliance (Addon)',
        'Incident Response & Threat Hunting (Addon)',
        'Red Team Operations (Addon)',
        'Full Stack Development Professional',
        'Multi-Cloud DevOps Professional',
    'AI & ML Professional',
        'Database Professional',
        'Mobile Development Professional',
        'Programming with DSA'
    ];

    

    const benefits = [
        'Free career counseling session',
        'Course roadmap personalized for you',
        'Access to exclusive study materials',
        'Priority enrollment in upcoming batches',
        'Industry mentor assignment',
        'Job placement assistance'
    ];

    const enrollmentStats = [
        { number: '2000+', label: 'Students Enrolled', icon: Users },
        { number: '95%', label: 'Success Rate', icon: Award },
        { number: '24/7', label: 'Student Support', icon: Heart },
        { number: '98%', label: 'Satisfaction Rate', icon: Star }
    ];

    const testimonials = [
        {
            name: "Rahul Kumar",
            role: "SOC Analyst at TCS",
            content: "The enrollment process was smooth and the personalized guidance helped me choose the perfect program for my career goals.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Security Consultant",
            content: "Amazing support throughout the enrollment. They understood my background and recommended the best path forward.",
            rating: 5
        }
    ];

    return (
        <div className="bg-slate-900 text-white min-h-screen">
            {/* Breadcrumb Navigation */}
            <div className="container mx-auto px-6 pt-8">
                <div className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
                    <ChevronRight size={16} />
                    <span className="text-teal-400">Enroll</span>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-12 md:pb-20">
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center text-slate-300 hover:text-slate-200 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="max-w-7xl mx-auto">
                    {/* Enhanced Hero Section */}
                    <div className="hero-card">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

                        <div className="relative z-10 text-center">
                            <div className="hero-icon bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg animate-bounce">
                                <GraduationCap className="w-10 h-10 text-white" />
                            </div>
                            <SectionTitle className="hero-title">{originCourse ? `Start Your ${originCourse} Journey` : 'Start Your Cybersecurity Journey'}</SectionTitle>
                            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                                {originCourse ? `Kickstart your ${originCourse} learning with expert instructors, real-world projects and career guidance.` : 'Take the first step towards a rewarding career in cybersecurity. Our expert counselors will guide you through personalized program recommendations and enrollment.'}
                            </p>

                            {/* Skill Badges */}
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                <span className="chip bg-teal-500/20 text-teal-300 border-teal-500/30">Personalized Guidance</span>
                                <span className="chip bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Expert Counselors</span>
                                <span className="chip bg-green-500/20 text-green-300 border-green-500/30">Career Support</span>
                                <span className="chip bg-orange-500/20 text-orange-300 border-orange-500/30">Success Oriented</span>
                            </div>
                        </div>
                    </div>
                    {/* Pay Now Modal */}
                    {showPayModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/60" onClick={() => setShowPayModal(false)}></div>
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 w-full max-w-md mx-4 border border-slate-700/50 shadow-2xl">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Pay via Paytm</h3>
                                        <p className="text-slate-400 text-sm">Scan the QR code below using your Paytm app and complete the payment.</p>
                                    </div>
                                    <button onClick={() => setShowPayModal(false)} className="text-slate-400 hover:text-white">✕</button>
                                </div>

                                <div className="mt-4 text-center">
                                    <div className="inline-block bg-gradient-to-br from-white/5 to-white/3 p-4 rounded-lg border border-slate-700/40">
                                        <img src="/paytm-qr.png" alt="Paytm QR" className="w-52 h-52 object-contain mx-auto" />
                                    </div>

                                                                <div className="mt-4">
                                                                    <div className="text-sm text-slate-400">Amount</div>
                                                                    <div className="text-2xl font-bold text-white mt-1">₹{payAmount}</div>
                                                                    <div className="text-xs text-slate-400 mt-2">Course: <span className="text-white">{formData.course || originCourse || 'General Enrollment'}</span></div>
                                                                    <div className="text-xs text-slate-400 mt-1">Enrollment ID: <span className="text-white font-mono">{enrollmentId}</span></div>
                                                                </div>
                                                                                                {/* If student is buying an addon and originCourse qualifies, show a confirmation banner */}
                                                                {addonDiscountApplies() && (
                                                                    <div className="mt-4 p-3 rounded-lg bg-emerald-900/20 border border-emerald-700 text-emerald-200">
                                                                        <div className="text-sm font-semibold">Discount detected for add-on</div>
                                                                        <div className="text-xs mt-1">You qualify for the special add-on price.</div>
                                                                        <div className="mt-2 text-sm">
                                                                            Price for add-on: <span className="font-bold">{getFeeDisplay('Specialized Add-ons', localStorage.getItem('selectedCourse') || originCourse)}</span>
                                                                            <span className="ml-3 text-slate-400 line-through">{getFeeDisplay('Specialized Add-ons')}</span>
                                                                        </div>
                                                                    </div>
                                                                )}

                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => {
                                                try { navigator.clipboard.writeText(payAmount); } catch (e) {}
                                            }}
                                            className="px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
                                        >
                                            Copy Amount
                                        </button>
                                        <button
                                            onClick={() => {
                                                try { navigator.clipboard.writeText(enrollmentId); } catch (e) {}
                                            }}
                                            className="px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
                                        >
                                            Copy Enrollment ID
                                        </button>
                                        <div className="col-span-2 mt-3">
                                            <label className="block text-xs text-slate-400 mb-2">Payment Transaction ID (from Paytm/GPay/PhonePe/Bank)</label>
                                            <input
                                                type="text"
                                                value={transactionId}
                                                onChange={(e) => setTransactionId(e.target.value)}
                                                placeholder="Enter transaction id shown in your payment app"
                                                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                                            />
                                        </div>

                                        <button
                                            onClick={() => {
                                                const msg = `Payment Notification:%0AAmount: ₹${payAmount}%0AEnrollmentID: ${enrollmentId}%0ATransactionID: ${transactionId || 'N/A'}%0AName: ${formData.name || 'NA'}%0ACourse: ${formData.course || originCourse || 'NA'}%0APlease confirm payment.`;
                                                const wa = `https://wa.me/917331123651?text=${encodeURIComponent(msg)}`;
                                                window.open(wa, '_blank');
                                                setShowPayModal(false);
                                            }}
                                            className="col-span-2 mt-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                                        >
                                            I Paid — Notify (Send IDs)
                                        </button>
                                    </div>

                                    <p className="text-xs text-slate-400 mt-4">After payment, tap "I Paid — Notify" to inform admissions and include the transaction ID so we can reconcile your payment quickly.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enrollment Stats - placed right after intro per design */}
                    <div className="mb-20">
                        <div className="grid md:grid-cols-4 gap-8">
                            {enrollmentStats.map((stat, index) => (
                                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg mb-4">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {submitted && (
                        <div className="mb-12 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                            <div className="flex items-center justify-center">
                                <CheckCircle size={32} className="text-green-400 mr-4" />
                                <div>
                                    <h3 className="text-green-300 font-semibold text-xl">Enrollment Request Submitted!</h3>
                                    <p className="text-green-100 mt-2">Our admissions team will contact you within 24 hours to discuss your personalized learning path.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        {/* Enhanced Enrollment Form */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                                    <GraduationCap size={24} className="mr-3 text-teal-400" />
                                    Enrollment Form
                                </h2>
                                <p className="text-slate-400">Tell us about yourself and we'll guide you to the perfect program</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="block w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="block w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="block w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                                placeholder="+91-7331123651"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="startDate" className="block text-sm font-medium text-slate-300 mb-2">
                                            Preferred Start Date
                                        </label>
                                        <select
                                            id="startDate"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleInputChange}
                                            className="block w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="immediate">Immediately (Next batch)</option>
                                            <option value="1month">Within 1 month</option>
                                            <option value="3months">Within 3 months</option>
                                            <option value="flexible">Flexible timing</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Course Dropdown (prefilled from origin). Placed in main form instead of separate card. */}
                                <div>
                                    <label htmlFor="course" className="block text-sm font-medium text-slate-300 mb-2">Select Course</label>
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}
                                        disabled={!!originCourse}
                                        className="block w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 mb-4 disabled:opacity-100 disabled:cursor-not-allowed"
                                    >
                                        <option value="">Select a course</option>
                                        {/* If originCourse is not one of the standard options (e.g. General Enrollment), show it as the first selectable option */}
                                        {originCourse && !courseOptions.includes(originCourse) && (
                                            <option value={originCourse}>{originCourse}</option>
                                        )}
                                        {courseOptions.map((opt, idx) => (
                                            <option key={idx} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    {originCourse && <div className="text-sm text-slate-400 mb-4">Prefilled from: <strong className="text-white">{originCourse}</strong></div>}
                                </div>

                                {/* Experience removed per UX requirement (student-focused). */}

                                {/* Background & Goals */}
                                <div>
                                    <label htmlFor="background" className="block text-sm font-medium text-slate-300 mb-2">
                                        Educational/Professional Background
                                    </label>
                                    <textarea
                                        id="background"
                                        name="background"
                                        rows={3}
                                        value={formData.background}
                                        onChange={handleInputChange}
                                        className="block w-full bg-slate-900 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                        placeholder="Tell us about your current education or work experience..."
                                    ></textarea>
                                </div>

                                <div>
                                    <label htmlFor="goals" className="block text-sm font-medium text-slate-300 mb-2">
                                        Career Goals & Expectations *
                                    </label>
                                    <textarea
                                        id="goals"
                                        name="goals"
                                        required
                                        rows={3}
                                        value={formData.goals}
                                        onChange={handleInputChange}
                                        className="block w-full bg-slate-900 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                        placeholder="What do you want to achieve with this course? What specific skills are you looking for?"
                                    ></textarea>
                                </div>

                                <div>
                                    <label htmlFor="source" className="block text-sm font-medium text-slate-300 mb-2">
                                        How did you hear about us?
                                    </label>
                                    <select
                                        id="source"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleInputChange}
                                        className="block w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300"
                                    >
                                        <option value="website">Website</option>
                                        <option value="social">Social Media</option>
                                        <option value="friend">Friend/Colleague</option>
                                        <option value="search">Google Search</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {showAlert && (
                                    <div className="mb-4 p-3 bg-rose-600/10 border border-rose-500/20 text-rose-300 rounded">
                                        Please fill all required fields (Name, Email, Phone, Course, Goals).
                                        <button onClick={() => setShowAlert(false)} className="ml-4 underline text-rose-200">Dismiss</button>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center hover:shadow-teal-500/25"
                                >
                                    <Send size={20} className="mr-2" />
                                    Submit Enrollment Request
                                </button>

                                <button
                                    type="button"
                                    onClick={openPayModal}
                                    className="w-full mt-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-4 rounded-lg shadow-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                >
                                    Pay Now
                                </button>

                                <p className="text-xs text-slate-400 text-center">
                                    By submitting this form, you agree to be contacted by our admissions team via phone, email, or WhatsApp.
                                </p>
                            </form>
                        </div>

                        {/* Benefits & Next Steps */}
                        <div className="space-y-8">
                            {/* What Happens Next */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Target size={24} className="mr-3 text-teal-400" />
                                    What Happens Next?
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Personal Consultation</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">Our admissions counselor will call you within 24 hours to understand your goals and recommend the best program.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Customized Learning Path</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">We'll create a personalized curriculum based on your experience level and career objectives.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Enrollment & Payment</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">Secure your spot with flexible payment options and get immediate access to pre-course materials.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enrollment Benefits */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Enroll With Us?</h3>

                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle size={16} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                                <h3 className="text-xl font-bold text-white mb-6 text-center">What Our Students Say</h3>

                                <div className="space-y-4">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-600/50">
                                            <div className="flex items-center mb-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-slate-300 text-sm italic mb-3">"{testimonial.content}"</p>
                                            <div>
                                                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                                                <div className="text-xs text-slate-400">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-2xl p-8 border border-teal-500/20">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <SectionTitle>{originCourse ? `Ready to Start Your ${originCourse} Journey?` : 'Ready to Start Your Journey?'}</SectionTitle>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of successful professionals who have transformed their careers with our programs. Don't wait - your future in cybersecurity starts here!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => onNavigate('batches')}
                                    className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 text-lg"
                                >
                                    View Upcoming Batches
                                </button>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="border-2 border-teal-500 text-teal-400 font-semibold px-8 py-4 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 text-lg"
                                >
                                    Speak to Counselor
                                </button>
                            </div>

                            <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-slate-400">
                                <div className="flex items-center">
                                    <Users className="w-4 h-4 text-blue-400 mr-1" />
                                    <span>Expert Guidance</span>
                                </div>
                                <div className="flex items-center">
                                    <Award className="w-4 h-4 text-green-400 mr-1" />
                                    <span>Industry Recognition</span>
                                </div>
                                <div className="flex items-center">
                                    <Heart className="w-4 h-4 text-pink-400 mr-1" />
                                    <span>Personalized Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}