import axios from 'axios';

// telling client side to point at backend 
const url = 'http://localhost:5000/posts';

//makes call to url
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

//api call for update post route
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//api call for delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);