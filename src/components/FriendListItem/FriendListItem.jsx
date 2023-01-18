import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const fullClassName = isOnline ? [css.online] : [css.offline];

  return (
    <li className={css.item}>
      <span className={fullClassName}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}></p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
