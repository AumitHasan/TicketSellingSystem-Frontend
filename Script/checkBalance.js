
function onPageLoad(){

    $.ajax({
        contentType : "application/json",
        dataType : 'json',
        url : "http://localhost:8888/balance",
        type: "GET",
        crossDomain: true,
        crossOrigin: true,
        success: function(result){
            console.log(result);
            result = 1000000 - result; 
            document.getElementById("balance").innerHTML = "Your Balance: " + JSON.stringify(result) + " $";
        },
        error: function() {
            alert('Error occured');
        }
    })
}