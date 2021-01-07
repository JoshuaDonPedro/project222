import * as api from '../api/index.js';



//function to return the action 
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // data where posts are stored
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

//
export const createPost = (post) => async (dispatch) =>{
  try {
    //makes post api request to server and sends post
    const {data} = await api.createPost(post);
  
    dispatch({ type: 'CREATE', payload: data});
  } catch (error) {
    console.log(error);
    
  }
}
//recieves id and post, makes api request to update post, returns updated post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }

  
};
// delete functionality
export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}
  



