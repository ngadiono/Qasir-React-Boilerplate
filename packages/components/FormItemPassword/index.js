import React from 'react'
import PropTypes from 'prop-types'
import { default as Form } from 'antd/es/form';
import { default as Input } from 'antd/es/input';
import 'antd/es/form/style/index.css';
import 'antd/es/input/style/index.css';

const FormItem = Form.Item
const FormItemPassword = ({form, initialValue ,fieldName, message, placeholder}) => {
    return (
        <FormItem>
        {form.getFieldDecorator(fieldName, {
          initialValue: initialValue,
          rules: [{ required: true, message: {message} }],
        })(<Input placeholder={placeholder} size="default" type="password" />)}
        </FormItem>
    )
}

FormItemPassword.propTypes = {
    form: PropTypes.object,
    initialValue: PropTypes.string,
    fieldName: PropTypes.string
}


export default FormItemPassword