function validate(){

    // creates variables that hold the value of the associated ID
    var teamLeaderInput = document.getElementById("teamLeaderInput").value;
    var nursePrepInput = document.getElementById("nursePrepInput").value;
    var nurseAdminInput = document.getElementById("nurseAdminInput").value;
    var nurseRecorderInput = document.getElementById("nurseRecorderInput").value;
    var anesthesiologistInput = document.getElementById("anesthesiologistInput").value;
    var date = document.getElementById("sheetDate").value;
    var time = document.getElementById("sheetTime").value;
    var location = document.getElementById("sheetLocation").value;
    var timeEvent = document.getElementById("sheetTimeCalled").value;
    var timeArrived = document.getElementById("sheetTimeArrived").value;
    var witness = document.getElementById("sheetWitnesses").value;
    var cpr = document.getElementById("sheetCPR").value;
    var compress = document.getElementById("sheetCompressionTime").value;



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
    } if (date === ""){ // if name not typed
      alert("Please make sure the date of event is documented before proceeding.");
    } if (time == ""){ // if name not typed
      alert("Please make sure the start time of event is documented before proceeding.");
    } if (location == ""){ // if name not typed
      alert("Please make sure the location of event is documented before proceeding.");
    } if (timeEvent == ""){ // if name not typed
      alert("Please make sure the time event was called is documented before proceeding.");
    } if (timeArrived == ""){ // if name not typed
      alert("Please make sure the time the team arrived is documented before proceeding.");
    } if (witness === ""){ // if name not typed
      alert("Please make sure the witnesses are documented before proceeding.");
    } if (cpr == ""){ // if name not typed
      alert("Please make sure to document whether or not CPR was initiated before proceeding.");
    } if (compress == ""){ // if name not typed
      alert("Please make sure the time of compression is documented before proceeding.");
    } else { // if all is done correctly
      window.location.href = "finalReport.html"
    }
}
