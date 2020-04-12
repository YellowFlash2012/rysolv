import React from 'react';
import T from 'prop-types';

import BaseInput from './BaseInput';
import { StyledFlatIconButton } from './styledComponents';

const BaseInputWithAdornment = ({
  adornmentComponent,
  disabled,
  onClick,
  position,
  ...restProps
}) => {
  const adornment = {
    [`${position}Adornment`]: (
      <StyledFlatIconButton
        disabled={disabled}
        Icon={adornmentComponent}
        onClick={onClick}
      >
        {adornmentComponent}
      </StyledFlatIconButton>
    ),
  };
  return <BaseInput {...adornment} {...restProps} />;
};

BaseInputWithAdornment.defaultProps = { position: 'start' };

BaseInputWithAdornment.propTypes = {
  adornmentComponent: T.node,
  disabled: T.bool,
  onClick: T.func,
  position: T.oneOf(['end', 'start']),
};

export default BaseInputWithAdornment;
