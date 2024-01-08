import {Header} from "./header";
import React from 'react';

export function Page(props) {
  return (
    <React.Fragment>
      <Header/>
      <div className="container" style={{paddingTop: '1rem'}}>
        {props.children}
      </div>

    </React.Fragment>
  )
}