import React from 'react';
import PropTypes from 'prop-types';

const FileName = ({ name }) => (<span>{name}</span>);

FileName.propType={
  name:PropTypes.string.isRequired
}

export default FileName;