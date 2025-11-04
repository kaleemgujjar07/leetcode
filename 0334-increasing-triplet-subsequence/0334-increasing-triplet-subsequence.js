/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second  = Infinity;
//[2,1,5,0,4,6]
    for(let num of nums){
        if(num <= first){
            first = num;//2 
        } else if(num <= second){
            second = num;//1
        } else{
            return true;//5<1
        }
    }
    return false;
    
};