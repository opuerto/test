import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';
import FormError from './FormError';
class FormComponent extends Component {

        state = {
          name:'',
          email:'',
          phone:'',
          fyrirspurn:'',
          errors:''
        }

        onPressButton()
        {
          this.setState({ errors: '' });
          if(this.state.name === '')
          {
            this.setState({
              errors:'þú þarft að fylla inn nafnið'
            })

          }else if (!this.validateFormEmail(this.state.email)) {
              this.setState({
                errors:'þetta er ekki netfang'
              })

            }else if (!this.phonenumber(this.state.phone)) {
              this.setState({
                errors:"Þetta er ekki rétt símanúmer"
              })

            }else 
            {
              alert("takk");
            }

        }

        phonenumber(simi)
      {
          var phoneno = /^\d{7}$/;
            if(simi.match(phoneno))
            {
              return true;
            }
            else
              {

                return false;
              }
          }

          validateFormEmail(email) {
            var x = email;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
              if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                  return false;
              }
              return true;
            }


    render(){
      const { name, email, phone, fyrirspurn } = this.state;
    return(
        <div className="FormComp">
          <form>
            <FormGroup >
            <FormControl type="text"  placeholder="Nafn" onChange={event => this.setState({ name : event.target.value })} ref = "nafn" />

            </FormGroup>
            <FormGroup>
            <FormControl type="text"  placeholder="Netfang" onChange={event => this.setState({ email:event.target.value })} ref = "Netfang" />


            </FormGroup>
            <FormGroup >
            <FormControl type="text"  placeholder="sími" onChange={event => this.setState({ phone:event.target.value })} ref = "sími"/>


            </FormGroup>
            <FormGroup >
            <FormControl type="text"  placeholder="fyrirspurn" onChange={event => this.setState({ fyrirspurn:event.target.value })} ref = "fyrirspurn" />

            </FormGroup>
         </form>
          <label id="error" className="control-label" data-reactid="7390">{this.state.errors}</label>
          <Button bsSize="large" bsClass="btn" onClick={this.onPressButton.bind(this)}>Senda</Button>

        </div>

    );
  }
}

export default FormComponent;
