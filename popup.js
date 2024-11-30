document.addEventListener("DOMContentLoaded", () => {
  const enabledCheckbox = document.getElementById("enabled");
  const kanaTypeSelect = document.getElementById("kanaType");
  const useBasicsCheckbox = document.getElementById("useBasics");
  const useVariantsCheckbox = document.getElementById("useVariants");
  const useCombinationsCheckbox = document.getElementById("useCombinations");

  // Load saved options from Chrome Storage
  chrome.storage.sync.get(
    { enabled: true, kanaType: "hg", useBasics:true, useVariants: true, useCombinations: true },
    (options) => {
      enabledCheckbox.checked = options.enabled;
      kanaTypeSelect.value = options.kanaType;
      useBasicsCheckbox.checked = options.useBasics;
      useVariantsCheckbox.checked = options.useVariants;
      useCombinationsCheckbox.checked = options.useCombinations;
    }
  );


  // Function to save options to Chrome Storage
  const saveOptions = () => {
    const enabled = enabledCheckbox.checked;
    const kanaType = kanaTypeSelect.value;
    const useBasics = useBasicsCheckbox.checked;
    const useVariants = useVariantsCheckbox.checked;
    const useCombinations = useCombinationsCheckbox.checked;
    const options = { enabled, kanaType, useBasics, useVariants, useCombinations };
    chrome.storage.sync.set(options);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "optionsChanged", options });
      }
    });
  };

  // Save options automatically when the user changes any setting
  enabledCheckbox.addEventListener("change", saveOptions);
  kanaTypeSelect.addEventListener("change", saveOptions);
  useBasicsCheckbox.addEventListener("change", saveOptions);
  useVariantsCheckbox.addEventListener("change", saveOptions);
  useCombinationsCheckbox.addEventListener("change", saveOptions);
});

