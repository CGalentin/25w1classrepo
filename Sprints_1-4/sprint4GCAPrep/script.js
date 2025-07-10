/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3,4], target = 6
Output: [0,1]  */

//Code Below No. 1

function twoSums(nums,target) {
    //Loop through each element of the array
    for (let i = 0; i < nums.length; i++) {
        //Loop through the remaining elements
        for (j = i + 1; j < nums.length; j++) {
            //If the two numbers add up the target, return their indices
            if (nums[i] + nums[j] === target)  {
                return [i, j];
            }
        }
    }
}

// function twoSum(nums, target) {
//     let numMap = {}
// }

console.log(twoSums([2,11,8,7,15], 9));
console.log(twoSums([3,2,4], 6));

/* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] */

//Code Below No. 2

function rotate(nums, k) {
    console.log("Original Array", nums)
    console.log("Orginal Value for k:" ,k)
    //k = k % nums.length;  //Step1 be where k is greater than the array length
    //console.log("Adjusted k after modulaus:", k)
    //Step 2: Use splice to remove the last "k" element
    let removed = nums.splice(-k);
    console.log("Removed Elements:", removed)
    //Step 3: Add the removed elements to the beginning of the aray
    nums.unshift(...removed)  //unshift()
    console.log("Final rotated Array:", nums)
}

let nums1 = [1,2,3,4,5,6,7]
rotate(nums1, 2)
let nums2 = [-1,-100,3,99]
//Expected out put if k=2; [3,99,-1,-100]
rotate(nums2,2)





//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

/* The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */
