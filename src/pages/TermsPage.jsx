import React from 'react';
import { FileText } from 'lucide-react';
import PolicyLayout from '@/components/PolicyLayout';

export default function TermsPage({ onNavigate }) {
    return (
        <PolicyLayout
            onNavigate={onNavigate}
            title="Terms and Conditions"
            description="Please review these terms carefully before using our services or enrolling in any cohort. We keep every policy transparent and easy to read."
            icon={FileText}
            badges={["Legal Compliance", "Transparent", "Fair Terms", "User Protection"]}
            lastUpdated="September 29, 2025"
        >
            <p>Welcome to Agnidhra Technologies. These terms and conditions outline the rules and regulations for the use of our website and the enrollment in our courses.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">1. Enrollment and Access</h3><p>Upon enrolling in a course, you are granted a limited, non-transferable license to access the course materials for personal, non-commercial use. You agree not to share, distribute, or resell any course content.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">2. Payments and Refunds</h3><p>All payments for courses are to be made in full prior to the commencement of the course unless otherwise specified. Our refund policy is detailed on the course enrollment page and is subject to change.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">3. Intellectual Property</h3><p>The content, curriculum, and materials provided in our courses are the intellectual property of Agnidhra Technologies. You may not reproduce, duplicate, or copy any part of our service without express written permission from us.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">4. Limitation of Liability</h3><p>While we strive to provide the most accurate and up-to-date information, Agnidhra Technologies does not guarantee employment or any specific career outcome upon completion of a course. Our programs are designed to enhance skills and knowledge in the respective fields.</p>
            <h3 className="text-xl font-bold text-sky-400 pt-4">5. Governing Law</h3><p>These terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Andhra Pradesh for the resolution of any disputes.</p>
        </PolicyLayout>
    );
}

