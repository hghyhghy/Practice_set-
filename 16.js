

function isIsomorphic( s,t ) {
    // checking if length is not equal 

    if( s.length !== t.length) {
        return false 
    }
    const stotmap =new Map()
    const ttosmap = new Map()

    //  iterating over the s 

    for ( let i=0 ; i< s.length ; i++){

        const chars=s[i]
        const chart=t[i]

        if( stotmap.has(chars)){
            if(stotmap.get(chars)!== chart){
                return false
            } else{
                stotmap.set(chars,chart)
            }
        }

        if(ttosmap.has(chart)){
            if(ttosmap.get(chart)!==chars){
                return false 
            } else {
                ttosmap.set(chart,chars)
            }
        }
    }

    return true
}
let s="egg"
let t="add"
console.log(isIsomorphic(s,t))