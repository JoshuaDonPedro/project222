import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

//recieving set current id inside of posts
const Posts = ({setCurrentid}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    //if post hasnt been made, show curcular progress
    // returns grid for each post 
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentid ={setCurrentid} />
          </Grid>
        ))}
      </Grid>
      //specifys size of post on different devices
    )
  );
}

export default Posts;