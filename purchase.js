var products = document.getElementById("products")
var search = document.getElementById("search")
var productslist = products.querySelectorAll("div")

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase()
    
    for(count=0; count<productslist.length; count++){

        var productname = productslist[count].querySelector("h3").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productslist[count].style.display="none"
        }
        else{
            productslist[count].style.display="block"
        }
    }
})
