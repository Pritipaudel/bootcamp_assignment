function countVowels() {
    const word = document.getElementById("wordInput").value;
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (let char of word) {
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }
    }

    document.getElementById("result").textContent = "Number of vowels: " + vowelCount;
}