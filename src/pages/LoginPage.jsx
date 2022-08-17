import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { login } from "../app/authSlice";

const LoginPage = () => {
  const paperStyle = { padding: 20, width: 280, margin: "60px auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const inputStyle = { margin: "5px auto" };
  const btnstyle = { margin: "8px 0" };
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const handleIdChange = (e) => setUserId(e.target.value);
  const handlePasswordChange = (e) => setUserPassword(e.target.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validInput = (userId.length>9) && (userPassword.length>7);
  let handleSubmit = () => {
    dispatch(login({ id: nanoid(), username: userId, password: userPassword }));
    navigate("/", { replace: true });
    setUserId("");
    setUserPassword("");
    setRemember(false);
  };
  return (
    <Box textAlign={"center"}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={inputStyle}
          label="Username"
          placeholder="example: urg1254512"
          fullWidth
          required
          value={userId}
          onChange={handleIdChange}
        />
        <TextField
          style={inputStyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={userPassword}
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setRemember(!remember)}
              name="checkedB"
              checked={remember}
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          disabled={!validInput}
        >
          Sign In
        </Button>
        <Typography>
          <Link underline="none" href="/login">
            Forgot password ?
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
