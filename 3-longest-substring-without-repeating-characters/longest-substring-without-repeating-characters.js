/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If duplicate found, shrink window from the left until no duplicate
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        // Add current character and update max length
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

};