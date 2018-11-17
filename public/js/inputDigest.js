  // file that is responsible for holding all the info that is entered in one page and saved to be displayed on another

  // function that saves input with key values
  // this function saves the data from the administration page
  function saveAdminData(){ // each setItem method works the same. It saves the value with an associated key.

    // javascript
    sessionStorage.setItem('teamLeaderSaved', document.getElementById("teamLeaderInput").value); // the value of the element is stored in a key named 'teamLeaderSaved'
    sessionStorage.setItem('nursePrepSaved', document.getElementById("nursePrepInput").value);
    sessionStorage.setItem('nurseAdminSaved', document.getElementById("nurseAdminInput").value);
    sessionStorage.setItem('nurseRecordSaved', document.getElementById("nurseRecorderInput").value);
    sessionStorage.setItem('anesthesiologistSaved', document.getElementById("anesthesiologistInput").value);
    sessionStorage.setItem('others1Saved', document.getElementById("othersInput1").value);
    sessionStorage.setItem('others2Saved', document.getElementById("othersInput2").value);
    sessionStorage.setItem('others3Saved', document.getElementById("othersInput3").value);
    sessionStorage.setItem('others4Saved', document.getElementById("othersInput4").value);

    //jquery use of IDs. Still stores value with a key
    sessionStorage.setItem('Date', $("#sheetDate").val());
    sessionStorage.setItem('Time', $("#sheetTime").val());
    sessionStorage.setItem('Location', $("#sheetLocation").val());
    sessionStorage.setItem('TimeCalled', $("#sheetTimeCalled").val());
    sessionStorage.setItem('TimeArrived', $("#sheetTimeArrived").val());
    sessionStorage.setItem('Witnesses', $("#sheetWitnesses").val());
    sessionStorage.setItem('CPR', $("#sheetCPR").val());
    sessionStorage.setItem('CompressionTime', $("#sheetCompressionTime").val());

    if (document.getElementById('survived').checked){ // if radio button value is selected
      sessionStorage.setItem('outcome', "Survived"); // save key value as ...
    } else if (document.getElementById('deceased').checked){
      sessionStorage.setItem('outcome', "Deceased");
    }

    if (document.getElementById('toICU').checked){ // if radio button value is selected
      sessionStorage.setItem('transferred', "ICU"); // save key value as ...
    } else if (document.getElementById('toMorgue').checked){
      sessionStorage.setItem('transferred', "Morgue");
    } else if (document.getElementById('toHealthcare').checked){
      sessionStorage.setItem('transferred', "Other Healthcare Facility");
    } else if (document.getElementById('stayedUnit').checked){
      sessionStorage.setItem('transferred', "Stayed on Unit");
    }

    if(document.getElementById('circulationYes').checked){ // if radio button value is selected
      sessionStorage.setItem('circ', "Yes"); // save key value as ...
    } else if(document.getElementById('circulationNo').checked){
      sessionStorage.setItem('circ', "No");
    }

    if(document.getElementById('futYes').checked){ // if radio button value is selected
      sessionStorage.setItem('fut', "Yes"); // save key value as ...
    } else if(document.getElementById('futNo').checked){
      sessionStorage.setItem('fut', "No");
    }

    if(document.getElementById('famRes').checked){  // if radio button value is selected
      sessionStorage.setItem('famRes', "Yes"); // save key value as ...
    } else if(document.getElementById('famResNo').checked){
      sessionStorage.setItem('famRes', "No");
    }

    if(document.getElementById('advYes').checked){ // if radio button value is selected
      sessionStorage.setItem('adv', "Yes"); // save key value as ..
    } else if(document.getElementById('advNo').checked){
      sessionStorage.setItem('adv', "No");
    }

    if(document.getElementById('notifiedYes').checked){ // if radio button value is selected
      sessionStorage.setItem('noti', "Yes"); // save key value as ..
    } else if(document.getElementById('notifiedNo').checked){
      sessionStorage.setItem('noti', "No");
    }
  }

  // function that retrieves values from the report page
  function retrieveDataReport(){

    // retrieves the value of the table
     var tableInside = sessionStorage.getItem('table-info');
     var tableBody = document.getElementById('info-table-body');
     tableBody.innerHTML = tableInside;

     // each line here works the same
     // the value of an element is grabbed using jquery
     // this value is then set to to the value associated with the stored key
     // using getItem accesses the key value and then sets the element to that value
    $('#teamLeader').text(sessionStorage.getItem('teamLeaderSaved'));
    $('#nursePrep').text(sessionStorage.getItem('nursePrepSaved'));
    $('#nurseAdmin').text(sessionStorage.getItem('nurseAdminSaved'));
    $('#nurseRecord').text(sessionStorage.getItem('nurseRecordSaved'));
    $('#anesthesiologist').text(sessionStorage.getItem('anesthesiologistSaved'));
    $('#others1').text(sessionStorage.getItem('others1Saved'));
    $('#others2').text(sessionStorage.getItem('others2Saved'));
    $('#others3').text(sessionStorage.getItem('others3Saved'));
    $('#others4').text(sessionStorage.getItem('others4Saved'));
    $('#patientOutcome').text(sessionStorage.getItem('outcome'));
    $('#transferredTo').text(sessionStorage.getItem('transferred'));
    $('#circulation').text(sessionStorage.getItem('circ'));
    $('#restrictions').text(sessionStorage.getItem('famRes'));
    $('#futility').text(sessionStorage.getItem('fut'));
    $('#advanced').text(sessionStorage.getItem('adv'));
    $('#family').text(sessionStorage.getItem('noti'));
    $('#patientNameReport').text(sessionStorage.getItem('patientNameSaved'));
    $('#patientComments').text(sessionStorage.getItem('patientComments'));
    $('#patientDOBReport').text(sessionStorage.getItem('DOBSaved'));
    $('#patientMRReport').text(sessionStorage.getItem('MR'));
    $('#patientWeightReport').text(sessionStorage.getItem('WeightSaved'));
    $('#reportIVAccess').text(sessionStorage.getItem('IVAccess'));
    $('#reportIVSol').text(sessionStorage.getItem('IVSol'));
    $('#reportIVSize').text(sessionStorage.getItem('IVSize'));
    $('#reportIVType').text(sessionStorage.getItem('IVType'));
    $('#reportIVLoc').text(sessionStorage.getItem('IVLoc'));
    $('#reportIVComments').text(sessionStorage.getItem('IVCom'));
    $('#reportFullComments').text(sessionStorage.getItem('fullComments'));
    $('#reportIncTime').text(sessionStorage.getItem('IncTime'));
    $('#reportAirway').text(sessionStorage.getItem('Airway'));
    $('#reportETTSize').text(sessionStorage.getItem('EttSize'));
    $('#reportAirwayComments').text(sessionStorage.getItem('AirwayComments'));
    $('#reportDate').text(sessionStorage.getItem('Date'));
    $('#reportTime').text(sessionStorage.getItem('Time'));
    $('#reportLoc').text(sessionStorage.getItem('Location'));
    $('#reportTimeEvent').text(sessionStorage.getItem('TimeCalled'));
    $('#reportTeamArrived').text(sessionStorage.getItem('TimeArrived'));
    $('#reportWitnesses').text(sessionStorage.getItem('Witnesses'));
    $('#reportCPR').text(sessionStorage.getItem('CPR'));
    $('#reportComp').text(sessionStorage.getItem('CompressionTime'));
  }

  // function to save the info from the home page
  function homeData(){
    sessionStorage.setItem('patientNameSaved', document.getElementById("patientName").value);
    sessionStorage.setItem('MR', document.getElementById("Record").value);
  }

  // function to retrieve the data saved from the home page
  function retrieveHomeData(){
    $('#patientNameSheet').val(sessionStorage.getItem('patientNameSaved'));
    $('#patientMRSheet').val(sessionStorage.getItem('MR'));
    $('#patientDOBSheet').val(sessionStorage.getItem('DOBSaved'));
    $('#patientWeightSheet').val(sessionStorage.getItem('WeightSaved'));

  }

  // funtion to save the data entered in the flow sheet
  function saveSheetData(){

    //get values from table
    var table = document.getElementById("info-table-body");
    var tableInnards = table.innerHTML;

    // sets each element to the value of the stored key
    sessionStorage.setItem('patientNameSaved', document.getElementById("patientNameSheet").value);
    sessionStorage.setItem('MR', document.getElementById("patientMRSheet").value);
    sessionStorage.setItem('DOBSaved', $("#patientDOBSheet").val());
    sessionStorage.setItem('table-info', tableInnards);
    sessionStorage.setItem('WeightSaved', $("#patientWeightSheet").val());
    sessionStorage.setItem('patientComments', $("#patientCommentsSheet").val());
    sessionStorage.setItem('IVAccess', $("#ivAccessSelection").val());
    sessionStorage.setItem('IVSol', $("#ivSolution").val());
    sessionStorage.setItem('IVType', $("#ivType").val());
    sessionStorage.setItem('IVSize', $("#ivSize").val());
    sessionStorage.setItem('IVLoc', $("#ivLocationSelection").val());
    sessionStorage.setItem('IVCom', $("#ivComments").val());
    sessionStorage.setItem('IncTime', $("#sheetIncTime").val());
    sessionStorage.setItem('Airway', $("#sheetAirway").val());
    sessionStorage.setItem('EttSize', $("#sheetETTSize").val());
    sessionStorage.setItem('AirwayComments', $("#AirwayComments").val());
    sessionStorage.setItem('medication', $("#sheetMedication").val());
    sessionStorage.setItem('route', $("#sheetRoute").val());
    sessionStorage.setItem('dosage', $("#sheetDosage").val());
    sessionStorage.setItem('medicationComments', $("#medicationComments").val());
    sessionStorage.setItem('defibStart', $("#defibStart").val());
    sessionStorage.setItem('defibEnd', $("#defibEnd").val());
    sessionStorage.setItem('defibRhythm', $("#defibRhythm").val());
    sessionStorage.setItem('defibShock', $("#defibShock").val());
    sessionStorage.setItem('defibComments', $("#defibComments").val());
    sessionStorage.setItem('fullComments', $("#fullComments").val());
}
