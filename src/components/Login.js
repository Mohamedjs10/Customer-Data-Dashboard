import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login({ setauthenticated }) {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const credentials = [
    { username: "admin", password: "123456" },
    { username: "adminn", password: "1234566" },
    { username: "hussein", password: "111111" },
  ];

  const isCredentialExist = (checkedCredential) =>
    credentials.some(
      (credential) =>
        credential.username == checkedCredential.username &&
        credential.password == checkedCredential.password
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isCredentialExist({ username, password })) {
      setUsernameError(false);
      setPasswordError(false);
      console.log("authenticated");
      setauthenticated(true);
    } else if (!isCredentialExist({ username, password })) {
      setUsernameError(true);
      setPasswordError(true);
      console.log("not authenticated: wrong username or password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ minHeight: "100vh", pt: 5 }}
      >
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <img src="/contact-en.png"></img>
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",

              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#f5821f" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#282780", fontWeight: "bold" }}
            >
              Sign in
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              error={usernameError}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={passwordError}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    "&": { color: "#282780" },
                    "&.Mui-checked": { color: "#282780" },
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: "bold",
                backgroundColor: "#282780",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
