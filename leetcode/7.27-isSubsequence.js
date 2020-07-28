/**
 * @function isSubsequence
 * @description For find the sub from an area
 * @explaination Start index from i, j to use two probe , when two probs end can show the result
 */
function isSubsequence(s, t) {
    // get the length of each side
    let n = s.length, m = t.length
    let i = 0, j = 0;
    // while loop
    while (i < n && j < m) {
        if (s.charAt(i) == t.charAt(j)) {
            i++; // if find one, i count once
        }
        j++;
    }
    return i == n; // if i equals the total length of s, which means all has be found.
}

// console.log(isSubsequence('avc', 'abveasdc123'));

