import React, { Component } from "react";
import { Button, Form, FormGroub, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
}
  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        <Label for="email">Email</Label>
        <Input  
            type="email"
          name="email"
          id="email"
          placeholder="Enter email">
            onChange={this.handleChange}
            </Input>
        
        </Form>
      </div>
    );
  }

