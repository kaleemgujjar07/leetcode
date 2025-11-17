var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {

        // width
        let width = right - left;

        // smaller height manually
        let smallHeight;
        if (height[left] < height[right]) {
            smallHeight = height[left];
        } else {
            smallHeight = height[right];
        }

        // calculate water
        let water = smallHeight * width;

        // update maximum water
        if (water > maxWater) {
            maxWater = water;
        }

        // move pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
