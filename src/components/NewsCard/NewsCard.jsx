import React from 'react';
import PropTypes, { shape } from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function NewsCard({ data }) {
  const {
    title,
    image,
    description,
    tags,
  } = data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tags}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NewsCard.propTypes = {
  data: shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
