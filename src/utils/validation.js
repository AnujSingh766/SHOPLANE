// validation.js

export const validateFormData = (formData) => {
  const newErrors = {};
  let isValid = true;

  if (!formData.firstName) {
    newErrors.firstName = "Please enter valid first name.";
    isValid = false;
  }

  if (!formData.lastName) {
    newErrors.lastName = "Please enter valid last name.";
    isValid = false;
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter valid email.";
    isValid = false;
  }

  if (!formData.address) {
    newErrors.address = "Please enter valid address.";
    isValid = false;
  }

  if (!formData.country) {
    newErrors.country = "Please select your country.";
    isValid = false;
  }

  if (!formData.state) {
    newErrors.state = "Please select your state.";
    isValid = false;
  }

  if (!formData.city) {
    newErrors.city = "Please select your city.";
    isValid = false;
  }

  if (!formData.pincode) {
    newErrors.pincode = "Please enter valid pincode.";
    isValid = false;
  }

  if (!formData.mobileNumber) {
    newErrors.mobileNumber = "Please enter valid mobile number.";
    isValid = false;
  }

  if (!formData.password || formData.password.length < 8) {
    newErrors.password =
      "Must contain at least one number, one uppercase, lowercase letter, and be at least 8 characters.";
    isValid = false;
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match.";
    isValid = false;
  }

  return { isValid, newErrors };
};
