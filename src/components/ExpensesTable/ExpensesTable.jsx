import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';
import Button from '../shared/Button';
import { getExpensesArr } from '../redux/BudgetApp/BudgetSelectors';
import { onRemove } from '../redux/BudgetApp/BudgetAction';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemoveFunc }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button
              label="Delete"
              className="styledButton"
              onClick={() => onRemoveFunc(id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRemoveFunc: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getExpensesArr(state),
});

const mapDispatchToProps = {
  onRemoveFunc: onRemove,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ExpensesTable);
