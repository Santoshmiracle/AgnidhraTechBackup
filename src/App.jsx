import WhatsAppContactButton from './components/WhatsAppContactButton.jsx';
import React, { useState, useEffect } from 'react';

// Import all the page and layout components using the '@' alias
// This pathing is configured in vite.config.js and jsconfig.json
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';
import DisclaimerPage from '@/pages/DisclaimerPage.jsx';
import EnrollUsPage from '@/pages/EnrollUsPage.jsx';

// Academy Pages
import DefensiveSecurityPage from '@/pages/academy/DefensiveSecurityPage.jsx';
import OffensiveSecurityPage from '@/pages/academy/OffensiveSecurityPage.jsx';
import SpecializedAddonsPage from '@/pages/academy/SpecializedAddonsPage.jsx';

// Institute Pages
import FullStackDevPage from '@/pages/institute/FullStackDevPage.jsx';
import DataSciencePage from '@/pages/institute/DataSciencePage.jsx';
import MultiCloudDevOpsPage from '@/pages/institute/MultiCloudDevOpsPage.jsx';
import AIMLPage from '@/pages/institute/AIMLPage.jsx';
import MobileDevPage from '@/pages/institute/MobileDevPage.jsx';
import ProgrammingWithDSA from '@/pages/institute/programmingwithdsa.jsx';
import DatabaseManagementPage from '@/pages/institute/DatabaseManagementPage.jsx';

// Other Pages
import AboutPage from '@/pages/AboutPage.jsx';
import TeamPage from '@/pages/TeamPage.jsx';
import CareersPage from '@/pages/CareersPage.jsx';
import EventsPage from '@/pages/EventsPage.jsx';
import BatchesPage from '@/pages/BatchesPage.jsx';
import ContactUsPage from '@/pages/ContactUsPage.jsx';
import CollegeTrainingPage from '@/pages/CollegeTrainingPage.jsx';
import AdminReconciliations from '@/pages/AdminReconciliations.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import ShippingPage from '@/pages/ShippingPage.jsx';
import CancellationRefundPage from '@/pages/CancellationRefundPage.jsx';
import PaymentSuccessPage from '@/pages/PaymentSuccessPage.jsx';
import PaymentFailedPage from '@/pages/PaymentFailedPage.jsx';

/**
 * App.jsx is the root component of the application.
 * It acts as a simple router to manage which "page" is currently visible.
 */
export default function App() {
    // 'currentPage' state determines which component to render. 'home' is the default.
    const [currentPage, setCurrentPage] = useState('home');

    // This effect runs whenever the currentPage changes, ensuring the user
    // is scrolled to the top of the new page they navigate to.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    // This function acts as a router. Based on the 'currentPage' state,
    // it returns the correct page component to be displayed.
    const renderPage = () => {
        switch (currentPage) {
            // Academy Pages
            case 'defensive-security':
                return <DefensiveSecurityPage onNavigate={setCurrentPage} />;
            case 'offensive-security':
                return <OffensiveSecurityPage onNavigate={setCurrentPage} />;
            case 'multi-cloud-devops':
                return <MultiCloudDevOpsPage onNavigate={setCurrentPage} />;
            /* SOC Analyst Bootcamp removed - route no longer available */
            case 'specialized-addons':
                return <SpecializedAddonsPage onNavigate={setCurrentPage} />;

            // Institute Pages
            case 'full-stack-dev':
                return <FullStackDevPage onNavigate={setCurrentPage} />;
            case 'data-science':
                return <DataSciencePage onNavigate={setCurrentPage} />;
            case 'cloud-devops':
                return <MultiCloudDevOpsPage onNavigate={setCurrentPage} />;
            case 'ai-data-science':
                return <AIMLPage onNavigate={setCurrentPage} />;
            case 'mobile-dev':
                return <MobileDevPage onNavigate={setCurrentPage} />;
            case 'programming-with-dsa':
                return <ProgrammingWithDSA onNavigate={setCurrentPage} />;
            case 'database-management':
                return <DatabaseManagementPage onNavigate={setCurrentPage} />;

            // Other Pages
            case 'about':
                return <AboutPage onNavigate={setCurrentPage} />;
            case 'team':
                return <TeamPage onNavigate={setCurrentPage} />;
            case 'careers':
                return <CareersPage onNavigate={setCurrentPage} />;
            case 'events':
                return <EventsPage onNavigate={setCurrentPage} />;
            case 'batches':
                return <BatchesPage onNavigate={setCurrentPage} />;
            case 'contact':
                return <ContactUsPage onNavigate={setCurrentPage} />;
            case 'college-training':
                return <CollegeTrainingPage onNavigate={setCurrentPage} />;

            // Legacy Pages
            case 'terms':
                return <TermsPage onNavigate={setCurrentPage} />;
            case 'disclaimer':
                return <DisclaimerPage onNavigate={setCurrentPage} />;
            case 'paymentSuccess':
                return <PaymentSuccessPage onNavigate={setCurrentPage} />;
            case 'paymentFailed':
                return <PaymentFailedPage onNavigate={setCurrentPage} />;
            case 'cancellationRefund':
                return <CancellationRefundPage onNavigate={setCurrentPage} />;
            case 'shipping':
                return <ShippingPage onNavigate={setCurrentPage} />;
            case 'privacy':
                return <PrivacyPage onNavigate={setCurrentPage} />;
            case 'enroll':
                return <EnrollUsPage onNavigate={setCurrentPage} />;
            case 'admin-reconciliations':
                return <AdminReconciliations onNavigate={setCurrentPage} />;
            case 'home':
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    // Diwali Discount Banner - Global, above Header
    const [showDiwaliBanner, setShowDiwaliBanner] = useState(false);

    useEffect(() => {
        try {
            const dismissed = localStorage.getItem('diwaliBannerDismissed');
            setShowDiwaliBanner(!dismissed);
        } catch (e) {
            setShowDiwaliBanner(true);
        }
    }, []);

    const dismissDiwaliBanner = () => {
        try { localStorage.setItem('diwaliBannerDismissed', '1'); } catch (e) {}
        setShowDiwaliBanner(false);
    };

    const diwaliBanner = showDiwaliBanner && currentPage === 'home' && (
        <div className="relative z-50 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-b-2 border-orange-500/30">
            {/* Dismiss / close */}
            <button onClick={dismissDiwaliBanner} aria-label="Dismiss" className="absolute right-4 top-2 text-orange-200 hover:text-white">
                ×
            </button>
            <div className="flex items-center justify-center space-x-4 max-w-4xl mx-auto">
                <div className="text-3xl animate-bounce">🪔</div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-orange-400 mb-1">🎉 Diwali Special Offer!</h2>
                    <p className="text-orange-200 text-sm">Get <strong className="text-white">20% OFF</strong> on all courses this festive season!</p>
                    <button
                        onClick={() => { localStorage.setItem('selectedCourse', 'General Enrollment'); setCurrentPage('enroll'); }}
                        className="mt-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm"
                    >
                        Enroll Now & Save 20% 🪔
                    </button>
                </div>
                <div className="text-3xl animate-bounce">🪔</div>
            </div>
        </div>
    );

    return (
        <div className="bg-slate-900 antialiased">
            {diwaliBanner}
            {/* The Header and Footer wrap the currently active page. */}
            <Header onNavigate={setCurrentPage} currentPage={currentPage} />
            <main>
                {renderPage()}
            </main>
            <WhatsAppContactButton variant="floating" />
            <Footer onNavigate={setCurrentPage} />
        </div>
    );
}

