function   person(perdaywage,tenure,salary){
    let pay=20000
    if(perdaywage*tenure>pay)
    {
        return true
    }
    else{
        return false
    }
}
console.log(person(3000,5000,10000))