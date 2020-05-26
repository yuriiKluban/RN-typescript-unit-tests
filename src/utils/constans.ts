const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const validate = (field: string, value: string): boolean => {
  let regex = null;
  switch (field) {
    case 'email':
      value = value.toLowerCase();
      regex = emailRegex;
      break;
    case 'password':
      regex = passwordRegex;
      break;
    default:
      break;
  }
  return (regex && regex.test(value)) || !!regex;
};

export {emailRegex, passwordRegex, validate};
