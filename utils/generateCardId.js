/**
 * Generates a unique developer card ID in the format DEV-YYYY-XXXXXX
 * @returns {string} Card ID
 */
export function generateCardId() {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `DEV-${year}-${random}`;
}

/**
 * Formats a date as DD/MM/YYYY
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

/**
 * Returns the issue date (today) and expiry date (+5 years) as formatted strings.
 */
export function getCardDates() {
  const today = new Date();
  const expiry = new Date(today);
  expiry.setFullYear(expiry.getFullYear() + 5);
  return {
    issueDate: formatDate(today),
    expiryDate: formatDate(expiry),
  };
}
