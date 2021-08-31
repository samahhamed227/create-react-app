import React from "react"; // we are adding the react library into our App component
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./component/SelectedBeast";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <SelectedBeast />
      </div>
    );
  }
}

export default App;
