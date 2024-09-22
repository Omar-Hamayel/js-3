var registerForm = document.querySelector(".registerForm");
var data = [];
registerForm.onsubmit = function(e){
    e.preventDefault();
    var product = {
        name : document.querySelector("#name").value,
        description : document.querySelector("#description").value,
        price : document.querySelector("#price").value, 
    }
    data.push(product);
    print();
}
function print(){
    document.querySelector("tbody").innerHTML ='';
    for(var i=0;i<data.length;i++){
    document.querySelector("tbody").innerHTML +=
    `<tr>
    <td>${data[i].name}</td>
    <td>${data[i].description}</td>
    <td>${data[i].price}</td>
    </tr>`
    }
}