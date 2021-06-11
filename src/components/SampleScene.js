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
import CustomAmbientLight from "./CustomAmbientLight"
import Plane from "./Plane"
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Keyboard from './Keyboard'
import Animation from "./Animation"
import Model from "./Model"
import Player from './Player'
import Button from './Button'

import playerPNG from './assets/player_model.png'
import playerMD2 from './assets/player_model.md2'
import floorPNG from "./assets/stone_bricks.png"
import bridgePNG from "./assets/stone_path.png"




export default class SampleScene {
    constructor(container) {

        this.socket = io()
        this.socket.emit("login", "someCompanionData")

        // BASE DATA

        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(container);
        this.clock = new Clock()
        this.manager = new LoadingManager();

        // GRID HELPER

        this.gridHelper = new GridHelper(1000, 100);
        this.gridHelper.position.y -= 20
        this.scene.add(this.gridHelper);

        // PLAYER

        this.player = {}
        this.player.model = undefined
        this.player.animation = undefined
        this.player.raycaster = new Raycaster()

        // COMPANION

        this.companion = {}
        this.companion.model = undefined
        this.companion.animation = undefined
        this.companion.raycaster = new Raycaster()


        // MODEL

        this.model = new Model(this.scene, this.manager);
        this.model.load(playerMD2, playerPNG);
        this.manager.onLoad = () => {

            this.isLoaded = true;

            // PLAYER UPDATE
            this.player.model = new Player(this.model.mesh.clone())
            this.player.animation = new Animation(this.player.model.container.children[0])
            this.player.animation.playAnim("stand")
            this.scene.add(this.player.model.container)

            // COMPANION UPDATE
            this.companion.model = new Player(this.model.mesh.clone())
            this.companion.animation = new Animation(this.companion.model.container.children[0])
            this.companion.animation.playAnim("stand")
            this.scene.add(this.companion.model.container)
            this.companion.model.container.position.set(10, 9, 90)
            setTimeout(() => {
                this.companion.model.container.position.set(10, 9, 70)
            }, 5000);
            setTimeout(() => {
                this.companion.model.container.position.set(10, 9, 90)
            }, 10000);
        };

        // STATS

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb
        container.appendChild(this.stats.dom);

        // CAMERA

        this.camera = new Camera(30, window.innerWidth / 2, window.innerHeight / 2);
        this.camera.position.set(0, 100, 100)
        this.camera.lookAt(new Vector3(0, 0, 0))

        // LEVEL

        this.level = {
            floor: new Array(),
            bridges: new Array(),
            buttons: new Array()
        }

        // FLOOR

        this.level.floorplan = [ //unused yet
            { 'width': 20, 'depth': 20, 'x': 0, 'z': 0 },
            { 'width': 20, 'depth': 20, 'x': 0, 'z': 0 },
        ]
        this.level.floor.push(new Plane(this.scene, 20, 100, 0, 0, 0, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 100, 20, 0, 0, 120, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 80, 20, 20, 0, 60, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 60, 20, 40, 0, 0, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 20, 140, 100, 0, 0, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 20, 20, 120, 0, 60, floorPNG).planemesh)
        this.level.floor.push(new Plane(this.scene, 20, 140, 140, 0, 0, floorPNG).planemesh)

        //BRIDGES

        this.level.bridges.push(new Plane(this.scene, 20, 20, 0, -10, 100, bridgePNG).planemesh)
        this.level.bridges.push(new Plane(this.scene, 20, 20, 0, -10, 100, bridgePNG).planemesh)

        for (var i = 0; i < this.level.bridges.length; i++) {
            this.level.floor.push(this.level.bridges[i])
        }

        // BUTTONS

        this.level.buttons.push(new Button(this.scene, this.level.bridges[0], 5, 85, -10, 0))
        this.level.buttons.push(new Button(this.scene, this.level.bridges[1], 5, 125, -10, 0))

        // LIGHT

        this.level.light = new CustomAmbientLight(this.scene, 0xffffff, 2)

        // KEYBOARD

        this.level.keyboard = new Keyboard(window);

        // RENDER

        this.render();

    }

