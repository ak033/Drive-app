function showPlan(planId) {
    // Hide all workout plans
    var plans = document.getElementsByClassName('workout-plan');
    for (var i = 0; i < plans.length; i++) {
      plans[i].style.display = 'none';
    }
  
    // Show the selected plan
    document.getElementById(planId).style.display = 'block';
     // Show the overlay and popup box
     document.getElementById('overlay').style.display = 'block';
     document.getElementById('popup').style.display = 'block';
     showDay();
    
  }
  

  window.onload = function() {
    document.body.style.opacity = '1';
  };



  // Add a function to hide the overlay and popup box
function hidePlan() {
    console.log('its working');
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hidePlan();
    }
});


function showDay(){
    var date = new Date();
    var day = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];    var currentDay = days[day];
    document.getElementById('day').textContent = currentDay;
}








function saveWorkout() {
  // Get the workout details
  var workoutName = document.getElementById('Workout-name').value;
  var sets = document.getElementById('Sets').value;
  var reps = document.getElementById('Reps').value;

  if(workoutName.trim() === "" || sets.trim() === "" || reps.trim() === "") {
    alert("Please fill in all fields.");
    return; // Stop the function if any field is empty
  }
  // Create a new div for the workout
  var workoutDiv = document.createElement('div');
  workoutDiv.className = 'workout'; // Apply a CSS class

  // Create a new div for each workout detail and append it to the workout div
  var nameDiv = document.createElement('div');
  nameDiv.textContent = workoutName;
  workoutDiv.appendChild(nameDiv);

  var setsDiv = document.createElement('div');
  setsDiv.textContent = sets + ' sets';
  workoutDiv.appendChild(setsDiv);

  var repsDiv = document.createElement('div');
  repsDiv.textContent = reps + ' reps';
  workoutDiv.appendChild(repsDiv);

  // Append the new workout div to the 'workout-details' box
  var workoutDetailsBox = document.getElementById('workout-details');
  workoutDetailsBox.appendChild(workoutDiv);

  // Clear the input fields
  document.getElementById('Workout-name').value = '';
  document.getElementById('Sets').value = '';
  document.getElementById('Reps').value = '';
}
