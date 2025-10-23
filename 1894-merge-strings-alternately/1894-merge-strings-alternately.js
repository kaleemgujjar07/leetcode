/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = "";
    let i = 0;
    let j = 0;

    let len1 = 0;
    while(word1[len1] !== undefined){
        len1 = len1 + 1;
    }
    let len2 = 0;
    while(word2[len2] !== undefined){
        len2 = len2 + 1;
    }

    while( i < len1 || j < len2){
        if(i < len1){
            merged = merged + word1[i];
            i = i + 1
        }
        if(j < len2){
            merged = merged + word2[j];
            j = j + 1
        }
    }
    return merged
    
    
   
};
















 // let merged = "";
    // let i = 0;
    // let j = 0;

    // while(i < word1.length || j < word2.length){
    //     if(i < word1.length){
    //         merged = merged + word1[i];
    //         i = i + 1;
    //     }
    //     if(j < word2.length){
    //         merged = merged + word2[j];
    //         j = j + 1;
    //     }
    // }
    // return merged




    // let merged = "";
    // let i = 0;
    // let j = 0;

    // let len1 = 0;
    // while(word1[len1] !== undefined){
    //     len1 = len1 + 1;
    // }
    // let len2 = 0;
    // while(word2[len2] !== undefined){
    //     len2 = len2 + 1;
    // }

    // while( i < len1 || j < len2){
    //     if(i < len1){
    //         merged = merged + word1[i];
    //         i = i + 1
    //     }
    //     if(j < len2){
    //         merged = merged + word2[j];
    //         j = j + 1
    //     }
    // }
    // return merged