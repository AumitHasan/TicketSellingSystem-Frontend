$(document).ready(function(){
    $("#createTicket").on("click", createTicket);
});


function createTicket(){
    var data = getDataToCreateTicket();
    $.ajax({
        contentType : "application/json",
        type : "POST",
        url : "http://localhost:8888/tickets",
        data : JSON.stringify(data),
        success:function(){
            alert("Ticket Added Succesfully !!");
        }
    });
    
}   


function getDataToCreateTicket(){
    return data = {

        type : $("#ticket_type").val(),
        date : $("#date").val(),
        time : $("#time").val(),
        fromA : $("#fromCity").val(),
        toA : $("#destination").val(),
        seats : $("#noOfSeats").val(),
        availablSeats : $("#noOfSeats").val(),
        price : $("#price").val()
    };
}
