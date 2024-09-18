import React, { useState } from 'react';
import './NotificationsPage.css';

// Example static notifications data
const staticNotifications = [
  { id: 1, user: 'Alice', message: 'liked your photo', timestamp: new Date().toLocaleTimeString() },
  { id: 2, user: 'Bob', message: 'commented on your post', timestamp: new Date().toLocaleTimeString() },
  { id: 3, user: 'Charlie', message: 'started following you', timestamp: new Date().toLocaleTimeString() },
  { id: 4, user: 'Dave', message: 'shared your photo', timestamp: new Date().toLocaleTimeString() },
  { id: 5, user: 'Eva', message: 'mentioned you in a comment', timestamp: new Date().toLocaleTimeString() },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [nextNotificationIndex, setNextNotificationIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNewNotification = () => {
    setLoading(true);

    if (nextNotificationIndex < staticNotifications.length) {
      const newNotification = staticNotifications[nextNotificationIndex];
      setNotifications(prevNotifications => [...prevNotifications, newNotification]);
      
      setNextNotificationIndex(nextNotificationIndex + 1);
    } else {
 
      alert('No more new notifications');
    }

    setLoading(false);
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <button className="fetch-btn" onClick={fetchNewNotification} disabled={loading}>
        {loading ? 'Fetching...' : 'Check New Notification'}
      </button>
      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
              <div className="notification-content">
                <p><strong>{notification.user}</strong> {notification.message}</p>
                <small>{notification.timestamp}</small>
              </div>
            </div>
          ))
        ) : (
          <p>No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
