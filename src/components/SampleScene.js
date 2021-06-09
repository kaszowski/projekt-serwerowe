import {
    Scene,
    Vector3,
    GridHelper,
    Raycaster,
    Ray,
    Clock,
    LoadingManager,
    Object3D
} from 'three';
import Renderer from './Renderer';
import Config from "./Config";
import Camera from './Camera';
import Ico from './Ico';
import CustomAmbientLight from "./CustomAmbientLight"
import Plane from "./Plane"
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Keyboard from './Keyboard'
import Animation from "./Animation"
import Model from "./Model"
import Player from './Player'

import playerPNG from './assets/player_model.png'
import playerMD2 from './assets/player_model.md2'



export default class SampleScene {
    constructor(container) {

        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(container);
        this.raycaster = new Raycaster()
        this.isLoaded = null
        this.animation = null
        this.clock = new Clock()
        this.manager = new LoadingManager();

        this.gridHelper = new GridHelper(1000, 100);
        this.gridHelper.position.y -= 50
        this.scene.add(this.gridHelper);

        this.model = new Model(this.scene, this.manager);
        this.model.load(playerMD2, playerPNG);
        this.manager.onLoad = () => {

            this.isLoaded = true;
            this.animation = new Animation(this.model.mesh)
            this.animation.playAnim("stand")
            this.player1 = new Player(this.model.mesh)
            this.scene.add(this.player1.container)
        };
        this.player2 = new Object3D()

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb
        container.appendChild(this.stats.dom);

        this.camera = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera.position.set(0, 100, 100)
        this.camera.lookAt(new Vector3(0, 0, 0))

        // this.ico = new Ico()
        // this.scene.add(this.ico)





        this.level1 = {
            floor: new Array()
        }
        this.level1.floor.push(new Plane(this.scene, 20, 100, 0, 0).planemesh)
        this.level1.floor.push(new Plane(this.scene, 100, 20, 0, 120).planemesh)
        this.level1.floor.push(new Plane(this.scene, 80, 20, 20, 60).planemesh)
        this.level1.floor.push(new Plane(this.scene, 60, 20, 40, 0).planemesh)
        this.level1.floor.push(new Plane(this.scene, 20, 140, 100, 0).planemesh)
        this.level1.floor.push(new Plane(this.scene, 20, 20, 120, 60).planemesh)
        this.level1.floor.push(new Plane(this.scene, 20, 140, 140, 0).planemesh)

        this.light = new CustomAmbientLight(this.scene, 0xffffff, 2)

        this.keyboard = new Keyboard(window);

        console.log(this.scene)

        this.render();

    }

    render() {
        this.renderer.clear()
        this.stats.begin()

        var delta = this.clock.getDelta();

        if (this.animation) this.animation.update(delta)

        if (this.isLoaded) {
            if (Config.moveForward) {
                for (var i = 0; i < 5; i++) {
                    this.player1.moveForward()
                }
                this.ray = new Ray(this.player1.container.position, new Vector3(0, -1, 0).normalize())
                this.raycaster.ray = this.ray
                this.intersects = this.raycaster.intersectObjects(this.level1.floor);
                if (this.intersects[0]) {
                    for (var i = 0; i < 4; i++) {
                        this.player1.moveBack()
                        this.player1.lookForward()
                        if (this.animation.animName != "run") {
                            this.animation.playAnim("run")
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player1.moveBack()
                    }
                    if (Config.moveBack == false && Config.moveForward == true && Config.moveLeft == false && Config.moveRight == false) {
                        if (this.animation.animName != "stand") {
                            this.animation.playAnim("stand")
                        }
                    }
                }
            }
            if (Config.moveBack) {
                for (var i = 0; i < 5; i++) {
                    this.player1.moveBack()
                }
                this.ray = new Ray(this.player1.container.position, new Vector3(0, -1, 0).normalize())
                this.raycaster.ray = this.ray
                this.intersects = this.raycaster.intersectObjects(this.level1.floor);
                if (this.intersects[0]) {
                    for (var i = 0; i < 4; i++) {
                        this.player1.moveForward()
                        this.player1.lookBack()
                        if (this.animation.animName != "run") {
                            this.animation.playAnim("run")
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player1.moveForward()
                    }
                    if (Config.moveBack == true && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == false) {
                        if (this.animation.animName != "stand") {
                            this.animation.playAnim("stand")
                        }
                    }
                }
            }
            if (Config.moveRight) {
                for (var i = 0; i < 5; i++) {
                    this.player1.moveRight()
                }
                this.ray = new Ray(this.player1.container.position, new Vector3(0, -1, 0).normalize())
                this.raycaster.ray = this.ray
                this.intersects = this.raycaster.intersectObjects(this.level1.floor);
                if (this.intersects[0]) {
                    for (var i = 0; i < 4; i++) {
                        this.player1.moveLeft()
                        this.player1.lookRight()
                        if (this.animation.animName != "run") {
                            this.animation.playAnim("run")
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player1.moveLeft()
                    }
                    if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == true) {
                        if (this.animation.animName != "stand") {
                            this.animation.playAnim("stand")
                        }
                    }
                }
            }
            if (Config.moveLeft) {
                for (var i = 0; i < 5; i++) {
                    this.player1.moveLeft()
                }
                this.ray = new Ray(this.player1.container.position, new Vector3(0, -1, 0).normalize())
                this.raycaster.ray = this.ray
                this.intersects = this.raycaster.intersectObjects(this.level1.floor);
                if (this.intersects[0]) {
                    for (var i = 0; i < 4; i++) {
                        this.player1.moveRight()
                        this.player1.lookLeft()
                        if (this.animation.animName != "run") {
                            this.animation.playAnim("run")
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player1.moveRight()
                    }
                    if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == true && Config.moveRight == false) {
                        if (this.animation.animName != "stand") {
                            this.animation.playAnim("stand")
                        }
                    }
                }
            }
            if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == false) {
                if (this.animation.animName != "stand") {
                    this.animation.playAnim("stand")
                }
            }


            this.camera.position.set(this.player1.container.position.x, this.player1.container.position.y + 60, this.player1.container.position.z + 100)
            this.camera.lookAt(new Vector3(this.player1.container.position.x, this.player1.container.position.y, this.player1.container.position.z))
        }

        this.stats.end()
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}




