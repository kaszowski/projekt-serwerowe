import { Scene, GridHelper, Vector3 } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Ico from './Ico';
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default class MainMulticamera {
    constructor(container) {

        this.scene = new Scene();
        this.renderer = new Renderer(container);
        this.camera = new Camera(this.renderer.threeRenderer);

        const gridHelper = new GridHelper(1000, 30);
        this.scene.add(gridHelper);

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb

        container.appendChild(this.stats.dom);

        // ta funkcja umożliwia dodawania kolejnych kamer
        this.renderer.autoClear = false

        // camera 1
        this.camera1 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera1.position.set(50, 0, 50)
        this.camera1.lookAt(new Vector3(0, 0, 0));

        // camera 2
        this.camera2 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera2.position.set(0, 200, 0)
        this.camera2.lookAt(new Vector3(0, 0, 0));

        // camera 3
        this.camera3 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera3.position.set(50, 100, 50)
        this.camera3.lookAt(new Vector3(0, 0, 0));
        // camera 4      
        this.camera4 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera4.position.set(0, -50, 0)
        this.camera4.lookAt(new Vector3(0, 0, 0));


        this.ico = new Ico()
        this.scene.add(this.ico)

        this.render();

    }

    render() {

        this.renderer.clear()
        this.stats.begin()

        this.renderer.setViewport(0, innerHeight / 2, innerWidth / 2, innerHeight / 2);
        this.renderer.render(this.scene, this.camera1);
        this.renderer.setViewport(innerWidth / 2, innerHeight / 2, innerWidth / 2, innerHeight / 2);
        this.renderer.render(this.scene, this.camera2);
        this.renderer.setViewport(0, 0, innerWidth / 2, innerHeight / 2);
        this.renderer.render(this.scene, this.camera3);
        this.renderer.setViewport(innerWidth / 2, 0, innerWidth / 2, innerHeight / 2);
        this.renderer.render(this.scene, this.camera4);
        // kolejne viewporty dla kolejnych kamer

        this.ico.update() // obrót ico
        this.stats.end()
        requestAnimationFrame(this.render.bind(this));
    }
}

