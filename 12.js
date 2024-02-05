
function longestcommonPrefix( strings ){
    if( strings.length === 0){
        return 0
    }

    strings.sort()

    let first= strings[0]
    let last = strings[strings.length-1]

    let temp=''


    for ( let i=0 ; i< first.length ;i++){

        let firstchar = first[i]
        if( strings.every((str) => str[i] === firstchar)){
            temp += firstchar
        } else{
            break;
        }
    }

    return temp
}

let strings= [ "flower", "flow", "flight"]
console.log(longestcommonPrefix(strings))