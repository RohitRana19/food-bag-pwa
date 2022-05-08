import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <>
      <div style={{ margin: "2vh" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.e669DMGrUf3B2my-Rq1RLAHaEo?w=281&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              alt="Pizza"
              padding="100px"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pizza
                <h6>Rs 200</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various other ingredients, which is then baked
                at a high temperature, traditionally in a wood-fired oven. A
                small pizza is sometimes called a pizzetta.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add
            </Button>
            <Button size="small" color="primary">
              Rate
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ margin: "2vh" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.xX4p8_H7wvWLlHF_nc93LgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              alt="Pizza"
              padding="100px"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pasta
                <h6>Rs 190</h6>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pasta is a type of food typically made from an unleavened dough
                of wheat flour mixed with water or eggs, and formed into sheets
                or other shapes, then cooked by boiling or baking
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add
            </Button>
            <Button size="small" color="primary">
              Rate
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
