import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import TransactionItem from 'components/TransactionItem/TransactionItem';

const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <TransactionItem
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
  return (
    <table className={css.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
