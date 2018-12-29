import { css } from 'emotion';
import { Button } from '../styles/button';

const button = css`
  ${Button}
`;

const App = document.createElement('div');
App.innerHTML = `
<p>Vanilla側</p>
<button class="${button}">ボタン</button>
`;

export default App;
