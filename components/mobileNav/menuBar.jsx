import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
//import ExpandLess from "@material-ui/icons/ExpandLess";
//import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import Link from "next/link";
import menuItems from "./menuItems";
import { ListItemIcon } from "@material-ui/core";
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/solid';
//import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const styles = {
  list: {
    width: 250
  },
  links: {
    textDecoration: "none"
  },
  menuHeader: {
    paddingLeft: "30px"
  }
};
class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  handleClick(item) {
    this.setState(prevState => ({ [item]: !prevState[item] }));
  }
  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handler(children) {
    const { classes } = this.props;
    const { state } = this;
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              {/* <AccessAlarmIcon /> */}
              <Link href="/home">
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name} className="">
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            {/* <AccessAlarmIcon /> */}

            <ListItemText inset primary={subOption.name} className="mr-6"/>
            {state[subOption.name] ? <ChevronDownIcon className="scale-75"/> : <ChevronUpIcon className="scale-75"/>}

          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    const { classes, drawerOpen, menuOptions } = this.props;
    return (
      <div >
        <Drawer
          variant="persistent"
          anchor="left"
          open
        >
          <div>
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                {/* <AccessAlarmIcon /> */}
                <ListItemText
                  inset
                  primary="Nested Menu"
                />
              </ListItem>
              {this.handler(menuItems.data)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default MenuBar;
