import React from 'react';

import './Link.modules.css';

interface LinkProps {
  link: string;
  linkText: string;
}

const Link = (props: LinkProps) => {
  const { link, linkText } = props;

  return (
    <div className="linkContainer">
      <a href={link} target="#" className="linkText">
        {linkText}
      </a>
    </div>
  );
};

export default Link;
