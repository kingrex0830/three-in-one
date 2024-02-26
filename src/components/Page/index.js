import React from 'react';
import PageContent from '../PageContent';
import Calculator from '../Calculator';
import Weather from '../Weather';
import Notes from '../Notes';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'calculator':
        return <Calculator />;
      case 'weather':
        return <Weather />;
        case 'notes':
          return <Notes />;
      default:
        return <Calculator />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;