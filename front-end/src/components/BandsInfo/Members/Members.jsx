import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Members = ({ members }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <List>
        <ListItem
          style={{ justifyContent: "center" }}
          button
          onClick={() => setOpen(!open)}
        >
          <Typography style={{ textTransform: "uppercase" }} variant="h5">
            <Box fontStyle="bold" textAlign="center" m={4}>
              Members
            </Box>
          </Typography>
          {open ? (
            <ExpandLessIcon style={{ fontSize: "30px" }} />
          ) : (
            <ExpandMoreIcon style={{ fontSize: "30px" }} />
          )}
        </ListItem>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {members.map((member) => (
          <List key={member.name}>
            <Divider />
            <ListItem>
              <Typography variant="h6">
                <Box fontStyle="normal">{member.name}</Box>
              </Typography>
            </ListItem>
            <Divider />
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default Members;
