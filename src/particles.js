import MainParticles from './components/MainParticles';
import "./style.css"
function init() {
    //div
    const container = document.getElementById('root');
    //main class
    new MainParticles(container);
}

init();