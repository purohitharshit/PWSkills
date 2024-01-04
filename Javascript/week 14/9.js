function uniqueCharecterCheck(inputString){

    // Creating a new Set
    const charSet =  new Set();
    for(const char of inputString){
        if(charSet.has(char)){
            console.log("The input string contains duplicates");
            return;
        }
        charSet.add(char);
    }
    console.log('The input string contains unique charecters');
}


uniqueCharecterCheck("mithun");
uniqueCharecterCheck("anurag");
