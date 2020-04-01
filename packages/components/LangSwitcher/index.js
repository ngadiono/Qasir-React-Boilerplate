import React from 'react';
import PropTypes from 'prop-types';
import { default as Select } from 'antd/es/select';

import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';

const availableLocales = [
  { name: 'id', text: 'Bahasa Indonesia' },
  { name: 'en-US', text: 'English' }
];

const { Option } = Select;

/**
 * LangSwitcher component, component to list and change language.
 *
 * @param {Object} param0 component props, { defaultLanguage: string, onChangeLanguage: function }
 * @returns {DOM}
 */
export const LangSwitcher = ({ defaultLanguage = 'id', onChangeLanguage }) => (
  <Select
    defaultValue={defaultLanguage}
    style={{ width: 192 }}
    onChange={onChangeLanguage}
  >
    {availableLocales.map(item => (
      <Option key={item.name} value={item.name}>
        {item.text}
      </Option>
    ))}
  </Select>
);

LangSwitcher.propTypes = {
  /**
   * The initial language.
   */
  defaultLanguage: PropTypes.string,

  /**
   * On change language event handler.
   */
  onChangeLanguage: PropTypes.func.isRequired
};
