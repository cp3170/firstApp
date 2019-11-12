import React, { Component } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import Email from "./email";
import Spam from "./spam";
import {
  NavLink,
  Link,
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

class Inbox extends Component {
  state = {
    expanded: false
  };

  handleExpanded = index => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <div style={{ marginLeft: "2vw" }}>
        {this.props.emails.map((item, index) =>
          item.emailStatus ? (
            <React.Fragment>
              <NavLink to={`/comps/inbox/${index}`}>
                {/* <ExpansionPanel
                key={index}
                expanded={this.state.expanded}
                //  onChange={() => this.props.handleOpened(index)}
              >
                <ExpansionPanelSummary
                  expandIcon={
                    <Button onClick={() => this.handleExpanded(index)}>
                      Read
                    </Button>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                > */}
                <div
                  style={{
                    backgroundColor: item.opened ? "white" : "lightgray",
                    marginBottom: 10,
                    width: "90%"
                  }}
                  onClick={event => event.stopPropagation()}
                  onFocus={event => event.stopPropagation()}
                >
                  <Avatar
                    alt={item.Name}
                    src={`./images/${item.image}`}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle"
                    }}
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

                  <IconButton
                    aria-label="Save"
                    onClick={() => this.props.onSave(index)}
                  >
                    {item.important ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <Divider />
                </div>
              </NavLink>

              {/* <Route path="/comps/inbox/:id" component={Email} /> */}
              {/* </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{item.content}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel> */}
            </React.Fragment>
          ) : null
        )}
        {/* {this.props.match.params.id} */}
      </div>
    );
  }
}

export default Inbox;
