import React from 'react';
import { Shield } from 'lucide-react';
import PolicyLayout from '@/components/PolicyLayout';

export default function DisclaimerPage({ onNavigate }) {
    return (
        <PolicyLayout
            onNavigate={onNavigate}
            title="Disclaimer"
            description="Please review this disclaimer carefully before using our services or enrolling in any cohort. We believe in setting clear expectations so you can make informed decisions."
            icon={Shield}
            badges={["Legal Compliance", "Transparent", "Fair Terms", "User Protection"]}
            lastUpdated="September 29, 2025"
        >
            <p>The information provided by Agnidhra Technologies on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">Professional Disclaimer</h3><p>The website cannot and does not contain financial or career advice. The information is provided for educational and informational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of career or employment guarantee.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">External Links Disclaimer</h3><p>The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</p>
        </PolicyLayout>
    );
}

