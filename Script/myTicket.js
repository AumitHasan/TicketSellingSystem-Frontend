$( document ).ready(function() {
    Load();
  });

var ticketListHtml = " ";
var ticket;

function Load(){
    $.ajax({
        contentType : "application/json",
        dataType : 'json',
        type : "GET",
        url : "http://localhost:8888/mytickets",
        success: function(result){
            console.log(result);
            ticket = JSON.stringify(result);
            showMyTicket();
        },
        error:function(){   
            console.log("Error");
        }
    });
}

function showMyTicket(){
    var Ticket = JSON.parse(ticket);
    ticketListHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-3'>" +
                                "<p>Ticket ID</p>" +  
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>Seats</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>Ticket Price</p>" +
                            "</div>" +
                        "</div>";
    Ticket.forEach(element => {
        ticketListHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-3'>" +
                                "<p>" + element.ticketId + "</p>" +  
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>" + element.buySeats + "</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<p>" + element.price + "</p>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                '<input type="button" class="btn-danger" value="Cancel" onclick="cancelTicket(' + element.id + ')"/>' +
                            "</div>" +
                        "</div>";
        $("#myTicket").html(ticketListHtml);
    });
}

function cancelTicket(id){
    var delUrl = "http://localhost:8888/mytickets/delete/" + id;
    $.ajax({
        contentType : "application/json",
        type : 'DELETE',
        url : delUrl,
        success: function(){
            window.location.href = "./myTickets.html";
            localtion.reload();
        },
        error: function(){
        }
    });
}