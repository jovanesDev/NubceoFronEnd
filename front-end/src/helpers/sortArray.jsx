

const orderArray = (array,param,condition) => {

    array.sort(function(a,b) {
        
        if(a[param] < b[param]) return -1;
        if(a[param] > b[param]) return 1;
        return 0;
    })

    if(condition === "desc") array.reverse()

    return array

}

export default orderArray