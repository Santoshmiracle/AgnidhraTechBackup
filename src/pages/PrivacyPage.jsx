import React from 'react';
import { Shield, Eye, Database, Lock, Users, AlertTriangle } from 'lucide-react';
import PolicyLayout from '@/components/PolicyLayout';

export default function PrivacyPage({ onNavigate }) {
    const dataTypes = [
        {
            category: "Personal Information",
            icon: Users,
            items: ["Full name and contact details", "Email address and phone number", "Educational background", "Payment information", "Course preferences"]
        },
        {
            category: "Technical Data",
            icon: Database,
            items: ["IP address and device information", "Browser type and version", "Course access logs", "Learning progress data", "System performance metrics"]
        },
        {
            category: "Usage Information",
            icon: Eye,
            items: ["Course completion rates", "Time spent on modules", "Quiz and assignment scores", "Forum participation", "Feature usage patterns"]
        }
    ];

    const dataUsage = [
        {
            purpose: "Course Delivery",
            description: "Providing access to courses, tracking progress, and personalizing learning experience",
            icon: Shield,
            retention: "Duration of course + 2 years"
        },
        {
            purpose: "Communication",
            description: "Sending course updates, notifications, and educational content via email/SMS",
            icon: Eye,
            retention: "Until unsubscribed"
        },
        {
            purpose: "Payment Processing",
            description: "Processing payments, generating invoices, and maintaining transaction records",
            icon: Lock,
            retention: "7 years (legal requirement)"
        },
        {
            purpose: "Service Improvement",
            description: "Analyzing usage patterns to improve course quality and platform performance",
            icon: Database,
            retention: "3 years (anonymized)"
        }
    ];

    const userRights = [
        "Right to access your personal data and obtain copies upon request",
        "Right to correct inaccurate or incomplete information we hold",
        "Right to request deletion of data no longer needed for our services",
        "Right to restrict processing while objections are reviewed",
        "Right to withdraw consent for marketing communications at any time",
        "Right to data portability for information you provided to us"
    ];

    return (
        <PolicyLayout
            onNavigate={onNavigate}
            title="Privacy Policy"
            description="Your privacy is our priority. Learn how we collect, use, and protect your personal information across our learning experiences."
            icon={Shield}
            badges={["Data Protection", "SSL Secured", "GDPR-Compliant", "User Rights"]}
            lastUpdated="September 29, 2025"
        >
            <div className="space-y-12">
                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Our Privacy Commitment</h2>
                    <div className="mt-6 grid gap-8 md:grid-cols-2">
                        <div className="space-y-4 text-sm leading-relaxed text-slate-200/85">
                            <p>
                                At Agnidhra Technologies, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This policy explains how we collect, use, and safeguard your data when you engage with our cybersecurity and product training platform.
                            </p>
                            <p>
                                We comply with applicable data protection laws including the Information Technology Act, 2000, while following international best practices for data security and governance.
                            </p>

                            <div className="glass-card border border-slate-500/40 bg-slate-900/40 p-4 text-sm text-slate-200/80">
                                <h3 className="font-semibold uppercase tracking-[0.3em] text-white/80">What To Expect</h3>
                                <p className="mt-2 text-slate-200/75">
                                    We only collect information required to deliver secure training experiences, fulfil regulatory obligations, and support your learning journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
                    <div className="mt-8 grid gap-6 lg:grid-cols-3">
                        {dataTypes.map((type) => (
                            <div key={type.category} className="glass-card p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <type.icon size={22} className="text-sky-300" />
                                    <h3 className="text-base font-semibold text-white">{type.category}</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-200/80">
                                    {type.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {dataUsage.map((usage) => (
                            <div key={usage.purpose} className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <usage.icon size={22} className="mt-1 text-sky-300" />
                                    <div>
                                        <h3 className="text-base font-semibold text-white">{usage.purpose}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{usage.description}</p>
                                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                                            Retention: {usage.retention}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Data Sharing &amp; Third Parties</h2>
                            <div className="mt-6 space-y-4">
                                <div className="glass-card border border-emerald-400/30 bg-emerald-500/10 p-5 text-sm text-emerald-100/90">
                                    <h3 className="mb-2 font-semibold uppercase tracking-[0.3em]">We Share With</h3>
                                    <ul className="space-y-1">
                                        <li>• Payment processors for transactions</li>
                                        <li>• Email services for cohort communication</li>
                                        <li>• Cloud providers for secure infrastructure</li>
                                        <li>• Analytics platforms (anonymised data only)</li>
                                    </ul>
                                </div>
                                <div className="glass-card border border-rose-400/30 bg-rose-500/10 p-5 text-sm text-rose-100/90">
                                    <h3 className="mb-2 font-semibold uppercase tracking-[0.3em]">We Never Share With</h3>
                                    <ul className="space-y-1">
                                        <li>• Marketers or advertisers</li>
                                        <li>• Data brokers or third-party sellers</li>
                                        <li>• Social platforms without consent</li>
                                        <li>• Unrelated commercial entities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white">Your Rights &amp; Controls</h2>
                            <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                                {userRights.map((right) => (
                                    <li key={right} className="flex items-start gap-3">
                                        <Shield size={16} className="mt-1 text-sky-300" />
                                        {right}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 glass-card border border-sky-400/40 bg-sky-500/15 p-4 text-sm text-sky-100/90">
                                <strong>Exercise your rights:</strong> email <span className="font-semibold">agnidhra.contact@gmail.com</span> to request access, correction, or deletion of your personal data.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Security Measures</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="glass-card p-6 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                                <Lock size={28} className="text-emerald-200" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Encryption</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                                Data is encrypted in transit (SSL/TLS) and at rest using industry-standard AES-256.
                            </p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20">
                                <Shield size={28} className="text-sky-200" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Access Control</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                                Multi-factor authentication and strict role-based permissions govern every access request.
                            </p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                                <Eye size={28} className="text-purple-200" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Monitoring</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                                24/7 monitoring with automated threat detection and scheduled penetration testing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <h2 className="text-2xl font-semibold text-white">Cookies &amp; Tracking</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="glass-card p-6">
                            <h3 className="text-base font-semibold text-white">Essential Cookies</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                                Required for authentication, session continuity, and security preferences. These cannot be disabled.
                            </p>
                            <ul className="mt-4 space-y-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                                <li>• Session management</li>
                                <li>• Authentication tokens</li>
                                <li>• Security configuration</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="text-base font-semibold text-white">Analytics Cookies</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                                Help us understand usage patterns and improve the learning experience. You can opt out any time.
                            </p>
                            <ul className="mt-4 space-y-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                                <li>• Page views &amp; navigation</li>
                                <li>• Feature usage metrics</li>
                                <li>• Performance analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="glass-card border border-sky-400/40 bg-sky-500/15 p-6">
                            <h2 className="text-2xl font-semibold text-white">Privacy Questions?</h2>
                            <p className="mt-3 text-sm leading-relaxed text-sky-100/90">
                                Our privacy response team is available to address any concerns regarding your data protection.
                            </p>
                            <div className="mt-5 space-y-3 text-sm text-slate-100/85">
                                <div>
                                    <span className="font-semibold uppercase tracking-[0.3em] text-slate-200">Email</span>
                                    <div>agnidhra.contact@gmail.com</div>
                                </div>
                                <div>
                                    <span className="font-semibold uppercase tracking-[0.3em] text-slate-200">Data Protection Officer</span>
                                    <div>agnidhra.contact@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <h2 className="text-2xl font-semibold text-white">Policy Updates</h2>
                            <div className="mt-4 space-y-4 text-sm text-slate-200/85">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle size={18} className="mt-1 text-amber-300" />
                                    <p>
                                        We may update this privacy policy to reflect changes in regulation or platform operations. Major changes will be communicated ahead of time.
                                    </p>
                                </div>
                                <div className="glass-panel border border-blue-400/30 bg-blue-500/10 p-4 text-sky-100/90">
                                    <h4 className="font-semibold uppercase tracking-[0.3em] text-sky-100/90">Notification Process</h4>
                                    <ul className="mt-2 space-y-1 text-xs uppercase tracking-[0.25em] text-slate-300/70">
                                        <li>• Email notice for significant changes</li>
                                        <li>• Minimum 30-day notification window</li>
                                        <li>• Continued usage indicates acceptance</li>
                                    </ul>
                                </div>
                                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                    Last updated: October 2, 2025 &nbsp;•&nbsp; Version 2.1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PolicyLayout>
    );
}