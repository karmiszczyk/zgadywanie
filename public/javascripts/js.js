$(document).ready(function() {
    $("#send").click(function() {
        event.preventDefault();
        number = $("#number").val();
        $.ajax({
          url: "verify/"+number,
          context: document.body
        }).done(function(data) {
          $("#result").text(data);
        });
    });
});
