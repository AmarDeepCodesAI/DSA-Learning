function moveZeroes(nums) {

    let index = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {

            let temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;

            index++;
        }
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));