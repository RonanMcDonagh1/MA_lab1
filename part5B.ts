function wordCount(word:string):number{
    let count : number = word.replace(/\s/g, "").length;
    return count;
}

let myCount = wordCount("test 1");
console.log(myCount);