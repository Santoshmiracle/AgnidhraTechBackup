import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Gift, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function PaymentSuccessPage({ onNavigate }) {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <div className="container mx-auto px-6 pt-8">
                <div className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
                    <span className="text-slate-500">/</span>
                    <span className="text-emerald-400">Payment Success</span>
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

                <div className="max-w-4xl mx-auto">
                    <div className="hero-card overflow-hidden relative text-center">
                        <div className="absolute inset-y-0 left-0 w-24 bg-emerald-500/10 blur-3xl"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-sky-500/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="hero-icon bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
                                <CheckCircle2 className="w-10 h-10 text-white" />
                            </div>
                            <SectionTitle className="mb-4">Payment Confirmed</SectionTitle>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                                Thank you for completing your enrollment payment. Our admissions team has received your transaction and will reach out with next steps within 24 hours.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
                                <span className="chip bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Receipt emailed</span>
                                <span className="chip bg-sky-500/20 text-sky-300 border-sky-500/30">Seat reserved</span>
                                <span className="chip bg-purple-500/20 text-purple-300 border-purple-500/30">Next steps shared</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-slate-800/80 border border-emerald-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-emerald-400 mr-2" />
                                What happens next?
                            </h3>
                            <ul className="space-y-3 text-slate-300 text-sm text-left">
                                <li>• You will receive a confirmation email with your enrollment ID.</li>
                                <li>• A counselor will contact you to schedule orientation.</li>
                                <li>• Course materials and LMS access will be granted before the batch starts.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/80 border border-sky-500/20 rounded-2xl p-6 text-left">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <Gift className="w-6 h-6 text-sky-400 mr-2" />
                                Need anything else?
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                If you have additional documents to share or want to speak with the mentor team, reach out on our support channels. We are available Monday–Saturday, 9 AM – 7 PM IST.
                            </p>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-400 hover:to-teal-400 transition-colors"
                            >
                                Contact Support
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => onNavigate('enroll')}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                        >
                            <Sparkles className="w-5 h-5" />
                            Explore Add-on Programs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
