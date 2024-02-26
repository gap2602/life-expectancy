function fpgConverter(source, valueNum) {
  valueNum = parseFloat(valueNum);
  inputFPGMg = document.getElementById("fpg-mg");
  inputFPGMmol = document.getElementById("fpg-mmol");

  if (source == "fpg-mg"){
    inputFPGMmol.value = (valueNum/18).toFixed(2);
  } else {
    inputFPGMg.value = (valueNum*18).toFixed(2);
  }
}

function ldlConverter(source, valueNum) {
  valueNum = parseFloat(valueNum);
  inputLDLMg = document.getElementById("ldl-mg");
  inputLDLMmol = document.getElementById("ldl-mmol");

  if (source == "ldl-mg"){
    inputLDLMmol.value = (valueNum/38.6).toFixed(2);
  } else {
    inputLDLMg.value = (valueNum*38.6).toFixed(2);
  }
}

function checkInput() {
  const sbp = document.getElementById("sbp");
  const fpg = document.getElementById("fpg-mmol");
  const ldl = document.getElementById("ldl-mmol");

  if (sbp.value == "" || sbp.value < 90 || sbp.value > 200){
    document.getElementById("sbp-w").style.visibility = "visible";
    document.getElementById("range-warning").style.visibility = "visible";
    document.getElementById("sbp").style.borderColor = "red";
  } else {
    document.getElementById("sbp-w").style.visibility = "hidden";
    document.getElementById("range-warning").style.visibility = "hidden";
    document.getElementById("sbp").style.borderColor = "#E6E6E6";
  }

  if (fpg.value == ""){
    document.getElementById("fpg-w").style.visibility = "visible";
    document.getElementById("fpg-w-2").style.visibility = "visible";
    document.getElementById("fpg-mmol").style.borderColor = "red";
    document.getElementById("fpg-mg").style.borderColor = "red";
  } else {
    document.getElementById("fpg-w").style.visibility = "hidden";
    document.getElementById("fpg-w-2").style.visibility = "hidden";
    document.getElementById("fpg-mmol").style.borderColor = "#E6E6E6";
    document.getElementById("fpg-mg").style.borderColor = "#E6E6E6";
  }

  if (ldl.value == ""){
    document.getElementById("ldl-w").style.visibility = "visible";
    document.getElementById("ldl-w-2").style.visibility = "visible";
    document.getElementById("ldl-mmol").style.borderColor = "red";
    document.getElementById("ldl-mg").style.borderColor = "red";
  } else {
    document.getElementById("ldl-w").style.visibility = "hidden";
    document.getElementById("ldl-w-2").style.visibility = "hidden";
    document.getElementById("ldl-mmol").style.borderColor = "#E6E6E6";
    document.getElementById("ldl-mg").style.borderColor = "#E6E6E6";
  }

  if (sbp.value == "" || fpg.value == "" || ldl.value == "" || sbp.value < 90 || sbp.value > 200) {
  } else {
      sessionStorage.setItem('sbp', sbp.value);
      sessionStorage.setItem('fpg', fpg.value);
      sessionStorage.setItem('ldl', ldl.value);
      window.location.href = "page_4.html";
  }
}

function isPositiveNumber(event) {
  const charCode = event.which || event.keyCode;
  if (charCode < 48 || charCode > 57 || (charCode === 48 && value.length > 0)) {
      if (charCode != 46) {
          return false
      } else { 
    return true;
      }
  }
  return true;
}