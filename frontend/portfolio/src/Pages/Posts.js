import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaTrash } from 'react-icons/fa';
import './Posts.css';

// UploadModal Component
const UploadModal = ({ isOpen, onClose, onAddPost }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleUpload = () => {
    if (image && caption) {
      // Mocking the upload process and passing the new post to the parent component
      const newPost = {
        id: Date.now(), // Unique ID for the new post
        url: URL.createObjectURL(image), // Create a URL for the uploaded image
        owner: { name: 'New User' }, // Mocking a user for the new post
        caption: caption
      };
      onAddPost(newPost); // Add the new post
      onClose(); // Close the modal
    }
  };

  if (!isOpen) return null;

  return (
    <div className="upload-modal">
      <div className="upload-modal-content">
        <h2>Upload New Post</h2>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter a caption"
        />
        <button className="upload-btn" onClick={handleUpload}>Upload</button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// PostsPage Component
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  useEffect(() => {
    // Fetch photos and user data from the mockup API
    const fetchData = async () => {
      const photoResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await photoResponse.json();

      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await userResponse.json();

      // Associate posts with users (simulate post ownership)
      const postsWithOwners = photos.slice(0, 10).map((post, index) => ({
        ...post,
        owner: users[index % users.length], // Assign each post to a user
        caption: `This is a description for the photo by ${users[index % users.length].name}`, // Sample caption
      }));

      setPosts(postsWithOwners);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the beginning of the posts array
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId)); // Remove the post with the given ID
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="posts-page">
      <h1>View Recent Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src="https://via.placeholder.com/50" alt={post.owner.name} className="profile-picture" />
              <p className="post-owner">{post.owner.name}</p>
            </div>
            <img src={post.url} alt={post.title} className="post-image" />
            <p className="post-caption">{post.caption}</p>
            <div className="post-actions">
              <button className="like-button">
                <FaHeart /> Like
              </button>
              <button className="comment-button">
                <FaComment /> Comment
              </button>
              <button className="delete-button" onClick={() => handleDeletePost(post.id)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="floating-action-btn">
        <button onClick={() => setIsUploadOpen(true)} className="add-btn">+</button>
      </div>

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default PostsPage;
