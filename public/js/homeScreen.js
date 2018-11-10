function onInput() {
    var val = document.getElementById("patientName").value;
    var opts = document.getElementById('patients').childNodes;
    var mr = document.getElementById("Record").value;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // yourCallbackHere()
        if (opts[i].value == "Jeff Smith"){
          $('#Record').val("3048572");
          sessionStorage.setItem('DOBSaved', "12/03/1996");
          sessionStorage.setItem('WeightSaved', "183 lbs");
        } else if (opts[i].value == "Phil Russo"){
          $('#Record').val("2460203");
          sessionStorage.setItem('WeightSaved', "229 lbs");
          sessionStorage.setItem('DOBSaved', "4/20/1976");
        } else if (opts[i].value == "Jennifer Lopez"){
          $('#Record').val("6900694");
          sessionStorage.setItem('DOBSaved', "7/24/1969");
          sessionStorage.setItem('WeightSaved', "130 lbs");
        } else if (opts[i].value == ""){
          $('#Record').val("");
        }
      }
    }
  }
