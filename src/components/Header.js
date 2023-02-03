import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import { btnActions } from "../components/store/store";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const dispatch = useDispatch();
  // const btn = useSelector((state) => state.btn.btn);

  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar sx={{ height: "89px" }}>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                // href="/"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: "#eaeff1",
                  fontSize: 18,
                  // "&:hover": {
                  //   color: "common.white",
                  // },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Welcome Admin
              </Link>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                sx={{
                  p: 0.5,
                  bgcolor: "#eaeff1",
                  "&:hover": { bgcolor: "#eaeff1" },
                }}
              >
                <Avatar
                  src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png"
                  alt="My Avatar"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={btn} textColor="inherit">
          <Tab
            sx={{ fontSize: "15px", fontWeight: "bold" }}
            label="Sarwa Insurance"
            onClick={() => {
              dispatch(btnActions.update(0));
            }}
          />
          <Tab
            sx={{ fontSize: "15px", fontWeight: "bold" }}
            label="Sarwa Life"
            onClick={() => {
              dispatch(btnActions.update(1));
            }}
          />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
