import React from 'react';

// Components
import { TETROMINOS } from '../services/tetrominos';

// Styled Components
import { StyledCell } from './styles/StyledCell';

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell;