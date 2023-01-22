import React, { LinkHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  to: string;
  text: string;
}

const CunstomLink: React.FC<LinkProps> = ({ text, to, className }: LinkProps) => {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

export default CunstomLink;
