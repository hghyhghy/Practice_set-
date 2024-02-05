


// merged sorted array 

function  merge  ( a1,m,a2,n) {

    const   save = a1.slice(0,m)

    let i=0
    let j=0
    let k=0

    //  merge elements from  save and a2 into a1

    while( i<m && j<n) {

        if ( save[i] <= a2[j])
        {
            a1[k] = save[i];

            i++
        }

        else {
            a1[k] = a2[j]
            j++
        }
        
        k++
    }


    while ( i< m) {
        a1[k] = save[i]
        i++
        k++
    }

    while ( j< n) {
        a1[k] = a2[j]
        j++ 
        k++
    }
}

const a1= [ 1,2,3,0,0,0]
const m= 3
const a2=[2,5,6]
const n =3

const temp = merge(a1,m,a2,n)
console.log(temp)