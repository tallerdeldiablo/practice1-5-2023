

$(document).ready(function() {

    // here goes the event listener to the "add-activity" button

  
    $("#add-activity").click(function(e) {

        e.preventDefault(); // 

      
        // Get the value 

        var activity = $("#activity").val();

        // If the input is not empty, add the activity to the list

        if (activity !== "") {

            $("#activity-list").append("<li>" + activity + "</li>");

            $("#activity").val(""); // clear 

          
        }

    });

});

