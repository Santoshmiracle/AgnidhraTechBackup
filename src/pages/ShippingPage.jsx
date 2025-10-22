import React from 'react';
import {
    Package,
    Truck,
    MapPin,
    Clock,
    CheckCircle,
    AlertCircle,
    Zap,
    Shield,
    Globe,
    Mail,
    Phone,
    MessageCircle
} from 'lucide-react';
import PolicyLayout from '@/components/PolicyLayout';

export default function ShippingPage({ onNavigate }) {
    const shippingMethods = [
        {
            name: 'Digital Delivery',
            description: 'Primary channel for course enrollment, learning materials, and credentials.',
            timeframe: 'Instant – 24 hours',
            cost: 'Included',
            icon: Package,
            items: [
                'Learning portal access links',
                'Digital certificates & badges',
                'Downloadable handbooks (PDF)',
                'Live session recordings',
                'Virtual lab credentials'
            ]
        },
        {
            name: 'Physical Dispatch',
            description: 'Optional kits, printed workbooks, or premium merchandise.',
            timeframe: '3 – 7 business days',
            cost: '₹200 – ₹500',
            icon: Truck,
            items: [
                'Cyber range hardware kits (if applicable)',
                'Printed study companions',
                'Agnidhra merchandise',
                'Framed certificates (premium)',
                'USB drives with offline tools'
            ]
        }
    ];

    const deliveryZones = [
        {
            zone: 'Metro Cities',
            areas: 'Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Hyderabad, Pune',
            timeframe: '2 – 3 business days',
            cost: '₹200'
        },
        {
            zone: 'Tier 1 Cities',
            areas: 'State capitals and major urban centres',
            timeframe: '3 – 5 business days',
            cost: '₹300'
        },
        {
            zone: 'Tier 2/3 Towns',
            areas: 'Emerging cities and district HQs',
            timeframe: '5 – 7 business days',
            cost: '₹400'
        },
        {
            zone: 'Remote & Rural',
            areas: 'Rural belts and special service areas',
            timeframe: '7 – 10 business days',
            cost: '₹500'
        }
    ];

    const digitalSteps = [
        {
            label: 'Payment Confirmation',
            detail: 'Receive instant email & SMS acknowledgement along with receipt copy.'
        },
        {
            label: 'Account Activation',
            detail: 'Learning portal credentials provisioned within 24 hours of enrollment.'
        },
        {
            label: 'Access & Orientation',
            detail: 'Orientation mailers share schedules, community links, and lab access guides.'
        }
    ];

    const shippingTerms = [
        'Physical dispatch currently supports addresses within India only.',
        'Shipping address cannot be modified once the order is confirmed.',
        'Courier delays caused by weather, strikes, or festivals are outside our control.',
        'Damages must be reported with photos/videos within 48 hours of delivery.',
        'Live tracking links are shared via SMS and email on dispatch.',
        'Couriers attempt delivery up to two times before returning the package.'
    ];

    const internationalNotes = [
        {
            title: 'Always-On Digital Access',
            description: 'Global learners receive the same portal access, recordings, and cloud labs without delay.',
            accent: 'sky'
        },
        {
            title: 'Physical Shipments',
            description: 'International shipping is currently unavailable; we provide digital substitutes wherever possible.',
            accent: 'amber'
        },
        {
            title: 'Verified Certificates',
            description: 'Blockchain-verifiable digital certificates allow instant global validation of your achievement.',
            accent: 'emerald'
        }
    ];

    const accentCards = {
        sky: 'border-sky-400/40 bg-sky-500/10 text-sky-100/90',
        amber: 'border-amber-400/40 bg-amber-500/10 text-amber-100/90',
        emerald: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100/90'
    };

    const supportContacts = [
        {
            label: 'Shipping Desk',
            value: 'agnidhra.contact@gmail.com',
            description: 'Order status & tracking assistance',
            icon: Mail
        },
        {
            label: 'Logistics Helpline',
            value: '+91 73311 23651',
            description: 'Support Mon–Fri, 9 AM – 6 PM IST',
            icon: Phone
        },
        {
            label: 'WhatsApp Alerts',
            value: '+91 73311 23651',
            description: 'Dispatch notifications & quick updates',
            icon: MessageCircle
        }
    ];

    return (
        <PolicyLayout
            onNavigate={onNavigate}
            title="Shipping & Delivery Policy"
            description="Our programs are engineered for digital delivery first, with optional physical kits dispatched securely across India."
            icon={Truck}
            badges={["Digital First", "Tracked Dispatch", "Global Ready"]}
            lastUpdated="September 29, 2025"
        >
            <div className="space-y-12">
                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Digital-First Learning Infrastructure</h2>
                    <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="space-y-4 text-sm leading-relaxed text-slate-200/85">
                            <p>
                                We prioritise instant, secure delivery of every learning asset. Most resources ship digitally—meaning you gain
                                access to classrooms, labs, recordings, and certificates within hours of enrolment.
                            </p>
                            <p>
                                Physical shipments are reserved for specialist hardware kits, premium welcome packs, or when a course mandates
                                hands-on lab gear. Each parcel is tamper-proof packed, insured, and fully trackable.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-card border border-sky-400/40 bg-sky-500/10 p-4 text-sm text-sky-100/90">
                                <div className="mb-2 flex items-center gap-3">
                                    <Zap size={20} className="text-sky-200" />
                                    <span className="font-semibold uppercase tracking-[0.3em]">Instant Provisioning</span>
                                </div>
                                Payment confirmation automatically unlocks your learner dashboard, schedule, and onboarding checklist.
                            </div>
                            <div className="glass-card border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-100/90">
                                <div className="mb-2 flex items-center gap-3">
                                    <Shield size={20} className="text-emerald-200" />
                                    <span className="font-semibold uppercase tracking-[0.3em]">Secure Logistics</span>
                                </div>
                                Dispatch experiences end-to-end tracking, insurance coverage, and OTP verification at delivery.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Delivery Channels</h2>
                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {shippingMethods.map((method) => (
                            <div key={method.name} className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500">
                                        <method.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                                        <p className="mt-1 text-sm text-slate-200/80">{method.description}</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200/80">
                                    <div className="glass-card border border-white/5 bg-white/5 p-3 text-center">
                                        <Clock className="mx-auto h-4 w-4 text-sky-200" />
                                        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-300/80">Timeline</p>
                                        <p className="mt-1 font-semibold text-white/90">{method.timeframe}</p>
                                    </div>
                                    <div className="glass-card border border-white/5 bg-white/5 p-3 text-center">
                                        <Package className="mx-auto h-4 w-4 text-emerald-200" />
                                        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-300/80">Cost</p>
                                        <p className="mt-1 font-semibold text-white/90">{method.cost}</p>
                                    </div>
                                </div>
                                <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Includes</h4>
                                <ul className="mt-3 space-y-2 text-sm text-slate-200/80">
                                    {method.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <CheckCircle size={14} className="mt-0.5 text-emerald-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Physical Delivery Footprint (India)</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {deliveryZones.map((zone) => (
                            <div key={zone.zone} className="glass-card border border-sky-400/20 bg-slate-950/40 p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-base font-semibold text-sky-200">{zone.zone}</h3>
                                        <p className="mt-2 text-sm text-slate-200/75">{zone.areas}</p>
                                    </div>
                                    <MapPin className="h-5 w-5 text-sky-300" />
                                </div>
                                <div className="mt-5 grid gap-3 text-sm">
                                    <div className="flex items-center justify-between text-slate-200/75">
                                        <span>Transit Time</span>
                                        <span className="font-medium text-white/90">{zone.timeframe}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-slate-200/75">
                                        <span>Shipping Fee</span>
                                        <span className="font-semibold text-emerald-200">{zone.cost}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 glass-card border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-amber-100/90">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-amber-200" />
                            <p>
                                Transit times may extend during festive seasons, weather alerts, or other force majeure events. Tracking IDs are
                                mailed the moment a parcel is scanned by the courier partner.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Digital Delivery Blueprint</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {digitalSteps.map((step, index) => (
                            <div key={step.label} className="glass-card p-6 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-lg font-semibold text-white">
                                    {index + 1}
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-white">{step.label}</h3>
                                <p className="mt-3 text-sm text-slate-200/80">{step.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Shipping Terms &amp; Responsibilities</h2>
                            <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                                {shippingTerms.map((term) => (
                                    <li key={term} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="mt-1 text-emerald-300" />
                                        {term}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white">International Learners</h2>
                            <div className="mt-6 space-y-4">
                                {internationalNotes.map((card) => (
                                    <div key={card.title} className={`glass-card border ${accentCards[card.accent]} p-5`}>
                                        <div className="flex items-center gap-3">
                                            <Globe className="h-5 w-5" />
                                            <h3 className="text-base font-semibold">{card.title}</h3>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Shipping Support Desk</h2>
                    <p className="mt-3 text-sm text-slate-200/80">Reach out to our logistics coordinators for shipping preferences, updates, or escalations.</p>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {supportContacts.map((contact) => (
                            <div key={contact.label} className="glass-card p-6 text-sm">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60">
                                    <contact.icon className="h-5 w-5 text-sky-200" />
                                </div>
                                <h3 className="text-base font-semibold text-white">{contact.label}</h3>
                                <p className="mt-2 font-medium text-emerald-100/85">{contact.value}</p>
                                <p className="mt-1 text-xs text-slate-200/70">{contact.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PolicyLayout>
    );
}