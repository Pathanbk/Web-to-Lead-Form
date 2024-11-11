console.log("Script Connected");
function beforesubmit(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log("inputdate.value",inputdate.value); //String --> date(en_IN)
    
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
}