document.addEventListener("DOMContentLoaded", () => {
  const enabledCheckbox = document.getElementById("enabled");
  const amountOfSpacesSlider = document.getElementById("amountOfSpaces");
  let showAmountOfSpaces = document.getElementById("showAmountOfSpaces");
  const replacementPercentageSlider = document.getElementById("replacementPercentage");
  let showPercentage = document.getElementById("showPercentage");
  const kanaTypeSelect = document.getElementById("kanaType");
  const useBasicsCheckbox = document.getElementById("useBasics");
  const useVariantsCheckbox = document.getElementById("useVariants");
  const useCombinationsCheckbox = document.getElementById("useCombinations");

  // Get the active tab and its domain
  chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
    if (tabs.length === 0) return;
    const domain = getDomainFromURL(tabs[0].url);

    // Load saved options from Chrome Storage
    chrome.storage.sync.get([domain],
      (result) => {
        const siteOptions = result[domain] || defaults
        enabledCheckbox.checked = siteOptions.enabled;
        amountOfSpacesSlider.value = siteOptions.amountOfSpaces;
        showAmountOfSpaces.textContent = siteOptions.amountOfSpaces;
        replacementPercentageSlider.value = siteOptions.replacementPercentage;
        showPercentage.textContent = siteOptions.replacementPercentage;
        kanaTypeSelect.value = siteOptions.kanaType;
        useBasicsCheckbox.checked = siteOptions.useBasics;
        useVariantsCheckbox.checked = siteOptions.useVariants;
        useCombinationsCheckbox.checked = siteOptions.useCombinations;
      }
    );


    // Function to save options to Chrome Storage
    const saveOptions = () => {
      const enabled = enabledCheckbox.checked;
      const amountOfSpaces = amountOfSpacesSlider.value;
      showAmountOfSpaces.textContent = amountOfSpaces
      const replacementPercentage = replacementPercentageSlider.value;
      showPercentage.textContent = replacementPercentage
      const kanaType = kanaTypeSelect.value;
      const useBasics = useBasicsCheckbox.checked;
      const useVariants = useVariantsCheckbox.checked;
      const useCombinations = useCombinationsCheckbox.checked;
      const siteOptions = { enabled, amountOfSpaces, replacementPercentage, kanaType, useBasics, useVariants, useCombinations };
      chrome.storage.sync.set({ [domain]: siteOptions });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "optionsChanged", siteOptions });
      });
    };

    // Save options automatically when the user changes any setting
    enabledCheckbox.addEventListener("change", saveOptions);
    amountOfSpacesSlider.addEventListener("change", saveOptions);
    replacementPercentageSlider.addEventListener("change", saveOptions);
    kanaTypeSelect.addEventListener("change", saveOptions);
    useBasicsCheckbox.addEventListener("change", saveOptions);
    useVariantsCheckbox.addEventListener("change", saveOptions);
    useCombinationsCheckbox.addEventListener("change", saveOptions);
  });
});