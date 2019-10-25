import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { onSave } from '../redux/BudgetApp/BudgetAction';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form className="styledForm" onSubmit={this.handleSubmit}>
        <Label className="labelStyles" customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budget}
            onChange={this.handleChange}
            className="styledInput"
          />
        </Label>

        <Button className="styledButton" label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSave,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(BudgetForm);
