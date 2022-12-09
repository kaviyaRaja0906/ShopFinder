import React from "react";

function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Shop Name is required";
    } else if (/[^a-z]/gi.test(values.name)) {
      errors.name = "Shop Name Should only contain alphabets";
    }
    if (!values.area) {
      errors.area = "Area of the Shop is required";
    } 
    if (!values.category) {
        errors.category = "Category of the shop is required";
      } 
      if (!values.startDate) {
        errors.startDate= "field is required";
      } 
      if (!values.endDate) {
        errors.endDate = "field is required";
      }       
    return errors;
  }

  export default validate;