// function that saves input with key values
function saveData(){
  sessionStorage.setItem('teamLeaderSaved', document.getElementById("teamLeaderInput").value);
  sessionStorage.setItem('nursePrepSaved', document.getElementById("nursePrepInput").value);
  sessionStorage.setItem('nurseAdminSaved', document.getElementById("nurseAdminInput").value);
  sessionStorage.setItem('nurseRecordSaved', document.getElementById("nurseRecorderInput").value);
  sessionStorage.setItem('anesthesiologistSaved', document.getElementById("anesthesiologistInput").value);
  sessionStorage.setItem('others1Saved', document.getElementById("othersInput1").value);
  sessionStorage.setItem('others2Saved', document.getElementById("othersInput2").value);
  sessionStorage.setItem('others3Saved', document.getElementById("othersInput3").value);
  sessionStorage.setItem('others4Saved', document.getElementById("othersInput4").value);
}

// function that retrieves values to populate pages
function retrieveData(){
  $('#teamLeader').text(sessionStorage.getItem('teamLeaderSaved'));
  $('#nursePrep').text(sessionStorage.getItem('nursePrepSaved'));
  $('#nurseAdmin').text(sessionStorage.getItem('nurseAdminSaved'));
  $('#nurseRecord').text(sessionStorage.getItem('nurseRecordSaved'));
  $('#anesthesiologist').text(sessionStorage.getItem('anesthesiologistSaved'));
  $('#others1').text(sessionStorage.getItem('others1Saved'));
  $('#others2').text(sessionStorage.getItem('others2Saved'));
  $('#others3').text(sessionStorage.getItem('others3Saved'));
  $('#others4').text(sessionStorage.getItem('others4Saved'));
}
