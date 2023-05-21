import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { handlePokemonType } from '../../functions/handleType';

export default function PokemonCard({name, img, types}) {

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height='150em'
          image={img}
          alt={name}
          style={{
            objectFit:'contain'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" 
          style={{
              display: 'flex', 
              gap: '0.5em', 
              justifyContent: 'center'
            }}>
            <h4>Type:</h4> {handlePokemonType(types)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}