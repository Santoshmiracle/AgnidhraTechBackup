// Small helper to centralize the localStorage handshake keys used between pages
export const SELECTED_COURSE_KEY = 'selectedCourse';
export const SELECTED_ADDON_KEY = 'selectedAddon';

export function setSelectedCourse(value) {
  try { localStorage.setItem(SELECTED_COURSE_KEY, value); } catch (e) {}
}

export function getSelectedCourse() {
  try { return localStorage.getItem(SELECTED_COURSE_KEY) || null; } catch (e) { return null; }
}

export function clearSelectedCourse() {
  try { localStorage.removeItem(SELECTED_COURSE_KEY); } catch (e) {}
}

export function setSelectedAddon(value) {
  try { localStorage.setItem(SELECTED_ADDON_KEY, value); } catch (e) {}
}

export function getSelectedAddon() {
  try { return localStorage.getItem(SELECTED_ADDON_KEY) || null; } catch (e) { return null; }
}

export function clearSelectedAddon() {
  try { localStorage.removeItem(SELECTED_ADDON_KEY); } catch (e) {}
}

export default { setSelectedCourse, getSelectedCourse, clearSelectedCourse, setSelectedAddon, getSelectedAddon, clearSelectedAddon };
