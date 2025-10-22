import React from 'react';
import { ArrowLeft, XCircle, RefreshCcw, PhoneCall, AlertTriangle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function PaymentFailedPage({ onNavigate }) {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <div className="container mx-auto px-6 pt-8">
                <div className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
                    <span className="text-slate-500">/</span>
                    <span className="text-rose-400">Payment Issue</span>
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
                        <div className="absolute inset-y-0 left-0 w-24 bg-rose-500/10 blur-3xl"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-orange-500/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="hero-icon bg-gradient-to-r from-rose-500 to-orange-500 shadow-lg">
                                <XCircle className="w-10 h-10 text-white" />
                            </div>
                            <SectionTitle className="mb-4">Trouble Processing Payment</SectionTitle>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                                We could not confirm your transaction. This usually happens due to network delays or banking limits. Your seat is still reserved for the next 24 hours.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
                                <span className="chip bg-rose-500/20 text-rose-300 border-rose-500/30">No charges applied</span>
                                <span className="chip bg-orange-500/20 text-orange-300 border-orange-500/30">Seat on hold</span>
                                <span className="chip bg-slate-500/20 text-slate-300 border-slate-500/30">Secure checkout</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                        <div className="bg-slate-800/80 border border-rose-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <RefreshCcw className="w-6 h-6 text-rose-400 mr-2" />
                                Try Again
                            </h3>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li>• Check that your card or UPI app has sufficient balance and daily limits.</li>
                                <li>• Refresh this page after 1 minute and attempt the payment once more.</li>
                                <li>• If the amount was debited, it will auto-refund within 24-72 hours.</li>
                            </ul>
                            <button
                                onClick={() => onNavigate('enroll')}
                                className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold hover:from-rose-400 hover:to-orange-400 transition-colors"
                            >
                                Retry Payment
                            </button>
                        </div>
                        <div className="bg-slate-800/80 border border-orange-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <PhoneCall className="w-6 h-6 text-orange-400 mr-2" />
                                Need Live Help?
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Share your transaction reference with our support team and we will manually verify or guide you through an alternate payment option.
                            </p>
                            <div className="space-y-2 text-sm text-slate-200">
                                <div>📞 +91-7331123651</div>
                                <div>💬 WhatsApp: +91-7331123651</div>
                                <div>✉️ agnidhra.contact@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                        Still charged? Share your UTR/transaction ID via WhatsApp so we can reconcile it immediately.
                    </div>
                </div>
            </div>
        </div>
    );
}
