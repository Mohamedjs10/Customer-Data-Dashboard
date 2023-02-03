import React, { useState } from "react";
import Login from "./components/Login";
import Paperbase from "./components/Paperbase";
import Box from "@mui/material/Box";
export default function Home() {
  const [authenticated, setauthenticated] = useState(false);

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
