
var ticketListHtml = " ";
$(document).ready(function(){
    console.log("Click");
    $("#searchTicket").on("click", searchTicket);
   
});


function searchTicket(){
    var data = getDataToSearchTicket();
    $.ajax({
        contentType: "application/json",
        type : 'POST',
        url : "http://localhost:8888/search",
        data : JSON.stringify(data),
        
        success:function(result){
        
            var data = encodeData(result);
            sessionStorage.setItem("validTickets", JSON.stringify(data));
            
            window.location.href = "./validTicket.html";
        },
        error:function(){   
    
        }
    });
}

function showValidTicket(){
    var validTicket = JSON.parse(sessionStorage.getItem("validTickets"));
    ticketListHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-3'>" +
                                "<p>Ticket Id</p>" +  
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>Ticket Price</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>Available Seats </p>" +
                            "</div>";

    validTicket.forEach(element => {
        ticketListHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-3'>" +
                                "<p>" + element.id + "</p>" +  
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>" + element.price + "</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>" + element.availablSeats + "</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                '<input type="button" class="btn-primary" value="buy" onclick="buyTicket(' + element.id + ',' + element.price + ')"/>' +
                            "</div>" +
                        "</div>";
        $("#validTicket").html(ticketListHtml);
    });
}


function getDataToSearchTicket(){
    return data = {
        type : $("#ticket_type").val(),
        date : $("#date").val(),
        time : $("#time").val(),
        froma : $("#fromCity").val(),
        toa : $("#destination").val()
    };
}

function buyTicket(id, price){
    sessionStorage.setItem("ticket", JSON.stringify({id: id, price: price}));
    window.location.href = "./buy_ticket.html";
}

function encodeData(res){
    var result= [];
    res.forEach(element => {
        var item = {
            id : element.id,
            price : element.price,
            availablSeats : element.availablSeats 
        };
        result.push(item);
    });
    return result;
}