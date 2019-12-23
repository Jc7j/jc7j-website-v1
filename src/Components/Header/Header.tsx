import React from 'react';

import Link from '../Link/Link';
import './Header.modules.css';
interface HeaderProps {
  name: string;
  subHeading: string;
  description: string;
}

const Header = (props: HeaderProps) => {
  const { description, name, subHeading } = props;
  return (
    <header className="headerContainer">
      <h1 className="nameText">{name}</h1>
      <h2 className="nameSubHeading">{subHeading}</h2>
      <p className="description">{description}</p>
      <section className="linkSection">
        <Link
          link="https://www.linkedin.com/in/jasonchiangjc7j/"
          linkText="LinkedIn"
        />
        <Link link="https://github.com/Jc7j" linkText="Github" />
        <Link link="mailto:chiangjason19@gmail.com?subject=" linkText="email" />
        <Link link="#" linkText="Resume" />
      </section>
    </header>
  );
};

export default Header;
