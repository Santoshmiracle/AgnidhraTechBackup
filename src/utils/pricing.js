// Pricing helper
// Business rules (per user):
// - Original/base price: 25,000 INR (displayed as crossed-out original)
// - Standard discounted price shown across pages: 20,000 INR
// - Diwali deeper discount: 15,000 INR for a specific subset of 3 courses
// - Add-on base price: 10,000 INR
// - If a student is enrolling from Offensive/Defensive courses, add-on price for them: 5,000 INR

const ORIGINAL_PRICE = 25000;
const STANDARD_PRICE = 20000; // price after general discount
const DIWALI_PRICE = 15000; // additional special price for select courses during Diwali
const ADDON_BASE_PRICE = 10000;
const ADDON_FOR_COURSE_STUDENT = 5000; // when student coming from Offensive/Defensive

// Courses eligible for Diwali deeper discount (only upcoming/active batches)
const DIWALI_OFFER_COURSES = [
  'Defensive Security Professional',
  'Programming with DSA',
  'Multi-Cloud DevOps Professional'
];

export function isDiwaliPeriod(now = new Date()) {
  const start = new Date('2025-10-19');
  const end = new Date('2025-11-02');
  return now >= start && now <= end;
}

/**
 * getPriceNumber(course, originCourse)
 * - course: the course being purchased (string)
 * - originCourse: optional, the course student is coming from/enrolling under (used to price addons)
 * Returns a Number (INR)
 */
export function getPriceNumber(course = '', originCourse = '') {
  // If it's an addon
    if (course && /addon|add-?ons|specialized/i.test(course)) {
    // if originCourse indicates the student is from Offensive/Defensive/Cyber/Security, give lower addon price
    if (originCourse && /(offensive|defensive|cyber|security)/i.test(originCourse)) return ADDON_FOR_COURSE_STUDENT;
    return ADDON_BASE_PRICE;
  }

  // Normalize course name
  if (!course) return STANDARD_PRICE;
  const normalized = course.trim().toLowerCase();

  // If course is among Diwali offer courses, apply Diwali price when in period
  for (const o of DIWALI_OFFER_COURSES) {
    if (normalized === o.toLowerCase()) return isDiwaliPeriod() ? DIWALI_PRICE : STANDARD_PRICE;
  }

  // Otherwise standard discounted price
  return STANDARD_PRICE;
}

export function formatRupee(n) {
  if (typeof n !== 'number') n = Number(n) || 0;
  return '₹' + n.toLocaleString('en-IN');
}

export function getFeeDisplay(course = '', originCourse = '') {
  return formatRupee(getPriceNumber(course, originCourse));
}

export function getOriginalPriceDisplay() {
  return formatRupee(ORIGINAL_PRICE);
}

// Expose standard and Diwali price numbers for UI components that need to
// display both the struck (standard) price and the Diwali discounted price.
export function getStandardPriceNumber() {
  return STANDARD_PRICE;
}

export function getDiwaliPriceNumber() {
  return DIWALI_PRICE;
}

export function isCourseDiwaliEligible(course = '') {
  if (!course) return false;
  const normalized = course.trim().toLowerCase();
  return DIWALI_OFFER_COURSES.some((c) => c.toLowerCase() === normalized);
}

export default { isDiwaliPeriod, getPriceNumber, formatRupee, getFeeDisplay, getOriginalPriceDisplay, getStandardPriceNumber, getDiwaliPriceNumber, isCourseDiwaliEligible };
