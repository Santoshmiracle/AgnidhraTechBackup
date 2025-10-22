import React from 'react';
import PageBreadcrumb from '@/components/PageBreadcrumb';

export default function PolicyLayout({
    onNavigate,
    title,
    description,
    icon: Icon,
    accentKey = 'info',
    lastUpdated,
    badges = [],
    children
}) {
    return (
        <div className="theme-page">
            <section className="theme-section surface-midnight">
                <div className="container mx-auto max-w-6xl px-6 pt-8">
                    <PageBreadcrumb
                        accentKey={accentKey}
                        path={[
                            { label: 'Home', onClick: () => onNavigate('home') },
                            { label: title }
                        ]}
                        onBack={() => onNavigate('home')}
                    />
                </div>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="hero-card surface-alt">
                        {Icon && (
                            <div className="hero-icon bg-gradient-to-r from-sky-500 to-blue-600">
                                <Icon className="h-10 w-10 text-white" />
                            </div>
                        )}
                        <h1 className="hero-title">{title}</h1>
                        {description && (
                            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-200/90">
                                {description}
                            </p>
                        )}
                        {badges.length > 0 && (
                            <div className="mb-6 flex flex-wrap justify-center gap-3">
                                {badges.map((badge) => (
                                    <span key={badge} className="chip bg-white/10 text-slate-100/85">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        )}
                        {lastUpdated && (
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Last updated: {lastUpdated}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="theme-section surface-slate">
                <div className="container mx-auto px-6 pb-12 md:pb-20">
                    <div className="mx-auto max-w-5xl glass-panel p-8 text-slate-200/85 md:p-12 space-y-6">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    );
}
