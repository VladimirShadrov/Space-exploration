require.context('./images', true, /\.(png|jpg|svg|gif)$/);
import { styles } from './styles/styles.scss';
import { App } from './javascript/components/app';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    document.body.append(app.element);
  });
})();
