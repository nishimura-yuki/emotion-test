/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import * as React from 'react';
import { RebootCSS } from '../styles/global';
import { Button } from '../styles/button';

const global = css`
  ${RebootCSS}
`;

const button = css`
  ${Button}
`;

class App extends React.Component {
  public render() {
    return (
      <div >
        <Global styles={global} />
        <p>React側</p>
        <button css={button} >ボタン</button>
      </div>
    );
  }
}

export default App;
