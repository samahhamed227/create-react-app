import React from "react";
import Form from "react-bootstrap/Form";
class SelectForm extends React.Component {
  handele = (e) => {
    this.props.filtered(e.target.value);
  };

  render() {
    return (
      <div>
        <Form className="selectForm" onChange={this.handele}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control as="select" custom>
              <option >All</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SelectForm;
