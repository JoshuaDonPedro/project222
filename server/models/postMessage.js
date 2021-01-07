import mongoose from 'mongoose';


//creating scgema for document/instructions for posts 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defualt: new Date()
    }

});
//exporting moongoose model from post message file
const PostMessage = mongoose.model = ('PostsMessage', postSchema);


export default PostMessage;