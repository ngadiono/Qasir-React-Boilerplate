import React from 'react';
import PropTypes from 'prop-types';
import { default as Form } from 'antd/es/form';
import { default as Input } from 'antd/es/input';
import 'antd/es/form/style/index.css';
import 'antd/es/input/style/index.css';

const FormItem = Form.Item;

class FormItemEmail extends React.Component {
  handleValuechange = value => {
    if (this.props.handleOnChange) {
      return this.props.handleOnChange(value.target.value);
    }
  };

  render() {
    const {
      form,
      defaultValue,
      fieldName,
      label,
      validateCustom,
      message,
      required,
      autoComplete,
      placeholder
    } = this.props;

    if (validateCustom) {
      return (
        <FormItem
          label={label}
          validateStatus={validateCustom ? validateCustom.title : ''}
          help={validateCustom ? validateCustom.message : ''}
        >
          {form.getFieldDecorator(fieldName, {
            initialValue: defaultValue,
            rules: [
              {
                type: 'email',
                message: 'Format E-Mail salah'
              },
              {
                required: required,
                message: message
              }
            ]
          })(
            <Input
              placeholder={placeholder}
              autocomplete={autoComplete}
              size="default"
              onChange={this.handleValuechange}
            />
          )}
        </FormItem>
      );
    } else {
      return (
        <FormItem label={label}>
          {form.getFieldDecorator(fieldName, {
            initialValue: defaultValue,
            rules: [
              {
                type: 'email',
                message: 'Format E-Mail salah'
              },
              {
                required: required,
                message: message
              }
            ]
          })(
            <Input
              placeholder={placeholder}
              autocomplete={autoComplete}
              size="default"
              onChange={this.handleValuechange}
            />
          )}
        </FormItem>
      );
    }
  }
}

FormItemEmail.propTypes = {
  form: PropTypes.object,
  defaultValue: PropTypes.string,
  fieldName: PropTypes.string
};

export default FormItemEmail;
