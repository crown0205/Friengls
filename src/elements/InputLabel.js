import React from 'react';
import styled from 'styled-components';

const InputLabel = (props) => {
  const { _onClick, defaultStyles, styles, children } = props;
  return (
    <Label onClick={_onClick} style={{ ...styles }} {...defaultStyles}>
      {children}
    </Label>
  );
};

InputLabel.defaultProps = {
  _onClick: () => {},
  defaultStyles: {},
};

const Label = styled.label`
  display: flex;
  height: 22px;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  color: #404040;
`;

export default InputLabel;
