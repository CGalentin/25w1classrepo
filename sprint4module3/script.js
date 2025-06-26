//create a function to find the index of the first non repeating character

const { questionPath } = require("readline-sync");

function firstUniqChar(s) {
    const frequency = {};

    //Step2: create a for loop to count char frequencies using for...of loop
    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    //Step 3: Find first character with a freq of 1
    for(let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {
            return i; //Found unique character, return it's index
        }
    }

    return -1; //no unique character has been found
}

console.log(firstUniqChar("leetcode"));
//{l: 1, e: 3, t: 1, c: 1, o:1, d:1 }
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("abba"));


const str = "hello";

for (let char of str) {
    console.log(char)
}

for (let i = 0; i < str.length; i++) {
    console.log(i, str[i]);
}

const nums = [1,2,10,20,30];

for (let num of nums) {
    console.log(num);
}

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    nums[i] *= 2//double each element
}
console.log(nums);

//Given a sorted array nums, remove duplicates in-place so that each element only appears once. Return the new length

function removeDuplicates(nums) {
    let insertPos = 1; //Position to insert the next unique element

    //Start loop from second element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[insertPos] = nums[i] //our unique element
            insertPos++
        }
    }
    return insertPos //number of unique elements stored 
}

const arr1 = [0,0,1,1,2,2,3 ]
console.log(removeDuplicates(arr1))

const arr2 = [0, 1, 2, 3]
console.log(removeDuplicates(arr2))

questionPath                                        `
`
