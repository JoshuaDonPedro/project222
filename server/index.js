import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
//initialize app
const app = express();

//using express middleaware to connect




app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://jpd1984:jdp1984123@cluster0.0haka.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
//db connection using mongo db using port 5000
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running on port: ${PORT}')))
    .catch((error) => console.log(error.messge));

    // prevents warnings in the console
mongoose.set('useFindAndModify', false);
