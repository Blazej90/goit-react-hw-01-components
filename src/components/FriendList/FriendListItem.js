import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img
        className="friend-list-avatar"
        src={avatar}
        alt={`User avatar - ${name}`}
        width="48"
      />{' '}
      <p className="friend-list-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
