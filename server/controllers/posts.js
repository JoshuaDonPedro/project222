import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';




// retrieves all posts in database 
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        // if every thing worked array is sent back to our console + return error message if error 
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//creating new post
export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {

        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}
//extracting id from req.params
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;



    // if post id is valid send back error messaage
    if (!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('invalid id');



    //if id is true recieve updated post

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);

    //if id is correct delete post otherwise display error message
    export const deletePost = async (req, res) => {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
        await PostMessage.findByIdAndRemove(id);
    
        res.json({ message: "Post deleted successfully." });
    }
    
}
