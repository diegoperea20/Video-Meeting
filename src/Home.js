import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      darkTheme: false, // Add status to control the theme
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  // Method to change the subject
  toggleDarkTheme = () => {
    this.setState((prevState) => ({
      darkTheme: !prevState.darkTheme,
    }));

    // Adding or removing the 'dark-theme' class from the 'body' element
    document.body.classList.toggle("dark-theme", !this.state.darkTheme);
  };

  render() {
    return (
      <div className={`container2 ${this.state.darkTheme ? "dark-theme" : ""}`}>
        {/* Add button to change the theme*/}
        <IconButton
          onClick={this.toggleDarkTheme}
          className="theme-toggle-button"
        >
          <DarkModeIcon />
        </IconButton>
        <div>
          <h1 style={{ fontSize: "45px" }}>Meeting</h1>
          <h4 style={{ fontWeight: "200" }}>Meeting format</h4>
        </div>

        <div
          style={{
            background: "white",
            width: "30%",
            height: "auto",
            padding: "20px",
            minWidth: "400px",
            textAlign: "center",
            margin: "auto",
            marginTop: "100px",
            borderRadius: "10px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>
            Start or join a meeting
          </p>
          <Input placeholder="URL" onChange={(e) => this.handleChange(e)} />
          <Button
            variant="contained"
            color="primary"
            onClick={this.join}
            style={{ margin: "20px" }}
          >
            Go
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
