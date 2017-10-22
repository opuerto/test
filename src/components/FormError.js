import React, { Component } from 'react';
import { Alert  } from 'react-bootstrap';


const FormError = ({formErrors}) =>
  {if(formErrors.length > 0)
  {
    return(
      <Alert bsStyle="danger">
          for (let [key, value] of formErrors) {
              <p >value</p>
          }
        </Alert>

    );
  }else
  {
    return ''
  }}

export default FormError;
