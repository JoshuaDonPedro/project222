import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import {  deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentid }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        //demonstrates how the post will look on the web page
        // moment used to show time of post creation
        // creates button
        // loops over tags and adds hashtag before
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <div className={classes.overlay}>

                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <button style={{ color: 'white' }} size="small" onClick={() => setCurrentid(post._id)} >
                    <MoreHorizIcon fontSize="default" />

                </button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => '#${tag}')}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>

            </CardContent>
            <CardActions className={classes.cardActions}>
                <button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small" />
               like
               {post.likeCount}
                </button>
                <button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small" />
               Delete

               </button>

            </CardActions>




        </Card>
    );
}

export default Post;


