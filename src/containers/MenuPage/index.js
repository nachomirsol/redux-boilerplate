// import React, { Component } from "react";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Drawer from "@material-ui/core/Drawer";
// import { withStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import menuData from "../../mocks/menuData";

// const styles = {
//     list: {
//         width: 250
//     },
//     links: {
//         textDecoration: "none"
//     },
//     menuHeader: {
//         paddingLeft: "30px"
//     }
// };
// class MenuPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         console.log(menuData)
//     }
//     // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
//     handleClick = (item) => {
//         this.setState(prevState => ({ [item]: !prevState[item] }));
//     }
//     // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
//     handler = (children) => {

//         const { state } = this;
//         return children.map(subOption => {
//             if (!subOption.children) {
//                 return (
//                     <div key={subOption.label}>
//                         <ListItem button key={subOption.label}>

//                             <Link to={subOption.url}>
//                                 <ListItemText inset primary={subOption.label} />
//                             </Link>
//                         </ListItem>
//                     </div>
//                 );
//             }
//             return (
//                 <div key={subOption.id}>
//                     <ListItem button onClick={() => this.handleClick(subOption.label)}>

//                         <ListItemText inset primary={subOption.label} />
//                         {state[subOption.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                     </ListItem>
//                     <Collapse in={state[subOption.label]} timeout="auto" unmountOnExit>
//                         {this.handler(subOption.children)}
//                     </Collapse>
//                 </div>
//             );
//         });
//     }
//     render() {

//         return (
//             <div>
//                 <Drawer
//                     variant="persistent"
//                     anchor="left"
//                     open
//                 >
//                     <div>
//                         <List>
//                             <ListItem key="menuHeading" divider disableGutters>

//                                 <ListItemText

//                                     inset
//                                     primary="Nested Menu"
//                                 />
//                             </ListItem>
//                             {this.handler(menuData.children)}
//                         </List>
//                     </div>
//                 </Drawer>
//             </div>
//         );
//     }
// }
// export default withStyles(styles)(MenuPage);