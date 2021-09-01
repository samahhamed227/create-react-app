import React from "react"; // we are adding the react library into our App component
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./component/SelectedBeast";
import data from "./assets/data.json";
import Forme from "./component/SelectForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      description: "",
      image_url: "",
    };
  }

  handleClose = (title, description, image_url) => {
    this.setState({
      show: !this.state.show,
      title: title,
      description: description,
      image_url: image_url,
    });
  };

  filtered = (event) => {
    let newData = data.filter((i) => {
      if (event === "All") {
        return true;
      } else {
        return JSON.stringify(i.horns) === event;
      }
    });
    this.setState({
      data: newData,
    });
    console.log(this.state.data);
  };


  render() {
    return (
      <div>
        <Header />
        <Forme  filtered={this.filtered} />
        <Main bests={data} handleClose={this.handleClose} />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
        />
      </div>
    );
  }
}

export default App;
