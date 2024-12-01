// Define a list of words to replace and their replacements
const prepare = {
    "ä": { "hg": "ae", "kk": "ae" },
    "ö": { "hg": "oe", "kk": "oe" },
    "ü": { "hg": "ue", "kk": "ue" },
    "ß": { "hg": "ss", "kk": "ss" },
    " ": { "hg": "‌ ‌ ‌ ‌", "kk": "‌ ‌ ‌ ‌" }
};

const basicThree = {
    "shi": { "hg": "し", "kk": "シ" },
    "chi": { "hg": "ち", "kk": "チ" },
    "tsu": { "hg": "つ", "kk": "ツ" },
};

const basicTwo = {
    "sa": { "hg": "さ", "kk": "サ" },
    "su": { "hg": "す", "kk": "ス" },
    "se": { "hg": "せ", "kk": "セ" },
    "so": { "hg": "そ", "kk": "ソ" },

    "ta": { "hg": "た", "kk": "タ" },
    "te": { "hg": "て", "kk": "テ" },
    "to": { "hg": "と", "kk": "ト" },

    "ka": { "hg": "か", "kk": "カ" },
    "ki": { "hg": "き", "kk": "キ" },
    "ku": { "hg": "く", "kk": "ク" },
    "ke": { "hg": "け", "kk": "ケ" },
    "ko": { "hg": "こ", "kk": "コ" },

    "na": { "hg": "な", "kk": "ナ" },
    "ni": { "hg": "に", "kk": "ニ" },
    "nu": { "hg": "ぬ", "kk": "ヌ" },
    "ne": { "hg": "ね", "kk": "ネ" },
    "no": { "hg": "の", "kk": "ノ" },

    "ha": { "hg": "は", "kk": "ハ" },
    "hi": { "hg": "ひ", "kk": "ヒ" },
    "fu": { "hg": "ふ", "kk": "フ" },
    "he": { "hg": "へ", "kk": "ヘ" },
    "ho": { "hg": "ほ", "kk": "ホ" },

    "ma": { "hg": "ま", "kk": "マ" },
    "mi": { "hg": "み", "kk": "ミ" },
    "mu": { "hg": "む", "kk": "ム" },
    "me": { "hg": "め", "kk": "メ" },
    "mo": { "hg": "も", "kk": "モ" },

    "ya": { "hg": "や", "kk": "ヤ" },
    "yu": { "hg": "ゆ", "kk": "ユ" },
    "yo": { "hg": "よ", "kk": "ヨ" },

    "ra": { "hg": "ら", "kk": "ラ" },
    "ri": { "hg": "り", "kk": "リ" },
    "ru": { "hg": "る", "kk": "ル" },
    "re": { "hg": "れ", "kk": "レ" },
    "ro": { "hg": "ろ", "kk": "ロ" },

    "wa": { "hg": "わ", "kk": "ワ" },
    "wo": { "hg": "を", "kk": "ヲ" },
};

const basicOne = {
    "a": { "hg": "あ", "kk": "ア" },
    "i": { "hg": "い", "kk": "イ" },
    "u": { "hg": "う", "kk": "ウ" },
    "e": { "hg": "え", "kk": "エ" },
    "o": { "hg": "お", "kk": "オ" },
    "n": { "hg": "ん", "kk": "ン" },

};

const variantsTwo = {
    "ga": { "hg": "が", "kk": "ガ" },
    "gi": { "hg": "ぎ", "kk": "ギ" },
    "gu": { "hg": "ぐ", "kk": "グ" },
    "ge": { "hg": "げ", "kk": "ゲ" },
    "go": { "hg": "ご", "kk": "ゴ" },

    "za": { "hg": "ざ", "kk": "ザ" },
    "ji": { "hg": "じ", "kk": "ジ" },
    "zu": { "hg": "ず", "kk": "ズ" },
    "ze": { "hg": "ぜ", "kk": "ゼ" },
    "zo": { "hg": "ぞ", "kk": "ゾ" },

    "da": { "hg": "だ", "kk": "ダ" },
    "ji": { "hg": "ぢ", "kk": "ヂ" },
    "zu": { "hg": "づ", "kk": "ヅ" },
    "de": { "hg": "で", "kk": "デ" },
    "do": { "hg": "ど", "kk": "ド" },

    "ba": { "hg": "ば", "kk": "バ" },
    "bi": { "hg": "び", "kk": "ビ" },
    "bu": { "hg": "ぶ", "kk": "ブ" },
    "be": { "hg": "べ", "kk": "ベ" },
    "bo": { "hg": "ぼ", "kk": "ボ" },

    "pa": { "hg": "ぱ", "kk": "パ" },
    "pi": { "hg": "ぴ", "kk": "ピ" },
    "pu": { "hg": "ぷ", "kk": "プ" },
    "pe": { "hg": "ぺ", "kk": "ペ" },
    "po": { "hg": "ぽ", "kk": "ポ" },

};

