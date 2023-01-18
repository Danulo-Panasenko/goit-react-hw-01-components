import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const ListItem = ({ label, percentage }) => {
  return (
    <li className={css.stats_item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
