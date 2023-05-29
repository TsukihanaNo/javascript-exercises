const palindromes = function (words) {
    const newString = words.replace(/\W+/g,"");
    let finalString = "";
    for (let i = newString.length-1;i>=0;i--){
        finalString += newString[i];
    }
    console.log(newString);
    return newString.toLowerCase()==finalString.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
