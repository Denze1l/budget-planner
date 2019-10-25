import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  getExpenses,
  getBalance,
} from '../redux/BudgetApp/BudgetSelectors';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
  balance: getBalance(state),
});

const ValuesContainer = connect(
  mapStateToProps,
  null,
)(Values);

export default ValuesContainer;
