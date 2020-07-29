import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from './fileIcon';
import FileName from './fileName';
import CommitMessage from './commitMessage';
import Time from './time';

const FileListItem = ({ file }) => (
  <tr className="filelist-item">
    <td className="file-icon"><FileIcon type={file.type}/></td>
    <td className="file-name"><FileName name={file.name} /></td>
    <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
    <td className="age"><Time time={file.updated_at} /></td>
  </tr>
);
FileListItem.propType = {
  file: PropTypes.object.isRequired
}

export default FileListItem;