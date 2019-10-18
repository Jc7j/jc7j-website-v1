import React from 'react';
import { Button } from '@material-ui/core';

import './Link.modules.css';

interface LinkProps {
  link: string;
  linkText: string;
}

const Link = (props: LinkProps) => {
  const { link, linkText } = props;

  return (
    <div className="linkContainer">
      <Button variant="contained" size="large">
        <a href={link} target="#" className="linkText">
          {linkText}
        </a>
      </Button>
    </div>
  );
};

export default Link;
