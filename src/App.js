import React from "react";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Inbox from "./comps/inbox";
import Trash from "./comps/trash";
import Important from "./comps/important";
import Spam from "./comps/spam";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import StarIcon from "@material-ui/icons/Star";
import { NavLink, Link, Route, Switch } from "react-router-dom";
import Email from "./comps/email";
//import email1 from "./data.js";
export default class App extends React.Component {
  state = {
    selected: 1,
    left: false,
    trick: false
  };
  emails = [
    {
      title: "Important Weather Advisory",
      Name: "Ahmed",
      image: "ahmed.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    },
    {
      title: "Rock the color of the year",
      Name: "George",
      image: "george.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    },
    {
      title: "Where to Drink Beer Right Now",
      Name: "Gillian",
      image: "gillian.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    },

    {
      title: "As You Wish",
      Name: "Hania",
      image: "hania.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    },
    {
      title: "*Don't Open This Email*",
      Name: "Mariam",
      image: "mariam.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    },
    {
      title: "Not Cool, Guys",
      Name: "Robert",
      image: "robert.png",
      emailStatus: true,
      opened: false,
      important: false,
      content:
        "Dear Ahmad, I would like to invite you for the AMAS conference which is going to be held in Canada next year"
    }
  ];
  drawerWidth = "18vw";
  handleSelect = index => {
    this.setState({ selected: index });
  };

  handleDelete = index => {
    this.emails[index].emailStatus = false;
    this.setState({ trick: !this.state.trick });
  };

  handleOpened = index => {
    this.emails[index].opened = true;
    this.setState({ trick: !this.state.trick });
  };
  sideList = () => {
    return (
      <div style={{ width: this.drawerWidth }}>
        <List>
          {["Inbox", "Trash", "Important", "Gunk1"].map((text, index) => (
            <NavLink
              key={index}
              activeStyle={{ bakground: "green", fontSize: 18 }}
              style={{ textDecoration: "none" }}
              exact
              to={
                index === 0
                  ? "/"
                  : index === 1
                  ? `/comps/trash`
                  : index === 2
                  ? "/comps/important"
                  : "/comps/spam"
              }
            >
              <ListItem
                button
                onClick={() => this.handleSelect(index + 1)}
                key={index}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <InboxIcon />
                  ) : index === 1 ? (
                    <DeleteSweepIcon />
                  ) : index === 2 ? (
                    <StarIcon />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );
  };

  handleTrick = () => {
    this.setState({ trick: !this.state.trick });
  };
  handleSave = index => {
    this.emails[index].important = !this.emails[index].important;
    this.setState({ trick: !this.state.trick });
  };
  render() {
    return (
      <React.Fragment>
        {/* {console.log(email1)} */}
        <AppBar
          position="fixed"
          style={{
            marginLeft: this.drawerWidth,
            width: `calc(100% - ${this.drawerWidth})`
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={1} style={{ backgroundColor: "green" }}>
          <Drawer
            open={true}
            elevation={30}
            style={{ textAlign: "center", backgroundColor: "green" }}
            paper={{ backgroundColor: "green" }}
            variant="persistent"
          >
            <h3>CP3170</h3>
            <Divider />
            {this.sideList()}
          </Drawer>
        </Paper>
        <div style={{ marginLeft: this.drawerWidth, marginTop: 100 }}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Inbox
                  emails={this.emails}
                  onDel={this.handleDelete}
                  handleOpened={this.handleOpened}
                  onSave={this.handleSave}
                />
              )}
            />
            <Route
              exact
              path={`/comps/trash`}
              component={() => (
                <Trash emails={this.emails} onDel={this.handleDelete} />
              )}
            />
            <Route
              exact
              path="/comps/important"
              component={() => (
                <Important
                  emails={this.emails}
                  onDel={this.handleDelete}
                  handleOpened={this.handleOpened}
                  onSave={this.handleSave}
                />
              )}
            />
            <Route exact path={`/comps/inbox/:id`} component={Email} />
            <Route exact path="/comps/spam" component={Spam} />
          </Switch>
        </div>
        {/* <div style={{ marginLeft: this.drawerWidth, marginTop: 100 }}>
          {this.state.selected === 1 ? (
            <Inbox
              emails={this.emails}
              onDel={this.handleDelete}
              handleOpened={this.handleOpened}
              onSave={this.handleSave}
            />
          ) : this.state.selected === 2 ? (
            <Trash emails={this.emails} onDel={this.handleDelete} />
          ) : this.state.selected === 3 ? (
            <Important
              emails={this.emails}
              onDel={this.handleDelete}
              handleOpened={this.handleOpened}
              onSave={this.handleSave}
            />
          ) : (
            <Spam />
          )}
        </div> */}
      </React.Fragment>
    );
  }
}
