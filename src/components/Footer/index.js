import React from 'react';

function Footer() {
    const icons = [
        {
          name: "fab fa-github",
          link: "https://github.com/kingrex0830"
        },
        {
          name: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/yoshiyahu-cea-569566287/"
        },
        {
          name: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/users/21664996/yoshiyahu-cea"
        }
      ]

    return (
    <footer className="">
        Footer
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;