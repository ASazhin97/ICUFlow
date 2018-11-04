function validate(){

    // creates variables that hold the value of the associated ID
    var teamLeaderInput = document.getElementById("teamLeaderInput").value;
    var nursePrepInput = document.getElementById("nursePrepInput").value;
    var nurseAdminInput = document.getElementById("nurseAdminInput").value;
    var nurseRecorderInput = document.getElementById("nurseRecorderInput").value;
    var anesthesiologistInput = document.getElementById("anesthesiologistInput").value;


    if (teamLeaderInput === ""){ // if name not typed
      alert("Please make sure the name of the Team Leader is documented before proceeding.");
    } if (nursePrepInput == ""){ // if name not typed
      alert("Please make sure the name of the Nurse Preparing Meds is documented before proceeding.");
    } if (nurseAdminInput == ""){ // if name not typed
      alert("Please make sure the name of the Nurse Administering Meds is documented before proceeding.");
    } if (nurseRecorderInput == ""){ // if name not typed
      alert("Please make sure the name of the Recording Nurse is documented before proceeding.");
    } if (anesthesiologistInput == ""){ // if name not typed
      alert("Please make sure the name of the Anesthesiologist is documented before proceeding.");
    } else { // if all is done correctly
      window.location.href = "finalReport.html"
    }
}
