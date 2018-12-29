import App from './App';

const app: (HTMLElement | null) = document.getElementById('root-vanilla');
if(app){
  app.appendChild(App);
}
