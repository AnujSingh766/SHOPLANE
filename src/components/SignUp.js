import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    mobileNumber: "",
    fax: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isIndividual: true,
    isEnterprise: false,
    isGovernment: false,
    isdCode: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const countries = ["India", "USA", "Canada"];
  const isdCodes = {
    India: "+91",
    USA: "+1",
    Canada: "+1",
  };

  const statesByCountry = {
    India: ["Delhi", "Maharashtra", "Tamil Nadu"],
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "Alberta"],
  };

  const citiesByState = {
    Delhi: ["New Delhi", "Dwarka"],
    Maharashtra: ["Mumbai", "Pune"],
    California: ["Los Angeles", "San Francisco"],
  };

  useEffect(() => {
    if (formData.country) {
      setFormData({
        ...formData,
        isdCode: isdCodes[formData.country] || "",
      });
    }
  }, [formData.country]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      state: "",
      city: "",
      isdCode: isdCodes[selectedCountry] || "",
    });
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({
      ...formData,
      state: selectedState,
      city: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation
    if (!formData.firstName.trim())
      newErrors.firstName = "Please enter a valid first name.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please enter a valid last name.";
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email.";
    if (!formData.address.trim())
      newErrors.address = "Please enter a valid address.";
    if (!formData.country) newErrors.country = "Please select your country.";
    if (!formData.state) newErrors.state = "Please select your state.";
    if (!formData.city) newErrors.city = "Please select your city.";
    if (!formData.pincode || formData.pincode.length !== 6)
      newErrors.pincode = "Please enter a valid pincode.";
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10)
      newErrors.mobileNumber = "Please enter a valid mobile number.";
    if (!formData.isdCode || !isdCodes[formData.country])
      newErrors.isdCode = "Please select a valid ISD code.";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted", formData);
      navigate('/Login');
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-header"></header>
      <div className="header-buttons">
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="signup-btn active">Signup</button>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <label>
          Individual/Enterprise/Government <span className="required">*</span>
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isIndividual"
              checked={formData.isIndividual}
              onChange={() =>
                setFormData({
                  ...formData,
                  isIndividual: true,
                  isEnterprise: false,
                  isGovernment: false,
                })
              }
            />
            Individual
          </label>
          <label>
            <input
              type="radio"
              name="isEnterprise"
              checked={formData.isEnterprise}
              onChange={() =>
                setFormData({
                  ...formData,
                  isIndividual: false,
                  isEnterprise: true,
                  isGovernment: false,
                })
              }
            />
            Enterprise
          </label>
          <label>
            <input
              type="radio"
              name="isGovernment"
              checked={formData.isGovernment}
              onChange={() =>
                setFormData({
                  ...formData,
                  isIndividual: false,
                  isEnterprise: false,
                  isGovernment: true,
                })
              }
            />
            Government
          </label>
        </div>

        {/* Input fields for form */}
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "error-input" : ""}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "error-input" : ""}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group full-width">
          <label>Email <span className="required">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group full-width">
          <label>Address <span className="required">*</span></label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "error-input" : ""}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* Country and ISD Code */}
        <div className="form-group">
          <label>Country <span className="required">*</span></label>
          <select
            value={formData.country}
            onChange={handleCountryChange}
            className={errors.country ? "error-input" : ""}
          >
            <option value="">Select Country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        {/* State and City */}
        <div className="form-group">
          <label>State <span className="required">*</span></label>
          <select
            value={formData.state}
            onChange={handleStateChange}
            className={errors.state ? "error-input" : ""}
          >
            <option value="">Select State</option>
            {statesByCountry[formData.country]?.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
        </div>

        <div className="form-group">
          <label>City <span className="required">*</span></label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={errors.city ? "error-input" : ""}
          >
            <option value="">Select City</option>
            {citiesByState[formData.state]?.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        {/* Pincode */}
        <div className="form-group">
          <label>Pincode <span className="required">*</span></label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter your pincode"
            value={formData.pincode}
            onChange={handleChange}
            className={errors.pincode ? "error-input" : ""}
          />
          {errors.pincode && <p className="error">{errors.pincode}</p>}
        </div>

        {/* ISD Code and Mobile Number */}
        <div className="form-group isd code">
          <label>ISD Code <span className="required">*</span></label>
          <input
            type="text"
            name="isdCode"
            value={formData.isdCode}
            readOnly
            className={errors.isdCode ? "error-input" : ""}
          />
          {errors.isdCode && <p className="error">{errors.isdCode}</p>}
        </div>

        <div className="form-group mobile-number">
          <label>Mobile Number <span className="required">*</span></label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={errors.mobileNumber ? "error-input" : ""}
          />
          {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
        </div>

        {/* Fax */}
        <div className="form-group">
          <label>Fax</label>
          <input
            type="text"
            name="fax"
            placeholder="Enter your fax number"
            value={formData.fax}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="form-group full-width">
          <label>Password <span className="required">*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group full-width">
          <label>Confirm Password <span className="required">*</span></label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error-input" : ""}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
