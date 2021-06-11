import SampleScene from './components/SampleScene';
import "./style.css"

function init() {
    //div
    const container = document.getElementById('root');
    //main class
    new SampleScene(container);
}

init();