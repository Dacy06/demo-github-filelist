import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ type }) => (<i className={`fa ${type === 'folder' ? 'fa-folder' : 'fa-file-text-o'}`} />);

FileIcon.propType = {
  type: PropTypes.string.isRequired
};

export default FileIcon;