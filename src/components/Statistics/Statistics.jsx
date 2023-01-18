import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import ListItem from './ListItem';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat => (
    <ListItem
      key={stat.id}
      id={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
