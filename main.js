/* General Info */
let changeField = document.querySelector("#general-info .email input");
let changeBtn = document.querySelector("#general-info .email a");
let noChange = true;

changeBtn.onclick = (e) => {
  if(noChange){
    e.preventDefault();
    changeField.removeAttribute("disabled");
    changeBtn.innerHTML = "Save";
    noChange = false;
  }
}

/* ================================== */