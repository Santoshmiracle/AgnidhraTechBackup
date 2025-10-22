const ACCENTS = {
    default: {
        breadcrumbLink: 'text-slate-400 hover:text-slate-200',
        breadcrumbIcon: 'text-slate-500',
        breadcrumbCurrent: 'text-slate-200',
        backText: 'text-slate-300 hover:text-slate-200',
        backIcon: 'text-slate-200'
    },
    institute: {
        breadcrumbCurrent: 'text-indigo-300',
        breadcrumbIcon: 'text-indigo-400',
        backText: 'text-purple-300 hover:text-purple-200',
        backIcon: 'text-purple-200'
    },
    academy: {
        breadcrumbCurrent: 'text-emerald-300',
        breadcrumbIcon: 'text-emerald-400',
        backText: 'text-teal-300 hover:text-teal-200',
        backIcon: 'text-teal-200'
    },
    info: {
        breadcrumbCurrent: 'text-sky-300',
        breadcrumbIcon: 'text-sky-400',
        backText: 'text-amber-300 hover:text-amber-200',
        backIcon: 'text-amber-200'
    }
};

export function getPageAccents(key = 'default', overrides = {}) {
    const base = ACCENTS.default;
    const theme = ACCENTS[key] || {};
    return { ...base, ...theme, ...overrides };
}

export default ACCENTS;
