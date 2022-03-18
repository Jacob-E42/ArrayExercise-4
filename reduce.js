
//extractValue
function extractValue(arr, key) {
    
    return arr.reduce(function(newArr, nextObj){
         newArr.push(nextObj[key]);
         return newArr;

    },[])
}


//vowelCount
function vowelCount(str) {
    return Array.from(str.toLowerCase()).reduce(function(acc, nextLetter){
        if ("aeiou".includes(nextLetter)){
            if(acc[nextLetter]) acc[nextLetter]++;
            else acc[nextLetter] = 1;
        }
        return acc;
    }, {})
}



function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(newArr, nextObj){
        nextObj[key] = value;
        return arr;
    }, arr)
}


//partition
function partition(arr, callback) {
    return arr.reduce(function(metaArr, nextEl){
        if (callback(nextEl)) metaArr[0].push(nextEl);
        else metaArr[1].push(nextEl);
        return metaArr;
    }, [[],[]])
}
