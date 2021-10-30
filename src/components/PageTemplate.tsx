import React from "react";
import NavBar from "./NavBar";
import PageBody from "./PageBody";

interface pageTemplateProps {
    pageTitle: string
}

const PageTemplate = ({pageTitle}: pageTemplateProps) => {
  return (
    <div>
      <NavBar />
      <PageBody pageTitle={pageTitle}/>
    </div>
  );
};

export default PageTemplate;
