const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validate(input) {
    let errors = {};
    if (!regexEmail.test(input.username)) {
      errors.username = "Debe ser un correo electrónico";
    }
    if (!((/\d/.test(input.password)) && input.password.length > 6)) {
      errors.password = "Contraseña no valida";
    }
    return errors;
  }