    render() {

        //BASE DATA
        this.renderer.clear()
        this.stats.begin()

        // ANIMATIONS

        var delta = this.clock.getDelta();
        if (this.player.animation) this.player.animation.update(delta)
        if (this.companion.animation) this.companion.animation.update(delta)

        // GAMEPLAY

        if (this.isLoaded) {

            // BUTTON ACTIONS AND RELEASE

            for (var i = 0; i < this.level.buttons.length; i++) {
                if (this.level.buttons[i].isPressed) {
                    this.level.buttons[i].riseBridge()
                    // console.log("RISING")
                } else {
                    this.level.buttons[i].lowerBridge()
                    // console.log("LOWERING")
                }
                this.level.buttons[i].release()
            }

            // ALIGN PLAYER WITH LOWERING/RISING BRIDGE

            this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
            this.player.raycaster.ray = this.player.ray
            this.player.intersects = this.player.raycaster.intersectObjects(this.level.floor);
            if (this.player.intersects[0]) {
                if (this.player.intersects[0].distance < 9.1 && this.player.intersects[0].distance > 8.9) {
                    this.player.model.container.position.y = this.player.intersects[0].object.position.y + 9
                }
            } else {
                this.player.model.container.position.set(5, 9, 5) // spawn area
            }

            // BUTTON PRESS

            this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
            this.player.raycaster.ray = this.player.ray
            this.companion.ray = new Ray(this.companion.model.container.position, new Vector3(0, -1, 0).normalize())
            this.companion.raycaster.ray = this.companion.ray
            for (var i = 0; i < this.level.buttons.length; i++) {
                var tempbutton = new Array()
                tempbutton.push(this.level.buttons[i].container)
                this.player.intersects = this.player.raycaster.intersectObjects(tempbutton, true);
                this.companion.intersects = this.companion.raycaster.intersectObjects(tempbutton, true);
                if (this.player.intersects[0] || this.companion.intersects[0]) {
                    this.level.buttons[i].press()
                }
            }

            //MOVEMENT - FORWARD

            if (Config.moveForward) {
                for (var i = 0; i < 5; i++) {
                    this.player.model.moveForward()
                }
                this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
                this.player.raycaster.ray = this.player.ray
                this.player.intersects = this.player.raycaster.intersectObjects(this.level.floor);
                // console.log(this.level.floor[0])
                if (this.player.intersects[0]) {
                    if (this.player.intersects[0].distance < 9.1 && this.player.intersects[0].distance > 8.9) {
                        for (var i = 0; i < 4; i++) {
                            this.player.model.moveBack()
                            this.player.model.lookForward()
                            if (this.player.animation.animName != "run") {
                                this.player.animation.playAnim("run")
                            }
                        }
                    } else {
                        for (var i = 0; i < 5; i++) {
                            this.player.model.moveBack()
                        }
                        if (Config.moveBack == false && Config.moveForward == true && Config.moveLeft == false && Config.moveRight == false) {
                            if (this.player.animation.animName != "stand") {
                                this.player.animation.playAnim("stand")
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player.model.moveBack()
                    }
                    if (Config.moveBack == false && Config.moveForward == true && Config.moveLeft == false && Config.moveRight == false) {
                        if (this.player.animation.animName != "stand") {
                            this.player.animation.playAnim("stand")
                        }
                    }
                }
            }

            //MOVEMENT - BACKWARD

            if (Config.moveBack) {
                for (var i = 0; i < 5; i++) {
                    this.player.model.moveBack()
                }
                this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
                this.player.raycaster.ray = this.player.ray
                this.player.intersects = this.player.raycaster.intersectObjects(this.level.floor);
                if (this.player.intersects[0]) {
                    if (this.player.intersects[0].distance < 9.1 && this.player.intersects[0].distance > 8.9) {
                        for (var i = 0; i < 4; i++) {
                            this.player.model.moveForward()
                            this.player.model.lookBack()
                            if (this.player.animation.animName != "run") {
                                this.player.animation.playAnim("run")
                            }
                        }
                    } else {
                        for (var i = 0; i < 5; i++) {
                            this.player.model.moveForward()
                        }
                        if (Config.moveBack == true && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == false) {
                            if (this.player.animation.animName != "stand") {
                                this.player.animation.playAnim("stand")
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player.model.moveForward()
                    }
                    if (Config.moveBack == true && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == false) {
                        if (this.player.animation.animName != "stand") {
                            this.player.animation.playAnim("stand")
                        }
                    }
                }
            }

            //MOVEMENT - RIGHT

            if (Config.moveRight) {
                for (var i = 0; i < 5; i++) {
                    this.player.model.moveRight()
                }
                this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
                this.player.raycaster.ray = this.player.ray
                this.player.intersects = this.player.raycaster.intersectObjects(this.level.floor);
                if (this.player.intersects[0]) {
                    if (this.player.intersects[0].distance < 9.1 && this.player.intersects[0].distance > 8.9) {
                        for (var i = 0; i < 4; i++) {
                            this.player.model.moveLeft()
                            this.player.model.lookRight()
                            if (this.player.animation.animName != "run") {
                                this.player.animation.playAnim("run")
                            }
                        }
                    } else {
                        for (var i = 0; i < 5; i++) {
                            this.player.model.moveLeft()
                        }
                        if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == true) {
                            if (this.player.animation.animName != "stand") {
                                this.player.animation.playAnim("stand")
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player.model.moveLeft()
                    }
                    if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == true) {
                        if (this.player.animation.animName != "stand") {
                            this.player.animation.playAnim("stand")
                        }
                    }
                }
            }

            //MOVEMENT - LEFT

            if (Config.moveLeft) {
                for (var i = 0; i < 5; i++) {
                    this.player.model.moveLeft()
                }
                this.player.ray = new Ray(this.player.model.container.position, new Vector3(0, -1, 0).normalize())
                this.player.raycaster.ray = this.player.ray
                this.player.intersects = this.player.raycaster.intersectObjects(this.level.floor);
                if (this.player.intersects[0]) {
                    if (this.player.intersects[0].distance < 9.1 && this.player.intersects[0].distance > 8.9) {
                        for (var i = 0; i < 4; i++) {
                            this.player.model.moveRight()
                            this.player.model.lookLeft()
                            if (this.player.animation.animName != "run") {
                                this.player.animation.playAnim("run")
                            }
                        }
                    } else {
                        for (var i = 0; i < 5; i++) {
                            this.player.model.moveRight()
                        }
                        if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == true && Config.moveRight == false) {
                            if (this.player.animation.animName != "stand") {
                                this.player.animation.playAnim("stand")
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < 5; i++) {
                        this.player.model.moveRight()
                    }
                    if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == true && Config.moveRight == false) {
                        if (this.player.animation.animName != "stand") {
                            this.player.animation.playAnim("stand")
                        }
                    }
                }
            }

            // MOVEMENT - STAND STILL

            if (Config.moveBack == false && Config.moveForward == false && Config.moveLeft == false && Config.moveRight == false) {
                if (this.player.animation.animName != "stand") {
                    this.player.animation.playAnim("stand")
                }
            }

            // FOLLOW PLAYER WITH CAMERA

            this.camera.position.set(this.player.model.container.position.x + 0, this.player.model.container.position.y + 60, this.player.model.container.position.z + 100)
            this.camera.lookAt(new Vector3(this.player.model.container.position.x, this.player.model.container.position.y, this.player.model.container.position.z))
        }

        // BASE DATA

        this.stats.end()
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}