const combinationsThree = {
    "kya": { "hg": "きゃ", "kk": "キャ" },
    "kyu": { "hg": "きゅ", "kk": "キュ" },
    "kyo": { "hg": "きょ", "kk": "キョ" },

    "sha": { "hg": "しゃ", "kk": "シャ" },
    "shu": { "hg": "しゅ", "kk": "シュ" },
    "sho": { "hg": "しょ", "kk": "ショ" },

    "cha": { "hg": "ちゃ", "kk": "チャ" },
    "chu": { "hg": "ちゅ", "kk": "チュ" },
    "cho": { "hg": "ちょ", "kk": "チョ" },

    "nya": { "hg": "にゃ", "kk": "ニャ" },
    "nyu": { "hg": "にゅ", "kk": "ニュ" },
    "nyo": { "hg": "にょ", "kk": "ニョ" },

    "hya": { "hg": "ひゃ", "kk": "ヒャ" },
    "hyu": { "hg": "ひゅ", "kk": "ヒュ" },
    "hyo": { "hg": "ひょ", "kk": "ヒョ" },

    "mya": { "hg": "みゃ", "kk": "ミャ" },
    "myu": { "hg": "みゅ", "kk": "ミュ" },
    "myo": { "hg": "みょ", "kk": "ミョ" },

    "rya": { "hg": "りゃ", "kk": "ミャ" },
    "ryu": { "hg": "りゅ", "kk": "ミュ" },
    "ryo": { "hg": "りょ", "kk": "ミョ" },

    "gya": { "hg": "ぎゃ", "kk": "ギャ" },
    "gyu": { "hg": "ぎゅ", "kk": "ギュ" },
    "gyo": { "hg": "ぎょ", "kk": "ギョ" },

    "bya": { "hg": "びゃ", "kk": "ビャ" },
    "byu": { "hg": "びゅ", "kk": "ビュ" },
    "byo": { "hg": "びょ", "kk": "ビョ" },

    "pya": { "hg": "ぴゃ", "kk": "ピャ" },
    "pyu": { "hg": "ぴゅ", "kk": "ピュ" },
    "pyo": { "hg": "ぴょ", "kk": "ピョ" },
}
const combinationsTwo = {

    "ja": { "hg": "じゃ", "kk": "ジャ" },
    "ju": { "hg": "じゅ", "kk": "ジュ" },
    "jo": { "hg": "じょ", "kk": "ジョ" },
}
let syllablesHistogram = {}
// Function to recursively replace text in text nodes
function replaceText(node, options) {
    if (!options.enabled) return; // Exit if the addon is disabled

    const wordMap = Object.assign(
        prepare,
        options.useBasics ? basicThree : {},
        options.useCombinations ? combinationsThree : {},
        options.useBasics ? basicTwo : {},
        options.useVariants ? variantsTwo : {},
        options.useCombinations ? combinationsTwo : {},
        options.useBasics ? basicOne : {},
    );

    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;

        // Replace words from the map
        for (const [target, kana] of Object.entries(wordMap)) {
            const random = Math.random()
            if (random <= (options.replacementPercentage / 100)) {
                let kanaType
                if (options.kanaType == "Hiragana") {
                    kanaType = "hg";
                }
                if (options.kanaType == "Katakana") {
                    kanaType = "kk";
                }
                const regex = new RegExp(target, 'gi'); // Match whole words, case-insensitive
                var count = (text.match(regex) || []).length
                addAmount(syllablesHistogram, target, count)
                text = text.replace(regex, kana[kanaType])
            }
        }

        node.nodeValue = text;
    } else {
        // Process child nodes recursively
        node.childNodes.forEach((childNodes) => replaceText(childNodes, options));
    }
}

function addAmount(histogram, key, amount) {
    if (amount > 0) {
        if (key in histogram) {
            histogram[key] = histogram[key] + amount
        } else {
            histogram[key] = amount
        }
    }
}

function printHistogram(histogram) {
    let sortable = [];
    for (var value in histogram) {
        sortable.push([value, histogram[value]])
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    //console.log(sortable)
    console.log("\n")
    sum = 0
    sortable.forEach(
        (x) => {
            console.log(x[0], x[1])
            if (x[0] != " ") {
                sum += x[0].length * x[1]
            }

        }
    )
    return sum
}


let notReplacedHistogram = {}
function findNotReplacedText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;
        const regex = new RegExp(/[a-z]+/, 'gi'); // Match whole words, case-insensitive
        results = text.match(regex)
        if (results != null) {
            results.forEach((value) => addAmount(notReplacedHistogram, value, 1))
        }
    } else {
        // Process child nodes recursively
        node.childNodes.forEach(findNotReplacedText)
    }
}

let charCount = 0
function countChars(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;
        const regex = new RegExp(/[a-zäöüß]/, 'gi'); // Match whole words, case-insensitive
        results = text.match(regex)
        if (results != null) {
            charCount += results.length
        }
    } else {
        // Process child nodes recursively
        node.childNodes.forEach(countChars);
    }
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Triggered reload")
    if (message.action === "optionsChanged") {
        //replaceText(document.body, message.options);
        window.location.reload()
    }
});

// Initial replacement on content script load
chrome.storage.sync.get(
    { enabled: true, replacementPercentage: 100, kanaType: "Hiragana", useBasics: true, useVariants: true, useCombinations: true },
    (options) => {
        // Apply the replacement
        syllablesHistogram = {}
        notReplacedHistogram = {}
        charCount = 0
        countChars(document.body)
        replaceText(document.body, options)
        findNotReplacedText(document.body)

        let sumReplaced = printHistogram(syllablesHistogram)
        let sumNotReplaced = printHistogram(notReplacedHistogram)
        console.log(sumReplaced, sumNotReplaced, charCount)
    }
);
