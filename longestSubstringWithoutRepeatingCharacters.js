/* Given a string s, find the length of the longest 
substring
without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */



var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let begin = 0; begin < s.length; begin++) {
    for (let end = begin; end < s.length; end++) {
      const substring = s.substring(begin, end + 1);
      if (isUnique(substring)) {
        max = Math.max(max, substring.length);
      }
    }
  }
  return max;
};
