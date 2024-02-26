import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
      pages = [],
      setCurrentPage,
      currentPage,
    } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);
  
    return (    
        <nav>
          <ul>
            {pages.map((Page) => (
              <li>
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
    );
  }

export default Nav;