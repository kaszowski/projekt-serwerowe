import { Scene, Vector3, GridHelper } from 'three';
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

        const gridHelper = new GridHelper(1000, 100);
        this.scene.add(gridHelper);

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb
        container.appendChild(this.stats.dom);

        //this.renderer.autoClear = false

        // camera 1
        this.camera1 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera1.position.set(0, 250, 500)
        this.camera1.lookAt(new Vector3(0, 0, 0))

        this.ico = new Ico()
        this.scene.add(this.ico)

        this.level1 = {
            floor: new Array()
        }
        this.level1.floor.push(new Plane(this.scene, 20, 100, 0, 0))
        this.level1.floor.push(new Plane(this.scene, 100, 20, 0, 120))
        this.level1.floor.push(new Plane(this.scene, 80, 20, 20, 60))
        this.level1.floor.push(new Plane(this.scene, 60, 20, 40, 0))
        this.level1.floor.push(new Plane(this.scene, 20, 140, 100, 0))
        this.level1.floor.push(new Plane(this.scene, 20, 20, 120, 60))
        this.level1.floor.push(new Plane(this.scene, 20, 140, 140, 0))

        this.light = new CustomAmbientLight(this.scene, "0xffffff", 2)

        console.log(this.scene)

        this.render();

    }

    render() {

        this.renderer.clear()
        this.stats.begin()

        this.camera1.lookAt(new Vector3(this.ico.position.x, this.ico.position.y, this.ico.position.z))
        this.camera1.position.set(this.ico.position.x, this.ico.position.y + 250, this.ico.position.z + 500)

        this.ico.update1()
        //this.ico.update2()
        this.stats.end()
        this.renderer.render(this.scene, this.camera1);
        requestAnimationFrame(this.render.bind(this));
    }
}




