// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.
// Input:
// abcadeecfb

// Output:
// abcdef

const mySet = new Set(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'c', 'f', 'b']);
// mySet.add('a');
// mySet.add('b');
// mySet.add('c');
// mySet.add('a');
// mySet.add('d');
// mySet.add('e');
// mySet.add('e');
// mySet.add('c');
// mySet.add('f');
// mySet.add('b');
console.log('Output:',mySet);

