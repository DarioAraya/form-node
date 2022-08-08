export const validateDataCompany = () => {
  const inputRut = document.querySelector(".mdc-text-field__input.rut");
  const helperRut = document.querySelector(".mdc-text-field-helper-text.rut");
  const inputRazon = document.querySelector(".mdc-text-field__input.razon");
  const helperRazon = document.querySelector(
    ".mdc-text-field-helper-text.razon"
  );
  const inputDireccion = document.querySelector(
    ".mdc-text-field__input.direccion"
  );
  const helperDireccion = document.querySelector(
    ".mdc-text-field-helper-text.direccion"
  );
  const inputComuna = document.querySelector(".mdc-text-field__input.comuna");
  const helperComuna = document.querySelector(
    ".mdc-text-field-helper-text.comuna"
  );
  const inputActividad = document.querySelector(
    ".mdc-text-field__input.actividad"
  );
  const helperActividad = document.querySelector(
    ".mdc-text-field-helper-text.actividad"
  );
  if (inputRut.value === "" || inputRut.value == null) {
    helperRut.textContent = "Debe ingresar un rut valido.";
    helperRut.style.color = "#b00020";
  } else {
    helperRut.textContent = "";
    helperRut.style.color = "";
  }

  if (inputRazon.value === "" || inputRazon.value == null) {
    helperRazon.textContent = "Debe ingresar una razón social.";
    helperRazon.style.color = "#b00020";
  } else {
    helperRazon.textContent = "";
    helperRazon.style.color = "";
  }

  if (inputDireccion.value === "" || inputDireccion.value == null) {
    helperDireccion.textContent = "Debe ingresar una dirección.";
    helperDireccion.style.color = "#b00020";
  } else {
    helperDireccion.textContent = "";
    helperDireccion.style.color = "";
  }

  if (inputComuna.value === "" || inputComuna.value == null) {
    helperComuna.textContent = "Debe ingresar una comuna.";
    helperComuna.style.color = "#b00020";
  } else {
    helperComuna.textContent = "";
    helperComuna.style.color = "";
  }

  if (inputActividad.value === "" || inputActividad.value == null) {
    helperActividad.textContent = "Debe ingresar una actividad económica.";
    helperActividad.style.color = "#b00020";
  } else {
    helperActividad.textContent = "";
    helperActividad.style.color = "";
  }
};

export const validateDataAgent = () => {
  const inputRutAgent = document.querySelector(".mdc-text-field__input.legal");
  const helperRutAgent = document.querySelector(
    ".mdc-text-field-helper-text.legal"
  );
  const inputNombre = document.querySelector(".mdc-text-field__input.nombre");
  const helperNombre = document.querySelector(
    ".mdc-text-field-helper-text.nombre"
  );
  const inputEmail = document.querySelector(".mdc-text-field__input.email");
  const helperEmail = document.querySelector(
    ".mdc-text-field-helper-text.email"
  );
  if (inputRutAgent.value === "" || inputRutAgent.value == null) {
    helperRutAgent.textContent = "Debe ingresar un rut valido.";
    helperRutAgent.style.color = "#b00020";
  } else {
    helperRutAgent.textContent = "";
    helperRutAgent.style.color = "";
  }

  if (inputNombre.value === "" || inputNombre.value == null) {
    helperNombre.textContent = "Debe ingresar un nombre.";
    helperNombre.style.color = "#b00020";
  } else {
    helperNombre.textContent = "";
    helperNombre.style.color = "";
  }

  if (
    inputEmail.value === "" ||
    inputEmail.value == null ||
    inputEmail.value.indexOf("@") == -1
  ) {
    helperEmail.textContent = "Debe ingresar un email valido.";
    helperEmail.style.color = "#b00020";
  } else {
    helperEmail.textContent = "";
    helperEmail.style.color = "";
  }
};
