import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getPageAccents } from '@/utils/pageAccents';

export default function PageBreadcrumb({
    path = [],
    onBack,
    backLabel = 'Back to Home',
    accentKey = 'default',
    accentOverrides = {}
}) {
    const theme = getPageAccents(accentKey, accentOverrides);

    return (
        <>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6">
                {path.map((item, idx) => {
                    const isLast = idx === path.length - 1;
                    const ButtonTag = item.onClick ? 'button' : 'span';
                    const className = isLast
                        ? `font-medium ${theme.breadcrumbCurrent}`
                        : `transition-colors ${theme.breadcrumbLink}`;

                    return (
                        <React.Fragment key={`${item.label}-${idx}`}>
                            <ButtonTag
                                type={item.onClick ? 'button' : undefined}
                                onClick={item.onClick}
                                className={className}
                            >
                                {item.label}
                            </ButtonTag>
                            {!isLast && (
                                <ChevronRight size={16} className={theme.breadcrumbIcon} />
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>
            {onBack && (
                <button
                    type="button"
                    onClick={onBack}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors mb-8 group ${theme.backText}`}
                >
                    <ArrowLeft
                        size={18}
                        className={`transition-transform group-hover:-translate-x-1 ${theme.backIcon}`}
                    />
                    {backLabel}
                </button>
            )}
        </>
    );
}
