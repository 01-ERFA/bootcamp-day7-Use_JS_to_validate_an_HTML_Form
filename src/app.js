/* eslint-disable */
import "bootstrap";
import { validate } from "schema-utils";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Estoy funcionando!");
};

const my_form = document.getElementById("my_form");

my_form.addEventListener("submit", e => {
  e.preventDefault();

  // obteniendo los datos ingresados

  let input_card = document.getElementById("input_card").value;
  let input_cvc = document.getElementById("input_cvc").value;
  let input_amount = document.getElementById("input_amount").value;
  let input_firstName = document.getElementById("input_firstName").value;
  let input_lastName = document.getElementById("input_lastName").value;
  let input_city = document.getElementById("input_city").value;
  let input_state = document.getElementById("input_state").value; // seleccionar localidad
  let input_postalCode = document.getElementById("input_postalCode").value;
  let input_weAccept = document.querySelector(
    "input[type=radio][name=inlineRadioOptions]:checked"
  ); //las tarjetas de pago
  let input_message = document.getElementById("input_message").value;

  // corrobación de que no hayan inputs vacios
  const my_data_text = [];

  my_data_text.push(
    input_card,
    input_cvc,
    input_amount,
    input_firstName,
    input_lastName,
    input_city,
    input_postalCode,
    input_message
  );

  let my_alert = document.getElementById("myalert");

  for (let index = 0; index < my_data_text.length; index++) {
    console.log(my_data_text[index]);

    if (
      my_data_text[index] === "" ||
      input_state === "Pick a state" ||
      input_weAccept === null
    ) {
      my_alert.style.display = "block";
      document.querySelectorAll(".my_P_error")[index].style.borderColor = "red";
      document.getElementById("input_state").style.borderColor = "red";
      document.getElementById("input_message").style.borderColor = "red";
      document.getElementById("radio_options").style.border = "1px solid red";
    } else {
      my_alert.style.display = "none";
      document.querySelectorAll(".my_P_error")[index].style.borderColor =
        "white";
      document.getElementById("input_state").style.borderColor = "white";
      document.getElementById("input_message").style.borderColor = "white";
      document.getElementById("radio_options").style.border = "unset";
    }
  }

  // funcionamiento visual para el usuario SI TODO salio bien

  if (my_alert.style.display === "none") {
    alert("Formulario enviado correctamente");
  }
});
