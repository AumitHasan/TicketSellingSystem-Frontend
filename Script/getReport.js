
$(document).ready(function(){
    $("#getreport").on("click", getreport);
});

function getreport(){
    var data = $("#ticket_type").val();
    var url = "http://localhost:8888/report/" + data;
    $.ajax({
        dataType : 'text',
        url : url,
        type: "GET",
        success: function(result){
           
           var convertResult = encodeData(result, data);
           sessionStorage.setItem('report',JSON.stringify(convertResult));
            
           window.location.href = "./showReport.html";
        },
        error: function() {
           console.log("ERROR");
        }
    })
}

function encodeData(reslut, data){
   var reportRes = reslut;
   reportRes = reportRes.split(" ");
   var item = {
       name : data,
       seats : reportRes[0],
       price : reportRes[1]
   };
   return item;
}

function printReport(){
    var reportRes = JSON.parse(sessionStorage.getItem('report'));
    
    var reportHtml = "";
    reportHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-4'>"+
                                "<h2>" + reportRes.name + "Ticket Report </h2>" +
                            "</div>";
    reportHtml += "<div class='row col-md-11'>" +
                            "<div class='col-md-3'>"+
                                "<h4> Seats Sold: " + reportRes.seats + "</h4>" +
                            "</div>" +
                            "<div class='col-md-3'>"+
                                "<h4> Total Sell : " + reportRes.price + " $ </h4>" +
                            "</div>";

    $("#reportSummary").html(reportHtml);
}