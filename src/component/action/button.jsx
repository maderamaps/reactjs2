import { Button, Icon } from "@material-ui/core";
import React, { Component } from "react";

export class EditButton extends Component {
  render() {
    const { onClick, to } = this.props;
    return (
      <Button onClick={() => onClick()} href={to}>
        <Icon children="create" />
      </Button>
    );
  }
}

export class RemoveButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <Button onClick={() => onClick()}>
        <Icon children="delete" />
      </Button>
    );
  }
}
