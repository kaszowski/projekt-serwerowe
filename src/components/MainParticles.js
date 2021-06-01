import { Scene, GridHelper, Vector3 } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Ico from './Ico';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Fireplace from './Fireplace'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default class MainMulticamera {
    constructor(container) {

        this.scene = new Scene();
        this.renderer = new Renderer(container);
        //this.camera = new Camera(this.renderer.threeRenderer);

        const gridHelper = new GridHelper(1000, 30, 0xffffff, 0x000000);
        this.scene.add(gridHelper);

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb

        container.appendChild(this.stats.dom);

        let range = document.createElement("input")
        range.id = "range"
        range.type = "range"
        range.min = '10'
        range.max = '100'
        range.value = '20'
        range.style.position = "absolute"
        range.style.top = 0 + "px"
        range.style.right = 0 + "px"
        container.appendChild(range);


        //this.renderer.autoClear = false

        // camera 1
        this.camera1 = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera1.position.set(500, 500, 500)
        this.camera1.lookAt(new Vector3(0, 0, 0));

        const controls = new OrbitControls(this.camera1, this.renderer.domElement);
        this.firePlaces = []

        //ustaw fireplaces w kółko

        let angle = Math.PI / 10
        for (var i = 0; i < 20; i++) {
            let fire = new Fireplace()
            this.scene.add(fire)
            fire.position.x = 100 * Math.sin(angle);
            fire.position.z = 100 * Math.cos(angle)
            fire.position.y = 40
            this.firePlaces.push(fire)
            angle += Math.PI / 10

        }

        this.ico = new Ico()
        //this.scene.add(this.ico)

        console.log(this.scene)
        this.render();

    }

    render() {

        this.renderer.clear()
        this.stats.begin()

        // dla kazdego elementu tablicy ognisk
        // czyli dla każdego obiektu klasy Fireplace
        // wykonuj funkcję update()
        //...
        for (let fire of this.firePlaces) {
            fire.update()
        }



        this.renderer.render(this.scene, this.camera1);

        this.ico.update() // obrót ico
        this.stats.end()
        requestAnimationFrame(this.render.bind(this));
    }
}




