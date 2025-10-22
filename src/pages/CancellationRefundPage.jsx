import React from 'react';
import {
    RefreshCw,
    Clock,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Mail,
    Phone,
    MessageCircle,
    ShieldCheck,
    Shield
} from 'lucide-react';
import PolicyLayout from '@/components/PolicyLayout';

export default function CancellationRefundPage({ onNavigate }) {
    const refundTimeline = [
        {
            period: "Before Course Start",
            timeframe: "Up to 7 days before commencement",
            refundAmount: "100% refund",
            processingTime: "5-7 business days",
            icon: CheckCircle,
            color: "emerald"
        },
        {
            period: "Early Cancellation",
            timeframe: "3-6 days before course start",
            refundAmount: "75% refund",
            processingTime: "7-10 business days",
            icon: AlertTriangle,
            color: "amber"
        },
        {
            period: "Late Cancellation",
            timeframe: "1-2 days before course start",
            refundAmount: "50% refund",
            processingTime: "10-14 business days",
            icon: Clock,
            color: "orange"
        },
        {
            period: "After Course Start",
            timeframe: "Once sessions have begun",
            refundAmount: "No refund",
            processingTime: "N/A",
            icon: XCircle,
            color: "rose"
        }
    ];

    const cardAccents = {
        emerald: 'border-emerald-400/40 bg-emerald-500/10',
        amber: 'border-amber-400/40 bg-amber-500/10',
        orange: 'border-orange-400/40 bg-orange-500/10',
        rose: 'border-rose-400/40 bg-rose-500/10'
    };

    const iconColors = {
        emerald: 'text-emerald-200',
        amber: 'text-amber-200',
        orange: 'text-orange-200',
        rose: 'text-rose-200'
    };

    const refundSteps = [
        {
            step: '1',
            title: 'Submit Email Request',
            description: 'Write to agnidhra.contact@gmail.com with your cancellation request and course name.'
        },
        {
            step: '2',
            title: 'Share Transaction Details',
            description: 'Include payment receipt/ID, registered email, and the last four digits of the payment account.'
        },
        {
            step: '3',
            title: 'Verification & Review',
            description: 'Our finance desk reviews eligibility and responds within 48 hours with next steps.'
        },
        {
            step: '4',
            title: 'Refund Processing',
            description: 'Approved refunds are initiated via the original payment method and you receive status updates.'
        }
    ];

    const eligibilityCriteria = [
        "Request must be submitted in writing from the registered email ID",
        "Payment receipt, transaction ID, or invoice number is required",
        "Learner name and course batch information must be provided",
        "Access to digital course material will be revoked upon approval",
        "Partially completed live sessions may reduce the refund percentage"
    ];

    const nonRefundableItems = [
        "Payment gateway or currency conversion fees",
        "Certificates already issued or dispatched",
        "One-on-one mentoring sessions that have been completed",
        "Administrative setup charges and onboarding costs",
        "Licenses for premium labs or third-party tools"
    ];

    const specialCircumstances = [
        {
            title: 'Medical Emergencies',
            description: 'Full refund granted when supported with medical documentation, irrespective of schedule.',
            accent: 'emerald'
        },
        {
            title: 'Platform Access Issues',
            description: 'If we cannot restore your course access within 48 hours, a full refund is processed.',
            accent: 'sky'
        },
        {
            title: 'Batch Cancellation',
            description: 'If Agnidhra cancels or reschedules a batch, you receive 100% refund or free transfer.',
            accent: 'violet'
        }
    ];

    const accentCards = {
        emerald: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100/90',
        sky: 'border-sky-400/40 bg-sky-500/10 text-sky-100/90',
        violet: 'border-violet-400/40 bg-violet-500/10 text-violet-100/90'
    };

    const supportChannels = [
        {
            label: 'Refund Desk',
            value: 'agnidhra.contact@gmail.com',
            description: 'Response within 24 hours with tracking ID',
            icon: Mail
        },
        {
            label: 'Helpline',
            value: '+91 73311 23651',
            description: 'Mon–Fri, 9 AM – 6 PM IST',
            icon: Phone
        },
        {
            label: 'WhatsApp',
            value: '+91 73311 23651',
            description: 'Real-time updates & quick clarifications',
            icon: MessageCircle
        }
    ];

    const importantNotes = [
        'Refunds are always routed back to the original payment instrument; alternate accounts are not supported.',
        'Banks may take additional time beyond our processing window; we share UTR/transaction references once initiated.',
        'Policy updates are communicated 30 days in advance to enrolled learners via email.',
        'Disputes are handled under Indian consumer protection norms; escalation window is 15 days from decision.',
        'Screenshots or logs may be requested when claiming technical inability to access the platform.'
    ];

    return (
        <PolicyLayout
            onNavigate={onNavigate}
            title="Cancellation & Refund Policy"
            description="We keep the refund journey transparent, time-bound, and learner-first so you always know what to expect."
            icon={RefreshCw}
            badges={["Transparent Process", "Learner Protection", "No Hidden Fees"]}
            lastUpdated="September 29, 2025"
        >
            <div className="space-y-12">
                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">How Our Refund Promise Works</h2>
                    <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="space-y-4 text-sm leading-relaxed text-slate-200/85">
                            <p>
                                Every cancellation request is evaluated with empathy and clear documentation. We acknowledge all emails within 24 hours,
                                verify payment proofs, and keep you informed at each milestone of the refund cycle.
                            </p>
                            <p>
                                Refunds are processed through secure banking channels with transparent communication on timelines, deductions, and approvals.
                                Once a refund is initiated, we send the reference number so you can monitor the settlement with your bank.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-card border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-100/90">
                                <div className="mb-2 flex items-center gap-3">
                                    <ShieldCheck size={20} className="text-emerald-200" />
                                    <span className="font-semibold uppercase tracking-[0.3em]">Zero Hidden Clauses</span>
                                </div>
                                Refund calculations are shared upfront, including payment gateway deductions mandated by providers.
                            </div>
                            <div className="glass-card border border-sky-400/30 bg-sky-500/10 p-4 text-sm text-sky-100/90">
                                <div className="mb-2 flex items-center gap-3">
                                    <Shield size={20} className="text-sky-200" />
                                    <span className="font-semibold uppercase tracking-[0.3em]">Secure Processing</span>
                                </div>
                                All transactions are handled through encrypted banking channels, ensuring your financial data remains protected.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Refund Windows &amp; Outcomes</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {refundTimeline.map((item) => (
                            <div key={item.period} className={`glass-card p-6 ${cardAccents[item.color]}`}>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/50">
                                            <item.icon className={`h-6 w-6 ${iconColors[item.color]}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white">{item.period}</h3>
                                            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-300/80">{item.timeframe}</p>
                                        </div>
                                    </div>
                                    <span className="glass-chip border border-white/10 bg-white/10 text-xs font-semibold text-white/90">
                                        {item.refundAmount}
                                    </span>
                                </div>
                                <p className="mt-4 text-sm text-slate-200/80">
                                    Processing time: <span className="font-medium text-white/90">{item.processingTime}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">How To Request A Refund</h2>
                            <div className="mt-6 space-y-4">
                                {refundSteps.map((step) => (
                                    <div key={step.step} className="glass-card p-5">
                                        <div className="flex items-start gap-4">
                                            <span className="glass-chip bg-sky-500/20 text-sky-100/85">Step {step.step}</span>
                                            <div>
                                                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                                                <p className="mt-2 text-sm text-slate-200/80">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Eligibility Checklist</h2>
                            <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                                {eligibilityCriteria.map((criteria) => (
                                    <li key={criteria} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="mt-1 text-emerald-300" />
                                        {criteria}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 glass-card border border-amber-400/40 bg-amber-500/15 p-4 text-sm text-amber-100/90">
                                <strong>Tip:</strong> Submit your request at least five business days before the batch starts to avoid deduction slabs.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Non-Refundable Components</h2>
                            <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                                {nonRefundableItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <XCircle size={16} className="mt-1 text-rose-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Special Considerations</h2>
                            <div className="mt-6 space-y-4">
                                {specialCircumstances.map((item) => (
                                    <div key={item.title} className={`glass-card border ${accentCards[item.accent]} p-5`}>
                                        <h3 className="text-base font-semibold">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Need Assistance?</h2>
                    <p className="mt-3 text-sm text-slate-200/80">Our learner success desk stays on standby to resolve refund questions quickly.</p>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {supportChannels.map((channel) => (
                            <div key={channel.label} className="glass-card p-6 text-sm">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60">
                                    <channel.icon className="h-5 w-5 text-sky-200" />
                                </div>
                                <h3 className="text-base font-semibold text-white">{channel.label}</h3>
                                <p className="mt-2 font-medium text-emerald-100/85">{channel.value}</p>
                                <p className="mt-1 text-xs text-slate-200/70">{channel.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel border border-amber-400/40 bg-amber-500/10 p-8 md:p-10 text-sm text-amber-100/95">
                    <h2 className="text-2xl font-semibold text-white">Important Notes</h2>
                    <ul className="mt-5 space-y-3">
                        {importantNotes.map((note) => (
                            <li key={note} className="flex items-start gap-3">
                                <AlertTriangle size={16} className="mt-1 text-amber-200" />
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PolicyLayout>
    );
}