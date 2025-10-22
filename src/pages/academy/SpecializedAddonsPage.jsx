import React, { useState } from 'react';
import {
    Zap,
    Cpu,
    Network,
    Award,
    Clock,
    CheckCircle,
    ChevronRight,
    Calendar,
    MessageCircle,
    Download,
    Shield,
    Cloud,
    Radio,
    X,
    BookOpen
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { getFeeDisplay } from '../../utils/pricing';
import { setSelectedCourse, setSelectedAddon as setSelectedAddonKey, getSelectedCourse } from '../../utils/handshake';

export default function SpecializedAddonsPage({ onNavigate }) {
    const [selectedAddon, setSelectedAddon] = useState(null);

    const features = [
        {
            icon: Cloud,
            title: 'Cloud Security (Addon)',
            description: 'Master AWS, Azure, and GCP security services, IAM, and cloud-native security tools.',
            skills: ['AWS Security', 'Azure Security', 'GCP Security', 'IAM', 'Cloud-Native Security'],
            color: 'blue',
            duration: '4 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'Comprehensive cloud security training',
                'Hands-on labs with AWS, Azure, GCP',
                'IAM and access management expertise',
                'Cloud-native security best practices',
                'Industry-recognized certifications preparation'
            ],
            syllabus: [
                { week: 1, title: 'AWS Security Fundamentals', desc: 'Learn AWS security services, VPC security, and cloud architecture best practices.' },
                { week: 2, title: 'Azure Security Services', desc: 'Master Azure security tools, Azure AD, and security center implementation.' },
                { week: 3, title: 'GCP Security & IAM', desc: 'Explore GCP security features, identity and access management, and compliance.' },
                { week: 4, title: 'Cloud-Native Security & Monitoring', desc: 'Implement cloud monitoring, logging, and incident response in cloud environments.' }
                    ],
            prerequisites: 'Basic networking and security knowledge recommended (can be from any introductory cybersecurity course)',
            jobRoles: ['Cloud Security Engineer', 'AWS Security Specialist', 'Cloud Security Architect']
        },
        {
            icon: Shield,
            title: 'Digital Forensics & Investigation',
            description: 'Comprehensive digital forensics investigation techniques and evidence collection.',
            skills: ['Evidence Collection', 'Timeline Analysis', 'Chain of Custody', 'Digital Forensics'],
            color: 'green',
            duration: '5 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'Digital evidence collection and preservation',
                'Timeline analysis and reconstruction',
                'Chain of custody procedures',
                'Forensic tools and methodologies',
                'Legal and ethical considerations in forensics'
            ],
            syllabus: [
                { week: 1, title: 'Evidence Collection & Preservation', desc: 'Learn proper evidence handling, imaging techniques, and preservation methods.' },
                { week: 2, title: 'Timeline Analysis', desc: 'Master timeline creation, event reconstruction, and temporal analysis.' },
                { week: 3, title: 'Forensic Tools & Software', desc: 'Hands-on with Autopsy, FTK, and other forensic investigation tools.' },
                { week: 4, title: 'Chain of Custody & Legal Procedures', desc: 'Understand legal requirements, documentation, and courtroom presentation.' },
                { week: 5, title: 'Advanced Forensics & Reporting', desc: 'Conduct complex investigations and create comprehensive forensic reports.' }
            ],
            prerequisites: 'Basic cybersecurity fundamentals (from Defensive Security Professional or Offensive Security Professional)',
            jobRoles: ['Digital Forensics Analyst', 'Incident Response Specialist', 'Forensic Investigator']
        },
        {
            icon: Cpu,
            title: 'Malware Analysis & Reverse Engineering',
            description: 'Advanced malware analysis, reverse engineering, and threat intelligence techniques.',
            skills: ['Static Analysis', 'Dynamic Analysis', 'Reverse Engineering', 'Threat Intelligence'],
            color: 'pink',
            duration: '6 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'Static and dynamic malware analysis',
                'Reverse engineering techniques',
                'Threat intelligence gathering',
                'Malware classification and reporting',
                'Advanced debugging and disassembly skills'
            ],
            syllabus: [
                { week: 1, title: 'Malware Fundamentals & Static Analysis', desc: 'Understand malware types, static analysis techniques, and file signatures.' },
                { week: 2, title: 'Dynamic Analysis & Sandboxing', desc: 'Learn behavioral analysis, sandbox environments, and malware execution monitoring.' },
                { week: 3, title: 'Reverse Engineering Basics', desc: 'Introduction to disassembly, decompilation, and code analysis techniques.' },
                { week: 4, title: 'Advanced Reverse Engineering', desc: 'Master obfuscation techniques, anti-analysis, and complex malware dissection.' },
                { week: 5, title: 'Threat Intelligence & IOCs', desc: 'Gather and analyze threat intelligence, identify indicators of compromise.' },
                { week: 6, title: 'Malware Classification & Reporting', desc: 'Classify malware families, create analysis reports, and remediation strategies.' }
            ],
            prerequisites: 'Offensive Security Professional (required for reverse engineering concepts)',
            jobRoles: ['Malware Analyst', 'Reverse Engineer', 'Threat Intelligence Analyst']
        },
        {
            icon: Award,
            title: 'GRC & Compliance',
            description: 'Governance, Risk, and Compliance management with ISO 27001 implementation.',
            skills: ['ISO 27001', 'Risk Assessment', 'Compliance Management', 'GRC Frameworks'],
            color: 'purple',
            duration: '5 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'ISO 27001 implementation and auditing',
                'Risk assessment and management',
                'Compliance frameworks and standards',
                'GRC policy development',
                'Regulatory compliance expertise'
            ],
            syllabus: [
                { week: 1, title: 'GRC Fundamentals & Frameworks', desc: 'Introduction to governance, risk management, and compliance principles.' },
                { week: 2, title: 'Risk Assessment & Management', desc: 'Learn risk identification, assessment methodologies, and mitigation strategies.' },
                { week: 3, title: 'ISO 27001 Implementation', desc: 'Implement information security management systems and controls.' },
                { week: 4, title: 'Compliance Standards & Auditing', desc: 'Master various compliance frameworks, auditing techniques, and reporting.' },
                { week: 5, title: 'GRC Policy Development & Monitoring', desc: 'Develop security policies, continuous monitoring, and improvement processes.' }
            ],
            prerequisites: 'Basic security awareness (no specific program required)',
            jobRoles: ['GRC Analyst', 'Compliance Officer', 'Security Auditor']
        },
        {
            icon: Network,
            title: 'Incident Response & Threat Hunting',
            description: 'Comprehensive incident response lifecycle and proactive threat hunting methodologies.',
            skills: ['Incident Response', 'Threat Hunting', 'Digital Forensics', 'IR Lifecycle'],
            color: 'orange',
            duration: '5 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'Incident response lifecycle management',
                'Proactive threat hunting techniques',
                'Digital forensics integration',
                'IR planning and execution',
                'Post-incident analysis and reporting'
            ],
            syllabus: [
                { week: 1, title: 'Incident Response Fundamentals', desc: 'Understand IR lifecycle, roles, and responsibilities in incident management.' },
                { week: 2, title: 'Detection & Analysis', desc: 'Learn incident detection, triage, and initial analysis techniques.' },
                { week: 3, title: 'Containment & Eradication', desc: 'Master containment strategies, threat removal, and system recovery.' },
                { week: 4, title: 'Threat Hunting Methodologies', desc: 'Proactive threat hunting, hypothesis development, and investigation techniques.' },
                { week: 5, title: 'Post-Incident Activities & Reporting', desc: 'Conduct lessons learned, reporting, and continuous improvement.' }
            ],
            prerequisites: 'Defensive Security Professional (recommended for SOC and monitoring knowledge)',
            jobRoles: ['Incident Response Specialist', 'SOC Lead', 'Threat Hunter']
        },
        {
            icon: Radio,
            title: 'Red Team Operations',
            description: 'Advanced red team operations, command & control, and covert communication techniques.',
            skills: ['Red Team Methodology', 'C2 Infrastructure', 'OpSec', 'Covert Communications'],
            color: 'red',
            duration: '6 weeks',
            price: getFeeDisplay('Specialized Add-ons'),
            benefits: [
                'Red team methodology and frameworks',
                'Command and control infrastructure',
                'Operational security (OpSec) practices',
                'Covert communication techniques',
                'Advanced persistence and evasion'
                ],
            syllabus: [
                { week: 1, title: 'Red Team Fundamentals', desc: 'Introduction to red teaming, methodology, and engagement planning.' },
                { week: 2, title: 'Reconnaissance & Intelligence Gathering', desc: 'Advanced reconnaissance techniques and intelligence collection methods.' },
                { week: 3, title: 'Initial Access & Persistence', desc: 'Gain initial access, establish persistence, and maintain footholds.' },
                { week: 4, title: 'Command & Control Infrastructure', desc: 'Build and operate C2 servers, covert channels, and communication methods.' },
                { week: 5, title: 'Lateral Movement & Privilege Escalation', desc: 'Navigate networks, escalate privileges, and move laterally.' },
                { week: 6, title: 'Reporting & Debriefing', desc: 'Create comprehensive reports, conduct debriefs, and improve operations.' }
            ],
            prerequisites: 'Offensive Security Professional (required for advanced penetration testing concepts)',
            jobRoles: ['Red Team Operator', 'Advanced Penetration Tester', 'Security Assessment Specialist']
        }
    ];

    const relatedCourses = [
        { title: 'Defensive Security Professional', page: 'defensive-security', icon: Shield, color: 'sky' },
        { title: 'Offensive Security Professional', page: 'offensive-security', icon: Network, color: 'red' },
        { title: 'Multi-Cloud DevOps', page: 'multi-cloud-devops', icon: Cloud, color: 'purple' }
    ];

    const handleEnrollClick = () => {
        const existing = getSelectedCourse();
        if (!existing) {
            setSelectedCourse('Specialized Add-ons');
        }
        onNavigate('enroll');
    };

    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey="academy"
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: 'Academy' },
                            { label: 'Specialized Add-ons' }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                    <div className="hero-card surface-alt text-center">
                        <div className="absolute -top-20 right-24 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" aria-hidden />
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),transparent_65%)]" aria-hidden />
                        <div className="hero-icon bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500">
                            <Zap className="h-10 w-10 text-white" />
                        </div>
                        <SectionTitle>Cyber Security Specialized Add-ons</SectionTitle>
                        <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-200/85">
                            Deep dive into advanced cybersecurity domains. Master cloud security, digital forensics, malware analysis, governance &amp; compliance, incident response, and red team operations through focused specialization sprints.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
                            <span className="chip bg-sky-500/20 text-sky-200/85">Cloud Security</span>
                            <span className="chip bg-emerald-500/20 text-emerald-200/85">Digital Forensics</span>
                            <span className="chip bg-pink-500/20 text-pink-200/85">Malware Analysis</span>
                            <span className="chip bg-violet-500/20 text-violet-200/85">GRC &amp; Compliance</span>
                            <span className="chip bg-orange-500/20 text-orange-200/85">Threat Hunting</span>
                            <span className="chip bg-red-500/20 text-red-200/85">Red Team Ops</span>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200/90">
                            <div className="glass-chip text-white">
                                Fee:&nbsp;
                                <span className="text-amber-200">{getFeeDisplay('Specialized Add-ons')}</span>
                                <span className="ml-2 text-xs uppercase tracking-[0.3em] text-slate-300/80">per addon</span>
                            </div>
                            <button
                                type="button"
                                onClick={handleEnrollClick}
                                className="glass-button bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 hover:from-amber-300/90 hover:to-orange-400/90"
                            >
                                Enroll Now
                            </button>
                        </div>
                        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                            Eligible cybersecurity students may access an add-on fee of ₹5,000. Verified during enrollment.
                        </p>
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">Specialized Domains</h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Select an add-on to explore details</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group glass-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-amber-200">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-200/75">{feature.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                                    {feature.skills.map((skill) => (
                                        <span key={skill} className={`chip bg-${feature.color}-500/15 text-${feature.color}-200/85`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedAddon(feature)}
                                    className="mt-6 w-full glass-button flex items-center justify-center gap-2 text-sm"
                                >
                                    View Details
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-indigo">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="glass-panel p-8 text-center md:p-12">
                        <h3 className="text-3xl font-semibold text-white">Ready for Advanced Specialization?</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                            Master niche cybersecurity domains and become an industry specialist with guided mentorship and project-based labs.
                        </p>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <button type="button" onClick={() => onNavigate('batches')} className="glass-button flex items-center justify-center gap-2">
                                <Calendar className="h-5 w-5" />
                                View Batches
                            </button>
                            <button type="button" onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                Free Consultation
                            </button>
                            <button type="button" onClick={() => onNavigate('contact')} className="glass-button flex items-center justify-center gap-2">
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
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">Choose your next specialization path</p>
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

            {selectedAddon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="glass-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto p-8">
                        <button
                            type="button"
                            onClick={() => setSelectedAddon(null)}
                            className="absolute right-4 top-4 glass-button flex h-9 w-9 items-center justify-center rounded-full text-slate-200/80 hover:text-white"
                        >
                            <X size={18} />
                        </button>
                        <div className="flex flex-col gap-4 pb-6 text-left">
                            <div className="flex items-center gap-4">
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${selectedAddon.color}-500 to-${selectedAddon.color}-600`}>
                                    <selectedAddon.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">{selectedAddon.title}</h2>
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Specialized Add-on</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-200/80">{selectedAddon.description}</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="glass-card p-6 text-sm text-slate-200/85">
                                <div className="flex items-center gap-2 text-amber-200/90">
                                    <Clock className="h-5 w-5" />
                                    <span className="text-xs uppercase tracking-[0.3em]">Program Details</span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li><span className="text-slate-300/80">Duration:</span> <span className="text-white/90">{selectedAddon.duration}</span></li>
                                    <li>
                                        <span className="text-slate-300/80">Price:</span> <span className="text-white/90">{selectedAddon.price}</span>
                                        <div className="text-[11px] uppercase tracking-[0.3em] text-amber-200/70">₹5,000 concession for eligible cybersecurity learners</div>
                                    </li>
                                    <li><span className="text-slate-300/80">Level:</span> <span className="text-white/90">Advanced</span></li>
                                </ul>
                            </div>
                            <div className="glass-card p-6 text-sm text-slate-200/85">
                                <div className="flex items-center gap-2 text-amber-200/90">
                                    <Award className="h-5 w-5" />
                                    <span className="text-xs uppercase tracking-[0.3em]">Key Benefits</span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {selectedAddon.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3 text-slate-200/70">
                                            <CheckCircle className="mt-1 h-4 w-4 text-emerald-400" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 glass-card p-6 text-sm text-slate-200/85">
                            <div className="flex items-center gap-2 text-amber-200/90">
                                <CheckCircle className="h-5 w-5" />
                                <span className="text-xs uppercase tracking-[0.3em]">Prerequisites</span>
                            </div>
                            <p className="mt-3 leading-relaxed">{selectedAddon.prerequisites}</p>
                        </div>

                        <div className="mt-6 glass-card p-6 text-sm text-slate-200/85">
                            <div className="flex items-center gap-2 text-amber-200/90">
                                <Award className="h-5 w-5" />
                                <span className="text-xs uppercase tracking-[0.3em]">Career Paths</span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                {selectedAddon.jobRoles.map((role) => (
                                    <span key={role} className="chip bg-amber-500/15 text-amber-100">{role}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 glass-card p-6 text-sm text-slate-200/85">
                            <div className="flex items-center gap-2 text-amber-200/90">
                                <BookOpen className="h-5 w-5" />
                                <span className="text-xs uppercase tracking-[0.3em]">Program Syllabus</span>
                            </div>
                            <div className="mt-4 space-y-4">
                                {selectedAddon.syllabus.map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-semibold text-amber-200">
                                            {item.week}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-white/90">{item.title}</h4>
                                            <p className="text-xs leading-relaxed text-slate-200/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                type="button"
                                onClick={() => {
                                    try {
                                        setSelectedAddonKey(`${selectedAddon.title} (Addon)`);
                                    } catch (error) {
                                        // swallow handshake helper errors silently
                                    }
                                    onNavigate('enroll');
                                }}
                                className="glass-button bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 hover:from-amber-300/90 hover:to-orange-400/90"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
