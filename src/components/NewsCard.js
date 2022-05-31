import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function NewsCard(props) {
  

  console.log("newscard"+props.newsitem)
  return (
    <Card onClick={()=>{
      window.open(props.newsitem.url)
    }} sx={{ maxWidth: 345,marginTop: 5 , marginX:2 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={props.newsitem.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.newsitem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.newsitem.content!=null?props.newsitem.content.slice(0,200)+"...":"none"}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>

  )
}

export default NewsCard