
function getDomainFromURL(url) {
  try {
    const urlObj = new URL(url);
    console.log("urlObj.hostname", urlObj.hostname);
    return urlObj.hostname; // Extracts the domain
  } catch (e) {
    console.log("Invalid URL passed to getDomainFromURL:", url, e.message);
    return "default"; // Return null for invalid URLs
  }
}

const defaults = { enabled: false, amountOfSpaces: 1, replacementPercentage: 100, kanaType: "Hiragana", useBasics: true, useVariants: true, useCombinations: true }