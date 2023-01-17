import PropTypes from "prop-types"
import css from './FriendList.module.css';
import  FriendListItem  from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    const elements = friends.map(friend => <FriendListItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />);
    return (<ul className={css.list}>
     {elements}
    </ul>);
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
export default FriendList;