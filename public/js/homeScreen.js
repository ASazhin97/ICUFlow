// file for data storage from the Home page.

function onInput() {

    // saves variable of value associated with each ID
    var val = document.getElementById("patientName").value;  //name of the patient
    var opts = document.getElementById('patients').childNodes; // options from the datalist

    // checks what option was slected
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // do the following
        if (opts[i].value == "Jeff Smith"){ // if Jeff Smith is selected
          $('#Record').val("3048572"); // set the record number to ...
          sessionStorage.setItem('DOBSaved', "12/03/1996"); // save his DOB as ...
          sessionStorage.setItem('WeightSaved', "183 lbs"); // save his weight as ..
        } else if (opts[i].value == "Phil Russo"){  // if Phil Russo is selected
          $('#Record').val("2460203"); // set the record number to ...
          sessionStorage.setItem('WeightSaved', "229 lbs"); // save his weight as .
          sessionStorage.setItem('DOBSaved', "4/20/1976"); // save his DOB as ...
        } else if (opts[i].value == "Jennifer Lopez"){  // if JLO is selected
          $('#Record').val("6900694"); // set the record number to ...
          sessionStorage.setItem('DOBSaved', "7/24/1969"); // save DOB as ...
          sessionStorage.setItem('WeightSaved', "130 lbs"); // save weight as .
        } else if (opts[i].value == ""){ // if the name is erased
          $('#Record').val(""); // erase the MR number
        }
      }
    }
  }
