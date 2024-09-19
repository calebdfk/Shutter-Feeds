import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { FaHeart, FaComment, } from 'react-icons/fa';
import './Posts.css'; // Reusing styles for post details

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    username: 'nessy_nelian',
    name: 'Nessy',
    bio: 'Sagittarius | Tech 👑 | Magical 😎',
    followers: 1355,
    following: 1566,
    posts: 1,
    website: 'https://www.example.com',
    profilePic: '/path-to-image',
  });

  const [userPosts, setUserPosts] = useState([]);
  const [view, setView] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch posts from the mockup API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
      .then((response) => response.json())
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const toggleEditMode = () => setEditMode(!editMode);

  // Function to handle opening the full post view
  const openPost = (post) => {
    setSelectedPost(post);
  };

  // Function to handle closing the full post view
  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="profile-container">
      {!editMode ? (
        // Profile view section
        <div className="profile-view">
          <div className="profile-header">
            <img src={profile.profilePic} alt="Profile" className="profile-pic" />
            <div className="profile-details">
              <h2>{profile.username}</h2>
              <p>{profile.name}</p>
              <p>{profile.bio}</p>
              <div className="profile-stats">
                <span>{profile.posts} posts</span>
                <span>{profile.followers} followers</span>
                <span>{profile.following} following</span>
              </div>
              <button onClick={toggleEditMode}>Edit Profile</button>
            </div>
          </div>
          <div className="profile-tabs">
            <button onClick={() => setView('posts')}>Posts</button>
            <button onClick={() => setView('saved')}>Saved</button>
          </div>
          <div className="profile-content">
            {view === 'posts' && (
              <div className="posts-grid">
                {userPosts.map((post) => (
                  <div key={post.id} className="post-item" onClick={() => openPost(post)}>
                    <img src={post.thumbnailUrl} alt={post.title} />
                  </div>
                ))}
              </div>
            )}
            {view === 'saved' && <p>Saved posts will go here...</p>}
          </div>
        </div>
      ) : (
        // Edit profile section
        <div className="edit-profile">
          <h2>Edit Profile</h2>
          <div className="edit-form">
            <label>
              Username:
              <input
                type="text"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </label>
            <label>
              Bio:
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </label>
            <label>
              Website:
              <input
                type="text"
                value={profile.website}
                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
              />
            </label>
            <button onClick={toggleEditMode}>Save Changes</button>
          </div>
        </div>
      )}

      {/* Full post view modal */}
      {selectedPost && (
        <div className="post-modal">
          <div className="post-modal-content">
            <button className="close-btn" onClick={closePost}>Close</button>
            <img src={selectedPost.url} alt={selectedPost.title} className="post-image" />
            <p className="post-caption">{selectedPost.title}</p>
            <div className="post-actions">
              <button className="like-button"><FaHeart /> Like</button>
              <button className="comment-button"><FaComment /> Comment</button>
            </div>
            {/* Add more post details like comments, delete button here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
