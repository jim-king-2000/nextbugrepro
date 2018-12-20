import React, { Component } from 'react';
import Select from '@atlaskit/select';
import { Field } from '@atlaskit/form';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { value: { label: 'c', value: 'c' } };
  }

  options = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' }
  ];

  render() {
    return (
      <Field label='select' name='select'>
        {({ fieldProps: { id, ...rest }}) => (
          <Select
          options={this.options}
          inputId={id}
          value={this.state.value}
          {...rest}
        />)}
      </Field>
    );
  }
}
