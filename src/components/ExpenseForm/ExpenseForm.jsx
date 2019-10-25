import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { saveExpense } from '../redux/BudgetApp/BudgetAction';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    this.props.saveExpense(expense);

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form className="styledForm" onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="styledInput"
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            className="styledInput"
          />
        </Label>

        <Button label="Add" type="submit" className="styledButton" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  saveExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = { saveExpense };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(ExpenseForm);
