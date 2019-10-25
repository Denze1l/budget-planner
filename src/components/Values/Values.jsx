import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';
import Stat from '../shared/Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;

// const mapStateToProps = state => ({
//   budget: getBudget(state),
//   expenses: getExpenses(state),
//   balance: getBalance(state),
// });

// export default compose(connect(mapStateToProps))(Values);
