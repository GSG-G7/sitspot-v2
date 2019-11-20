import * as yup from 'yup';

const placeValidName = yup.object().shape({
  name: yup.string().required('Name of business is required'),
});

const placeValidCountry = yup.object().shape({
  country: yup.string().required('Country is required'),
});

const placeValidCity = yup.object().shape({
  city: yup.string().required('City is required'),
});

const placeValidBusinessType = yup.object().shape({
  businessType: yup.string().required('Business Type is required'),
});

export {
  placeValidName,
  placeValidCountry,
  placeValidCity,
  placeValidBusinessType,
};
