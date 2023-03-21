import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputBase,
  Alert,
  Stack,
} from "@mui/material";
import ButtonPrimaryMobile from "../component/mobile/ButtonPrimaryMobile";
import InputMobile from "../component/mobile/InputMobile";
import Logo from "../asset/kaslogo.png";
import { useNavigate } from "react-router-dom";

export default function LoginMobile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const heightSize = useRef(window.innerHeight);
  const widthSize = useRef(window.innerWidth);

  function do_login() {
    if (username === "admin" && password === "password") {
      navigate("/Admin/Home");
    } else {
      alert("username / password salah");
    }
  }
  console.log(heightSize.current);

  return (
    // <Box
    //   // maxWidth="sm"
    //   sx={{
    //     background: "linear-gradient(to right bottom, #38ef7d, #11998e)",
    //     flex: 1,

    //   }}
    // >
    <Box
      sx={{ background: "linear-gradient(to right bottom, #38ef7d, #11998e)", height:heightSize.current}}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img src={Logo} />
      </Box>
      <Box>
        <Typography
          style={{
            fontSize: 24,
            fontWeight: "700",
            lineHeight: "54px",
            textAlign: "center",
            color: "whitesmoke",
          }}
        >
          Informasi Keuangan Mushola Al-Hidayah
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 5,
          }}
        >
          <InputMobile
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputMobile
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 5,
          }}
        >
          <ButtonPrimaryMobile tittle="Login" onClick={do_login} />
          <ButtonPrimaryMobile
            tittle="Cek Kas"
            onClick={() => navigate("/User/Home")}
          />
        </Box>
      </Box>
    </Box>
    // </Box>
  );
}
