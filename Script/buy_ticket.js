$(document).ready(function(){
    $("#ticketConfirm").on("click", confirmTicket);
});

function confirmTicket(){
    var ticketInfo = JSON.parse(sessionStorage.getItem("ticket"));
    var noOfSeats = $("#seatNumber").val();
    var data = {
        ticketId : ticketInfo.id,
        buySeats : noOfSeats,
        price : ticketInfo.price
    };

    $.ajax({
        contentType : "application/json",
        type : "POST",
        url : "http://localhost:8888/mytickets",
        data : JSON.stringify(data),
        success: function(result){
            console.log("Success");
            window.location.href = "./home.html";
        },
        error:function(result){
            console.log("Error");
        }
    });
}   