import * as Yup from "yup"

export const addAddressschema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Email"),
  phno: Yup.string().min(6).max(14).required("Please enter your Number"),
  city: Yup.string().min(2).max(15).required("Please enter your City"),
  region: Yup.string().min(2).max(15).required("Please enter your Region"),
  postalcode: Yup.string().min(3).max(6).required("Please enter your postalCode"),
  aaradio: "",
  aasave: ""
})

export const savedAddressschema = Yup.object({
  SavedAddress: ""
})

export const editprofileschema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Email"),
  number: Yup.string().min(6).max(12).required("Please enter your Number"),
  DOB: Yup.date().required("Please enter a valid Date"),
});


export const addcardschema = Yup.object().shape({
  cardnumber: Yup.string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number')
    .required('Please enter a card number'),
  // expirydate: Yup.string()
  //   .matches(/^\d{2}\/\d{2}$/, 'Invalid expiry date')
  //   .required('Please enter an expiry date'),
  expirydate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date')
    .test('expiry-date', 'Expiry date must be greater than today', function (value) {
      if (!value) {
        return false;
      }

      const [month, year] = value.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (parseInt(year, 10) < currentYear) {
        return false;
      } else if (parseInt(year, 10) === currentYear && parseInt(month, 10) <= currentMonth) {
        return false;
      }

      return true;
    })
    .required('Please enter an expiry date'),



  CVV: Yup.string()
    .matches(/^\d{3}$/, 'Invalid CVV')
    .required('Please enter a CVV'),
  holderName: Yup.string()
    .required('Please enter the card holder name').min(6),
  savedcard: Yup.boolean().required().oneOf([true], 'You must accept to save the card'),
});

export const loginschema = Yup.object({

  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long")
    .max(25, "Password cannot exceed 25 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&_-)'
    ),
  keeplogin: ""
})


export const signupschema = Yup.object({
  firstName: Yup.string()
    .required('Please enter the first name').min(2).max(16),
  lastName: Yup.string()
    .required('Please enter the last name').min(2).max(16),

  email: Yup.string().email().required("Please enter your Email"),

  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long")
    .max(25, "Password cannot exceed 25 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&_-)'
    ),
  confirm_password: Yup.string().required()
    .oneOf([Yup.ref("password"), null], "password must match"),
    agree:""
})

export const forgetschema = Yup.object({

  email: Yup.string().email(),
  phno: Yup.string().min(6)
})
