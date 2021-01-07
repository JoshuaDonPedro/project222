//specifying posts as empty array
export default (posts = [], action) => {
  switch (action.type) {
    //update functionality
    case 'UPDATE':
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

    //fetches all the posts
    case 'FETCH_ALL':
      return action.payload;

    //creates posts, sends over array of posts and adds new post to action.payload
    case 'CREATE':
      return [...posts, action.payload];

      //keeps all posts except the deleted post
      case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
}