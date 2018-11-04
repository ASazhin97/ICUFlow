function saveData(){

  sessionStorage.setItem('teamLeaderInput', document.getElementById("teamLeaderInput").value);
  console.log(localStorage.getItem('teamLeaderInput'));


  document.getElementById("teamLeader").innerHTML = localStorage.getItem('teamLeaderInput');
  console.log(localStorage.getItem('teamLeaderInput'));

}
