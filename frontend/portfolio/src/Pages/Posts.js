import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaTrash, FaEllipsisV } from 'react-icons/fa';
import './Posts.css';

const UploadModal = ({ isOpen, onClose, onAddPost }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleUpload = () => {
    const newPost = {
      id: Date.now(), // Unique ID
      url: URL.createObjectURL(image),
      title: 'New Post',
      caption: caption,
      owner: { name: 'You' }, // Placeholder for owner
      comments: [],
      likedBy: [], // Track users who liked the post
      likeCount: 0 // Track like count
    };
    onAddPost(newPost);
    onClose();
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

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const currentUser = 'currentUser';

  useEffect(() => {
    const fetchData = async () => {
      const photoResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await photoResponse.json();

      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await userResponse.json();

      const postsWithOwners = photos.slice(0, 10).map((post, index) => ({
        ...post,
        owner: users[index % users.length],
        caption: `This is a description for the photo by ${users[index % users.length].name}`,
        comments: [],
        likedBy: [],
        likeCount: 0 
      }));

      setPosts(postsWithOwners);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    setActionMenuOpen(false);
  };

  const handleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const hasLiked = post.likedBy.includes(currentUser);
          return {
            ...post,
            likedBy: hasLiked
              ? post.likedBy.filter(user => user !== currentUser) 
              : [...post.likedBy, currentUser], 
            likeCount: hasLiked
              ? post.likeCount - 1 
              : post.likeCount + 1 
          };
        }
        return post;
      })
    );
  };

  const handleComment = (postId, comment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const handleDeleteComment = (postId, commentIndex) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: post.comments.filter((_, index) => index !== commentIndex) }
          : post
      )
    );
  };

  const handleShowCommentInput = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, showCommentInput: !post.showCommentInput }
          : post
      )
    );
  };

  const toggleActionMenu = (postId) => {
    setSelectedPostId(postId);
    setActionMenuOpen(!actionMenuOpen);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="posts-page">
      <h1>Recent Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src="https://via.placeholder.com/50" alt={post.owner.name} className="profile-picture" />
              <p className="post-owner">{post.owner.name}</p>
              <div className="post-menu">
                <button onClick={() => toggleActionMenu(post.id)} className="menu-btn">
                  <FaEllipsisV />
                </button>
                {actionMenuOpen && selectedPostId === post.id && (
                  <div className="action-menu">
                    
                    <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                  </div>
                )}
              </div>
            </div>
            <img src={post.url} alt={post.title} className="post-image" />
            <p className="post-caption">{post.caption}</p>
            <div className="post-actions">
              <button
                className={`like-button ${post.likedBy.includes(currentUser) ? 'liked' : ''}`}
                onClick={() => handleLike(post.id)}
              >
                <FaHeart /> Like ({post.likeCount})
              </button>
              <button className="comment-button" onClick={() => handleShowCommentInput(post.id)}>
                <FaComment /> Comment
              </button>
            </div>
            {post.showCommentInput && (
              <div className="comment-input">
                <textarea
                  placeholder="Add a comment..."
                  onBlur={(e) => handleComment(post.id, e.target.value)}
                />
                <button onClick={() => handleComment(post.id, '')}>Post</button>
              </div>
            )}
            <div className="comments-list">
              {post.comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment}</p>
                  <button onClick={() => handleDeleteComment(post.id, index)} className="delete-comment-btn">
                    <FaTrash /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="floating-action-btn">
        <button onClick={() => setIsUploadOpen(true)} className="add-btn">+</button>
      </div>

      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} onAddPost={handleAddPost} />
    </div>
  );
};

export default PostsPage;
