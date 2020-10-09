import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


module.export= render(App);
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}

registerServiceWorker();
