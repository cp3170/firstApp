import React, { Component, Fragment } from "react";
import { Avatar, Divider, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
class Trash extends Component {
  state = {};

  render() {
    return (
      <div style={{ marginLeft: "2vw" }}>
        {this.props.emails.map((item, index) =>
          !item.emailStatus ? (
            <React.Fragment>
              <Avatar
                alt={item.Name}
                src={`../images/${item.image}`}
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />

              <div
                style={{
                  display: "inline-block",
                  marginLeft: 15
                }}
              >
                {item.Name}
                <div style={{ display: "inline-block", marginLeft: 60 }}>
                  {item.title}
                </div>
              </div>

              <IconButton
                aria-label="delete"
                onClick={() => this.props.onDel(index)}
              >
                <DeleteIcon />
              </IconButton>

              <Divider />
            </React.Fragment>
          ) : null
        )}
      </div>
    );
  }
}

export default Trash;
