import React from "react";
import HornedBeasts from "./HornedBeasts";
import SelectForm from "./SelectForm";
import data from "../assets/data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newdata: data,
    };
  }
  handle = (item) => {
    this.setState({ newdata: item });
    console.log("sam", item);
  };

  render() {
    let arr = this.state.newdata.map((horn) => {
      return (
        <HornedBeasts
          title={horn.title}
          description={horn.description}
          image_url={horn.image_url}
          handleClose={this.props.handleClose}
        />
      );
    });
    return (
      <main>
        <SelectForm Callback={this.handle} />
        {arr}
      </main>
    );
  }
}

export default Main;
