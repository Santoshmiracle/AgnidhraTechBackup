import React from 'react';

export default function Footer({ onNavigate }) {
    // Scroll handlers
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#05061a] via-[#0a142d] to-[#05061a] py-16 text-slate-300">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_65%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),transparent_70%)]" aria-hidden />

            <div className="container relative mx-auto px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Logo and Brand */}
                    <div className="col-span-1 text-center md:text-left">
                        <div className="mb-6 flex items-center justify-center md:justify-start">
                            <img src="/logo.png" alt="Agnidhra Technologies Logo" className="mr-3 h-11 w-11 rounded-full border border-white/20" />
                            <div>
                                <div className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">Agnidhra</div>
                                <div className="text-2xl font-bold text-white">Technologies</div>
                            </div>
                        </div>
                        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300/80 md:mx-0">
                            Empowering the next wave of tech leaders with immersive, mentor-led training across cybersecurity, cloud, and product engineering.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:text-sky-200"
                            >
                                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                                    <rect width="32" height="32" rx="10" fill="currentColor" opacity="0.15" />
                                    <path d="M12 26H8V13h4v13Zm-2-15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm17 15.5h-4v-6.9c0-1.87-.74-2.82-2.05-2.82-1.46 0-2.27 1-2.27 2.82V26h-4V13h3.83v1.79h.06c.86-1.36 2.23-2.09 3.78-2.08 2.88 0 4.65 1.9 4.65 5.4V26Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-rose-400/40 hover:text-rose-200"
                            >
                                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                                    <rect width="32" height="32" rx="10" fill="currentColor" opacity="0.15" />
                                    <path d="M27.5 11.5a3 3 0 0 0-2.1-2.1C23.3 9 16 9 16 9s-7.3 0-9.4.4a3 3 0 0 0-2.1 2.1C4 13.6 4 16 4 16s0 2.4.5 4.5a3 3 0 0 0 2.1 2.1C8.7 23 16 23 16 23s7.3 0 9.4-.4a3 3 0 0 0 2.1-2.1C28 18.4 28 16 28 16s0-2.4-.5-4.5Zm-13 7.2v-6.4l5.8 3.2-5.8 3.2Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/agnidhra_technologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition-all duration-300 hover:border-fuchsia-400/40 hover:text-fuchsia-200"
                            >
                                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                                    <defs>
                                        <linearGradient id="footer-insta" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#fdc468" />
                                            <stop offset="1" stopColor="#df4996" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="32" height="32" rx="10" fill="url(#footer-insta)" opacity="0.25" />
                                    <path d="M16 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm8.5-1.9a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM26 16c0-2.3-.2-3.8-.4-4.7-.2-.8-.9-1.4-1.7-1.7C22.9 9.4 16 9.4 16 9.4s-6.9 0-7.9.2c-.8.3-1.4.9-1.7 1.7-.2.9-.4 2.4-.4 4.7s0 3.8.4 4.7c.2.8.9 1.4 1.7 1.7 1.1.2 7.9.2 7.9.2s6.9 0 7.9-.2c.8-.3 1.4-.9 1.7-1.7.2-.9.4-2.4.4-4.7Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Cyber Academy Quick Links + Social */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-400">Cyber Academy</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><button onClick={() => onNavigate('home')} className="w-full text-left text-slate-300/90 transition-colors hover:text-sky-200">Home</button></li>
                            <li><button onClick={() => onNavigate('defensive-security')} className="w-full text-left text-slate-300/90 transition-colors hover:text-sky-200">Defensive Security Professional</button></li>
                            <li><button onClick={() => onNavigate('offensive-security')} className="w-full text-left text-slate-300/90 transition-colors hover:text-sky-200">Offensive Security Professional</button></li>
                            <li><button onClick={() => onNavigate('specialized-addons')} className="w-full text-left text-slate-300/90 transition-colors hover:text-sky-200">Specialized Add-ons</button></li>
                        </ul>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300/80 shadow-[0_20px_60px_-40px_rgba(14,20,45,0.85)]">
                            <div className="font-semibold text-slate-100">Need quick help?</div>
                            <p className="mt-1 leading-relaxed">Ping us through WhatsApp or join our bi-weekly orientation to understand how the cohorts run.</p>
                            <button
                                type="button"
                                onClick={() => onNavigate('contact')}
                                className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100 transition-colors hover:bg-sky-500/25"
                            >
                                WhatsApp Team
                            </button>
                        </div>
                    </div>

                    {/* Column 3: Institute Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-400">Technology Institute</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><button onClick={() => onNavigate('full-stack-dev')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Full Stack Development</button></li>
                            <li><button onClick={() => onNavigate('multi-cloud-devops')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Multi-Cloud DevOps</button></li>
                            <li><button onClick={() => onNavigate('ai-data-science')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">AI &amp; ML</button></li>
                            <li><button onClick={() => onNavigate('data-science')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Data Science &amp; Analytics</button></li>
                            <li><button onClick={() => onNavigate('mobile-dev')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Mobile Development</button></li>
                            <li><button onClick={() => onNavigate('database-management')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Database Management &amp; SQL</button></li>
                            <li><button onClick={() => onNavigate('programming-with-dsa')} className="w-full text-left text-slate-300/90 transition-colors hover:text-cyan-200">Programming with DSA</button></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Policies */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-400">Policies</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><button onClick={() => onNavigate('terms')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Terms &amp; Conditions</button></li>
                            <li><button onClick={() => onNavigate('privacy')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Privacy Policy</button></li>
                            <li><button onClick={() => onNavigate('cancellationRefund')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Cancellation &amp; Refund Policy</button></li>
                            <li><button onClick={() => onNavigate('shipping')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Shipping Policy</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Contact Us</button></li>
                            <li><button onClick={() => onNavigate('disclaimer')} className="w-full text-left text-slate-300/90 transition-colors hover:text-emerald-200">Disclaimer</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Floating Scroll Buttons (bottom left) */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
                <button
                    aria-label="Scroll to top"
                    onClick={scrollToTop}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition-all duration-300 hover:border-sky-400/50 hover:text-sky-200"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <button
                    aria-label="Scroll to bottom"
                    onClick={scrollToBottom}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition-all duration-300 hover:border-emerald-400/50 hover:text-emerald-200"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div className="relative mt-16 border-t border-white/10">
                <div className="container mx-auto px-6 py-10 text-center text-sm text-slate-400">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Agnidhra Technologies</div>
                    <div className="mt-3 text-base font-semibold text-white">&copy; {new Date().getFullYear()} All rights reserved.</div>
                    <div className="mt-2 text-xs text-slate-500">
                        Certification names and logos belong to their respective owners. Used here for identification purposes only.
                    </div>
                </div>
            </div>
        </footer>
    );
}
