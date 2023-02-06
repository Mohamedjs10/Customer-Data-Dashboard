import React, { useEffect, useLayoutEffect, useState } from "react";
import Login from "./components/Login";
import Paperbase from "./components/Paperbase";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function Home() {
  const [authenticated, setauthenticated] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      setauthenticated(true);
    }
  }, []);
  const tab = useSelector((state) => state.tab.tab);
  console.log(tab);
  return (
    <>
      {!authenticated ? (
        <Box sx={{ backgroundColor: "#dfe3ee" }}>
          <Login setauthenticated={setauthenticated}></Login>
        </Box>
      ) : (
        <Paperbase />
      )}
    </>
  );
}
