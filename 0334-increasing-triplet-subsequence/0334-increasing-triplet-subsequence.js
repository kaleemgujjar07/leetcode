/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second  = Infinity;
//[2,1,5,0,4,6]
    for(let num of nums){
        if(num <= first){//0
            first = num;
        } else if(num <= second){
            second = num;//4
        } else{
            return true;
        }
    }
    return false;
    
};