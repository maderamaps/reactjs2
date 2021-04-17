import React, { Component } from "react";
import "./header.css";
import { Breadcrumbs, Button, Icon } from "@material-ui/core";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="c-header">
        <div className="h-wrapper">
          <div className="logo"></div>

          <div className="navbar">
            <Button href="/home">
              <Icon children="home" />
            </Button>
            <Button href="/peserta">
              <Icon children="person" />
            </Button>
            <Button href="/materi">
              <Icon children="list-alt" />
            </Button>
          </div>
        </div>
        <div className="subheader">
          <Breadcrumbs />
        </div>
      </div>
    );
  }
}

export default Header;
