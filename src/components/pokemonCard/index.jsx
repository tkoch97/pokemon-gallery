import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokemonCard({name, img, types}) {

  const handleType = () => {
    if(types[1]) {
      return types[0].type.name + "," + types[1].type.name
    }
    return types[0].type.name
  }

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt={name}
        />
        <CardContent style={{borderRadius: '30em'}}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {handleType()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}