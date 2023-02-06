import React, { useEffect, useLayoutEffect, useState } from "react";
import Login from "./components/Login";
import Paperbase from "./components/Paperbase";
import Box from "@mui/material/Box";
export default function Home() {
  const [authenticated, setauthenticated] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      setauthenticated(true);
    }
  }, []);

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
