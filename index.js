// confirmation

function deleteData(){
    let result = confirm("Do you want to delete your data? ")
    if (result) {
        console.log("Deleted successfully");
    }else{
        console.log("Delete cancelled");
    }
}