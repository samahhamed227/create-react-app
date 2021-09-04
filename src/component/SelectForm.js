import React from "react";
import Form from "react-bootstrap/Form";
import data from "../assets/data.json";

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
  }
  filtered = (event) => {
    let NumHorn = parseInt(event.target.value);
    let FilterData = data.filter((i) => {
      if (i.horns === NumHorn) {
        return true;
      } else if (NumHorn === 0) {
        return data;
      }
    });
    this.props.Callback(FilterData);
  };

  render() {
    return (
      <div>
        <Form className="selectForm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control as="select" custom onChange={this.filtered}>
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SelectForm;
