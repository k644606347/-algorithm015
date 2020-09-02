// O(n) + O(?) + O(n) + O(n) + O(?) + O(n)
// function isAnagram(s: string, t: string): boolean {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    const map: {[k in string]: number} = {},
        arr1 = s.split(''),
        arr2 = t.split('');

    
    // O(n)
    arr1.forEach((item1, i) => {
        const item2 = arr2[i];

        map[item1] = map[item1] !== undefined ? map[item1] + 1 : 1;
        map[item2] = map[item2] !== undefined ? map[item2] - 1 : -1;
    });

    // O(n)
    for (let k in map) {
        if (map[k] !== 0)
            return false;
    }

    return true
};
