function groupAnagrams(words) {
    const groupedAnagrams = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');

        if (groupedAnagrams[sortedWord]) {
            groupedAnagrams[sortedWord].push(word);
        } else {
            groupedAnagrams[sortedWord] = [word];
        }
    }

    return Object.values(groupedAnagrams);
}

const result = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
console.log(result);
