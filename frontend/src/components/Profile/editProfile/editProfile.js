import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  getCurrent } from "../../../JS/actions/userActions";
import { getProfile, updateProfile } from "../../../JS/actions/profileActions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const theme = createTheme();

export default function EditProfile() {

    const {_id} = useParams()

  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(getProfile());
    
  })
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
     
    });
    dispatch(
        updateProfile(_id, updateProfile, navigate )
    );
  };

  const profile = useSelector(state=> state.profileReducer.currentProfile)
const [updateProfile, setupdateProfile] = React.useState(profile)

  React.useEffect(() => {
dispatch(getCurrent(_id));
dispatch(getProfile);
  }, [])

  React.useEffect(() => {
    setupdateProfile(profile)
  }, [profile])
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile{" "}
          </Typography> 
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
              id="name"
              label="edit name"
              name="name"
              autoFocus
              value= {updateProfile.name}
              onChange={(e)=> setupdateProfile({...updateProfile, name: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Surname"
              label="edit Surname"
              value= {updateProfile.Surname}
              onChange={(e)=> setupdateProfile({...updateProfile, Surname: e.target.value})}
            />
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              save{" "}
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}