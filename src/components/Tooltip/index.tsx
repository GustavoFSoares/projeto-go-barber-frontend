import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ className, title, children }) => (
  <Container className={className}>
    {children}
    <span className="tooltip-content">{title}</span>
  </Container>
);

export default Tooltip;
