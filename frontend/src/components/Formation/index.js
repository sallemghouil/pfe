import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function Formation({ el }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={el.pic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          added by: {el.user&&el.user.fullName}
        </Typography>
      </CardContent>
      
    </Card>
  );
}