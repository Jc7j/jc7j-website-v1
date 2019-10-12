import React from 'react';

import Link from '../Link/Link';
import './Header.modules.css';
interface HeaderProps {
  name: string;
  subHeading: string;
}

const Header = (props: HeaderProps) => {
  const { name, subHeading } = props;
  return (
    <header className="headerContainer">
      <h1 className="nameText">{name}</h1>
      <h2 className="nameSubHeading">{subHeading}</h2>
      <Link
        link="https://www.linkedin.com/in/jasonchiangjc7j/"
        linkText="LinkedIn"
      />
    </header>
  );
};

export default Header;
