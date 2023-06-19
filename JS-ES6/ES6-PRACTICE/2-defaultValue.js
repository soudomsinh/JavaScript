function customer(fname, lname, address){
    if(!address){
        address = "NEW YORK"
    }
    if (!fname) {
        fname = "John"
    }
    console.log(fname, lname, address)
}

customer(undefined, "Oudomsihn" , "Bangkok")
customer("Sengdao", "Oudomsihn" , undefined)

