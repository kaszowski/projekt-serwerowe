import MainMulticamera from './components/MainMulticamera';
import "./style.css"
function init() {
    //div
    const container = document.getElementById('root');
    //main class
    new MainMulticamera(container);
}

init();