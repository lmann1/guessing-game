/* Constant variables */
const tooLow = "Too low!";
const rightOn = "Right on!";
const tooHigh = "Too high!";
const seeBelow = "Check out the True Trade value calculated below.";

$(document).ready(function(){

  // Ford F150
  $("#f150").click(function(){
    $("#modalImage").attr("src", "https://s3-us-west-2.amazonaws.com/carproof-images/vehicles/ford-king-ranch.jpg");
    $("#modal-title").text("2010 Ford F-150 King Ranch");
    $("#myModal").modal("show");

    $("#arrow-button").click(function() {
      if (validateForm() == true) {
        showResults(20700, 'https://s3-us-west-2.amazonaws.com/carproof-images/results/ford-king-ranch-results.PNG')
      }
    })
  });

  // Hyundai Accent
  $("#accent").click(function(){
    $("#modalImage").attr("src", "https://s3-us-west-2.amazonaws.com/carproof-images/vehicles/hyundai-accent.jpg");
    $("#modal-title").text("2008 Hyundai Accent L");
    $("#myModal").modal("show");

    $("#arrow-button").click(function() {
      if (validateForm() == true) {
        showResults(3995, 'https://s3-us-west-2.amazonaws.com/carproof-images/results/hyundai-accent-results.PNG')
      }
    })
  });

  // Dodge Caravan
  $("#caravan").click(function(){
    $("#modalImage").attr("src", "https://s3-us-west-2.amazonaws.com/carproof-images/results/vehicles/dodge-caravan.jpg");
    $("#modal-title").text("2014 Dodge Grand Caravan SXT");
    $("#myModal").modal("show");

    $("#arrow-button").click(function() {
      if (validateForm() == true) {
        showResults(15995, 'https://s3-us-west-2.amazonaws.com/carproof-images/results/dodge-caravan-results.PNG')
      }
    })
  });

  // Honda CRV
  $("#crv").click(function(){
    $("#modalImage").attr("src", "https://s3-us-west-2.amazonaws.com/carproof-images/vehicles/honda-crv.jpg");
    $("#modal-title").text("2016 Honda CR-V LX");
    $("#myModal").modal("show");

    $("#arrow-button").click(function() {
      if (validateForm() == true) {
        showResults(24410, 'https://s3-us-west-2.amazonaws.com/carproof-images/results/honda-crv-results.PNG')
      }
    })
  })

  // Toyota Corolla
  $("#corolla").click(function(){
    $("#modalImage").attr("src", "https://s3-us-west-2.amazonaws.com/carproof-images/vehicles/corolla-new.jpg");
    $("#modal-title").text("2017 Toyota Corolla SE");
    $("#myModal").modal("show");

    $("#arrow-button").click(function() {
      if (validateForm() == true) {
        showResults(20670, 'https://s3-us-west-2.amazonaws.com/carproof-images/results/corolla-results.PNG')
      }
    })
  })
  
  // Update modal to go back to the input box each time
  $("#myModal").on('hidden.bs.modal', function () {
    $("#modalContent").css("display", "block");
    $("#modalContent-results").css("display", "none");
    $("#alert").text("");
    $("#modal-title").text("Can you guess the correct value?");
  });

  /* Next button moves scroll bar to the right */
  $(".next").click(function(){
   $(".swipe").scrollLeft($(".swipe").scrollLeft()+200);
 });

  /* Previous button moves scroll bar to the left */
  $(".prev").click(function(){
   $(".swipe").scrollLeft($(".swipe").scrollLeft()-200);
 });

  /* Changes previous arrow to filled version on hover */
  $(".prev").hover(
    function() {
      $("#prev").attr("src","https://s3-us-west-2.amazonaws.com/carproof-images/arrows/CircleCheckHover-prev.png");
    }, function() {
      /* Change back to original */
      $("#prev").attr("src","https://s3-us-west-2.amazonaws.com/carproof-images/arrows/CircleCheck-prev.png");
    }
    );

  /* Changes next arrow to filled version on hover */
  $(".next").hover(
    function() {
      $("#next").attr("src","https://s3-us-west-2.amazonaws.com/carproof-images/arrows/CircleCheckHover-next.png");
    }, function() {
      /* Change back to original */
      $("#next").attr("src","https://s3-us-west-2.amazonaws.com/carproof-images/arrows/CircleCheck-next.png");
    }
    );

});

// Check that the field has been filled out, otherwise display error message
function validateForm() {
  var y = document.getElementById("estimateValue").value;
  if (y== "") {
    document.getElementById("alert").textContent = "Please enter a value."
  }
  else {
    return true;
  }
}

// Function to show results in modal, takes vehicle value and link to image showing results
function showResults(val, link) {
  var input =  document.getElementById("estimateValue").value;
  document.getElementById("modalContent").style.display = "none";
  document.getElementById("modalContent-results").style.display = "block";
  document.getElementById("results-img").src = link;
  
  if(document.getElementById("estimateValue").value<val) {
    var difference = val-input;
    document.getElementById("modal-title").textContent = tooLow;
    document.getElementById("custom-calc").textContent = "Your estimate was $" + difference + " less than the actual value of the vehicle. " + seeBelow;
  }

  else if (document.getElementById("estimateValue").value==val) {
    document.getElementById("modal-title").textContent = rightOn;
    document.getElementById("custom-calc").textContent = "You're right, the value of this vehicle is $" + val + ". " + seeBelow;
  }

  else {
    var hDifference = input-val;
    document.getElementById("modal-title").textContent = tooHigh;
    document.getElementById("custom-calc").textContent = "Your estimate was $" + hDifference + " higher than the actual value of the vehicle. " + seeBelow;
  }
}