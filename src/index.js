import state from './components/Redux/state';
import './index.css';
import { rerender } from './rerander';
import * as serviceWorker from './serviceWorker';

rerender(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
