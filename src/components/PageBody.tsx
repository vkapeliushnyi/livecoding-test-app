import React from "react";

interface pageTemplateProps {
  pageTitle: string
}

const PageBody = ({pageTitle}: pageTemplateProps) => {
  return (
    <main role="main" className="container">

      <div className="starter-template">
        <h1>{pageTitle}</h1>
        <p className="lead">Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.</p>
      </div>

    </main>
  );
};

export default PageBody;
