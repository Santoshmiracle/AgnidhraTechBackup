import React, { useState } from 'react';
import { Mail, Phone, Send, Clock, MessageCircle, Star, Users, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';

export default function ContactUsPage({ onNavigate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `*New Contact Inquiry*%0A%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phone}%0A📝 Subject: ${formData.subject}%0A💬 Message: ${formData.message}`;
        const whatsappUrl = `https://wa.me/917331123651?text=${message}`;
        window.open(whatsappUrl, '_blank');
        alert('Thank you for your message! Redirecting to WhatsApp...');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Support Desk',
            details: 'agnidhra.contact@gmail.com',
            description: 'General support, payments, privacy'
        },
        {
            icon: Users,
            title: 'Training Desk',
            details: 'agnidhra.trainings@gmail.com',
            description: 'Admissions, counselling, batches'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '+91 73311 23651',
            description: 'Mon-Fri 9AM-6PM IST'
        },
        {
            icon: Clock,
            title: 'Response Time',
            details: 'Within 24 hours',
            description: 'We respond quickly to all inquiries'
        }
    ];

    const quickActions = [
        {
            title: 'Schedule Consultation',
            description: 'Book a free career consultation',
            action: () => {
                localStorage.setItem('selectedCourse', 'General Enrollment');
                onNavigate('enroll');
            }
        },
        {
            title: 'View Batches',
            description: 'Check upcoming class schedules',
            action: () => onNavigate('batches')
        },
        {
            title: 'Download Brochure',
            description: 'Get detailed program information',
            action: () => alert('Brochure download coming soon!')
        }
    ];

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="info"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Contact Us' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />

                    <div className="hero-card surface-alt">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),transparent_60%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
                            <MessageCircle className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Get In Touch</SectionTitle>
                        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-100/80">
                            Have questions about our programs or need enrollment support? Our advisors respond quickly and guide you every step of the way.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                            <span className="glass-chip bg-emerald-500/20 text-emerald-100/85">24/7 Support</span>
                            <span className="glass-chip bg-cyan-500/20 text-cyan-100/85">Expert Guidance</span>
                            <span className="glass-chip bg-sky-500/20 text-sky-100/85">Quick Response</span>
                            <span className="glass-chip bg-orange-500/20 text-orange-100/85">Personalized Help</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-white">Multiple Ways To Reach Us</h2>
                        <p className="mt-3 text-sm text-slate-200/80">Choose the contact channel that suits your query best.</p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {contactInfo.map((info) => (
                            <div key={info.title} className="glass-card p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
                                    <info.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                                <p className="mt-2 text-sm font-medium text-emerald-100/85">{info.details}</p>
                                <p className="mt-2 text-xs text-slate-200/75">{info.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ocean">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="glass-panel p-8 md:p-10">
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-white">Send Us A Message</h2>
                                <p className="mt-2 text-sm text-slate-100/80">We usually respond in under 24 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-medium uppercase tracking-[0.25em] text-slate-200/75">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="glass-input mt-2 w-full"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium uppercase tracking-[0.25em] text-slate-200/75">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="glass-input mt-2 w-full"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-medium uppercase tracking-[0.25em] text-slate-200/75">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="glass-input mt-2 w-full"
                                            placeholder="+91 73311 23651"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium uppercase tracking-[0.25em] text-slate-200/75">Subject *</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="glass-input mt-2 w-full text-white"
                                        >
                                            <option value="" className="bg-slate-900">Select a subject</option>
                                            <option value="course-inquiry" className="bg-slate-900">Course Inquiry</option>
                                            <option value="enrollment" className="bg-slate-900">Enrollment Help</option>
                                            <option value="technical-support" className="bg-slate-900">Technical Support</option>
                                            <option value="partnership" className="bg-slate-900">Partnership</option>
                                            <option value="career" className="bg-slate-900">Career Opportunities</option>
                                            <option value="other" className="bg-slate-900">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium uppercase tracking-[0.25em] text-slate-200/75">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="glass-input mt-2 w-full resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="glass-button flex w-full items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-500/90 hover:via-teal-500/90 hover:to-cyan-500/90"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="glass-panel p-8 md:p-10">
                                <div className="flex items-center gap-3 text-white">
                                    <Clock className="h-6 w-6 text-emerald-300" />
                                    <h3 className="text-xl font-semibold">Office Hours</h3>
                                </div>
                                <div className="mt-6 space-y-4 text-sm text-slate-100/80">
                                    <div className="flex items-center justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-emerald-200">9:00 AM - 6:00 PM IST</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Saturday</span>
                                        <span className="text-cyan-200">10:00 AM - 4:00 PM IST</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Sunday</span>
                                        <span className="text-slate-400">Closed</span>
                                    </div>
                                </div>
                                <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-xs text-emerald-100/85">
                                    💡 Pro Tip: Book weekend slots for detailed consultations.
                                </div>
                            </div>

                            <div className="glass-panel p-8 md:p-10">
                                <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
                                <div className="mt-6 space-y-4">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.title}
                                            onClick={action.action}
                                            className="glass-button w-full justify-between bg-white/5 text-left text-slate-100 hover:bg-emerald-500/10"
                                        >
                                            <div>
                                                <div className="text-sm font-medium text-white">{action.title}</div>
                                                <div className="text-xs text-slate-200/70">{action.description}</div>
                                            </div>
                                            <span className="text-xs text-emerald-100/90">Explore</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-ember">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h2 className="text-3xl font-semibold text-white">Ready To Start Your Journey?</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-100/85">
                            Our team is ready to guide you through enrollment, course selection, and every milestone beyond.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
                            <button
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', 'General Enrollment');
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-500/90 hover:via-teal-500/90 hover:to-cyan-500/90"
                            >
                                Enroll Now
                            </button>
                            <button onClick={() => onNavigate('batches')} className="glass-button text-emerald-200 hover:bg-emerald-500/10">
                                View Upcoming Batches
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-100/70">
                            <span className="inline-flex items-center gap-2">
                                <Star className="h-4 w-4 text-amber-300" />
                                4.9/5 Rating
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Users className="h-4 w-4 text-sky-200" />
                                5000+ Students
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Award className="h-4 w-4 text-emerald-200" />
                                Certified Training
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}