import express from 'express';

import { getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js'

const router = express.Router();

//reachable at local hosts 5000/posts
//executes ones user visits route
router.get('/', getPosts);
router.post('/', createPost);
//patch used for updating, id of post is needed
router.patch('/:id', updatePost)
//delete the selected id of post
router.delete('/:id', deletePost);


export default router;