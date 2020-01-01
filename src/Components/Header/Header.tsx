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
      <p>
        Hi there! My name is Jason and I'm a self-taught software engineer at a
        company based in Las Vegas, Nevada. I'm also serving the United States
        Army National Guard as a Combat Medic.
      </p>
      <p>
        In my spare time, I enjoy studying how to solve problems using different
        data strucutures and algorithms, I also spend time with friends, my
        golden retriever/great pyrenees mix, and staying healthy by working out
        and playing basketball.
      </p>
      <section className="linkSection">
        <Link
          link="https://www.linkedin.com/in/jasonchiangjc7j/"
          linkText="LinkedIn"
        />
        <Link link="https://github.com/Jc7j" linkText="Github" />
        <Link link="mailto:chiangjason19@gmail.com?subject=" linkText="email" />
      </section>
    </header>
  );
};

export default Header;
