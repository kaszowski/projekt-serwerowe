import { Scene, Vector3 } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Ico from './Ico';
import CustomAmbientLight from "./CustomAmbientLight"
import Plane from "./Plane"
import Stats from 'three/examples/jsm/libs/stats.module.js';
export default class SampleScene {
    constructor(container) {

        this.scene = new Scene();
        this.renderer = new Renderer(container);

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb
        container.appendChild(this.stats.dom);

        //this.renderer.autoClear = false

        // camera 1
        this.camera1 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera1.position.set(500, 500, 500)
        this.camera1.lookAt(new Vector3(0, 0, 0))

        this.ico = new Ico()
        this.scene.add(this.ico)

        this.plane = new Plane(this.scene)

        this.light = new CustomAmbientLight("0xffffff", 2)
        this.scene.add(this.light.getLight())

        console.log(this.scene)
        this.render();

    }

    render() {

        this.renderer.clear()
        this.stats.begin()

        this.renderer.render(this.scene, this.camera1);

        this.ico.update() // obrót ico
        this.stats.end()
        requestAnimationFrame(this.render.bind(this));
    }
}




