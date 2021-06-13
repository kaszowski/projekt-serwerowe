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

        // SOCKET BASE DATA

        this.socket = io()
        this.socket.on("updateMovement", (companionData) => {
            companionData = JSON.parse(companionData)
            if (this.isLoaded && this.playerType != companionData.playerType) {
                this.companion.model.container.position.x = companionData.x
                this.companion.model.container.position.y = companionData.y
                this.companion.model.container.position.z = companionData.z
                this.companion.model.container.rotation.y = companionData.rotation
                if (this.companion.animation.animName != companionData.animation) {
                    this.companion.animation.playAnim(companionData.animation)
                }
            }
        })
        this.socket.emit("login", "none")
        this.socket.on("joined", (data) => {
            this.socketdata = JSON.parse(data)
            if (this.playerType == undefined) {
                this.playerType = this.socketdata.playerType
                this.room = this.socketdata.room
                this.userid = this.socketdata.id
                document.title = "Main Game - Room " + this.room
            }
        })

        // FETCH

        //todo

        // BASE DATA

        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(container);
        this.clock = new Clock()
        this.manager = new LoadingManager();

        // GRID HELPER

        this.gridHelper = new GridHelper(1000, 100);
        this.gridHelper.position.y -= 40
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
            this.player.model.container.position.set(30, 9, -130)
            // this.player.model.container.position.set(10 * 20 + 10, 9, 2 * (-20) + 10)


            // COMPANION UPDATE
            this.companion.model = new Player(this.model.mesh.clone())
            this.companion.animation = new Animation(this.companion.model.container.children[0])
            this.companion.animation.playAnim("stand")
            this.scene.add(this.companion.model.container)
            this.companion.model.container.position.set(30, 9, -130)
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
            buttons: new Array(),
        }

        // FLOOR

        this.level.floorplan = [
            { 'width': 3 * 20, 'depth': 3 * 20, 'x': 0 * 20, 'y': 0 * (-20), 'z': 8 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 3 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 4 * 20, 'y': 0 * (-20), 'z': 8 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 6 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 6 * 20, 'y': 0 * (-20), 'z': 6 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 8 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 8 * 20, 'y': 0 * (-20), 'z': 12 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 9 * 20, 'y': 0 * (-20), 'z': 12 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 11 * 20, 'y': 0 * (-20), 'z': 12 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 12 * 20, 'y': 0 * (-20), 'z': 12 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 12 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 3 * 20, 'depth': 6 * 20, 'x': 9 * 20, 'y': 2 * (-20), 'z': 11 * (-20) },
            { 'width': 4 * 20, 'depth': 1 * 20, 'x': 13 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 15 * 20, 'y': 0 * (-20), 'z': 6 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 15 * 20, 'y': 0 * (-20), 'z': 10 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 16 * 20, 'y': 0 * (-20), 'z': 10 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 18 * 20, 'y': 0 * (-20), 'z': 10 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 0 * (-20), 'z': 5 * (-20) },
            { 'width': 4 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 0 * (-20), 'z': 4 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 21 * 20, 'y': 0 * (-20), 'z': 6 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 20 * 20, 'y': 0 * (-20), 'z': 7 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 16 * 20, 'y': 0 * (-20), 'z': 3 * (-20) },
            { 'width': 6 * 20, 'depth': 1 * 20, 'x': 17 * 20, 'y': 0 * (-20), 'z': 2 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 21 * 20, 'y': 0 * (-20), 'z': 10 * (-20) },
            { 'width': 1 * 20, 'depth': 15 * 20, 'x': 23 * 20, 'y': 0 * (-20), 'z': 16 * (-20) },
            { 'width': 2 * 20, 'depth': 2 * 20, 'x': 16 * 20, 'y': 1 * (-20), 'z': 9 * (-20) },
            { 'width': 2 * 20, 'depth': 2 * 20, 'x': 16 * 20, 'y': 1 * (-20), 'z': 6 * (-20) },
            { 'width': 2 * 20, 'depth': 2 * 20, 'x': 19 * 20, 'y': 1 * (-20), 'z': 6 * (-20) },
            { 'width': 3 * 20, 'depth': 1 * 20, 'x': 20 * 20, 'y': 0 * (-20), 'z': 16 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 19 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 17 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 15 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 13 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 11 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 9 * 20, 'y': 0 * (-20), 'z': 17 * (-20) },
            { 'width': 8 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 0 * (-20), 'z': 16 * (-20) },
            { 'width': 1 * 20, 'depth': 6 * 20, 'x': 1 * 20, 'y': 0 * (-20), 'z': 15 * (-20) },
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 1 * 20, 'y': 0 * (-20), 'z': 4 * (-20) },
            { 'width': 3 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 0 * (-20), 'z': 2 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 3 * 20, 'y': 0 * (-20), 'z': 3 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 3 * 20, 'y': 0 * (-20), 'z': 1 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 6 * 20, 'y': 0 * (-20), 'z': 3 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 6 * 20, 'y': 0 * (-20), 'z': 1 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 8 * 20, 'y': 0 * (-20), 'z': 3 * (-20) },
            { 'width': 2 * 20, 'depth': 1 * 20, 'x': 8 * 20, 'y': 0 * (-20), 'z': 1 * (-20) },
            { 'width': 6 * 20, 'depth': 1 * 20, 'x': 9 * 20, 'y': 0 * (-20), 'z': 2 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 13 * 20, 'y': 0 * (-20), 'z': 3 * (-20) },
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 13 * 20, 'y': 0 * (-20), 'z': 1 * (-20) },
        ]

        for (var i = 0; i < this.level.floorplan.length; i++) {
            this.level.floor.push(new Plane(this.scene, this.level.floorplan[i].width, this.level.floorplan[i].depth, this.level.floorplan[i].x, this.level.floorplan[i].y, this.level.floorplan[i].z, floorPNG).planemesh)
        }

        // BRIDGES

        this.level.bridgeplan = [
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 5 * 20, 'y': 1 * (-20), 'z': 7 * (-20) }, //1
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 5 * 20, 'y': 1 * (-20), 'z': 7 * (-20) }, //1
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 9 * 20, 'y': 2 * (-20), 'z': 5 * (-20) }, //2
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 8 * 20, 'y': 1 * (-20), 'z': 10 * (-20) }, //3
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 10 * 20, 'y': 1 * (-20), 'z': 12 * (-20) }, //4
            { 'width': 1 * 20, 'depth': 3 * 20, 'x': 12 * 20, 'y': 1 * (-20), 'z': 10 * (-20) }, //5
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 11 * 20, 'y': 2 * (-20), 'z': 5 * (-20) }, //6
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 8 * (-20) }, //7
            { 'width': 3 * 20, 'depth': 1 * 20, 'x': 17 * 20, 'y': 1 * (-20), 'z': 7 * (-20) }, //7
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 6 * (-20) }, //7
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 8 * (-20) }, //7
            { 'width': 3 * 20, 'depth': 1 * 20, 'x': 17 * 20, 'y': 1 * (-20), 'z': 7 * (-20) }, //7
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 6 * (-20) }, //7
            { 'width': 1 * 20, 'depth': 2 * 20, 'x': 21 * 20, 'y': 1 * (-20), 'z': 9 * (-20) }, //8
            { 'width': 3 * 20, 'depth': 1 * 20, 'x': 15 * 20, 'y': 1 * (-20), 'z': 4 * (-20) }, //9
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //10
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 18 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //10
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 16 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //11
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 16 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //11
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 14 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //12
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 14 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //12
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 12 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //13
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 12 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //13
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 10 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //14
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 10 * 20, 'y': 1 * (-20), 'z': 16 * (-20) }, //14
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 1 * (-20), 'z': 9 * (-20) }, //15
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 1 * (-20), 'z': 5 * (-20) }, //15
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 1 * (-20), 'z': 9 * (-20) }, //15
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 1 * 20, 'y': 1 * (-20), 'z': 5 * (-20) }, //15
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 5 * 20, 'y': 1 * (-20), 'z': 1 * (-20) }, //16
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 5 * 20, 'y': 1 * (-20), 'z': 3 * (-20) }, //17
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 7 * 20, 'y': 1 * (-20), 'z': 1 * (-20) }, //18
            { 'width': 1 * 20, 'depth': 1 * 20, 'x': 7 * 20, 'y': 1 * (-20), 'z': 3 * (-20) }, //19
        ]

        for (var i = 0; i < this.level.bridgeplan.length; i++) {
            this.level.bridges.push(new Plane(this.scene, this.level.bridgeplan[i].width, this.level.bridgeplan[i].depth, this.level.bridgeplan[i].x, this.level.bridgeplan[i].y, this.level.bridgeplan[i].z, bridgePNG).planemesh)
            this.level.floor.push(this.level.bridges[i])
        }

        // BUTTONS

        this.level.buttonplan = [
            { 'x': 4 * 20 + 5, 'y': 0 * (-20), 'z': 8 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //1
            { 'x': 6 * 20 + 5, 'y': 0 * (-20), 'z': 6 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //1
            { 'x': 8 * 20 + 5, 'y': 0 * (-20), 'z': 5 * (-20) + 5, 'bridgeMin': 2 * (-20), 'bridgeMax': 0 * (-20), }, //2
            { 'x': 10 * 20 + 5, 'y': 2 * (-20), 'z': 10 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //3
            { 'x': 10 * 20 + 5, 'y': 2 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //4
            { 'x': 10 * 20 + 5, 'y': 2 * (-20), 'z': 8 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //5
            { 'x': 12 * 20 + 5, 'y': 0 * (-20), 'z': 5 * (-20) + 5, 'bridgeMin': 2 * (-20), 'bridgeMax': 0 * (-20), }, //6
            { 'x': 16 * 20 + 5, 'y': 1 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 16 * 20 + 5, 'y': 1 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 16 * 20 + 5, 'y': 1 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 18 * 20 + 5, 'y': 0 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 18 * 20 + 5, 'y': 0 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 18 * 20 + 5, 'y': 0 * (-20), 'z': 9 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //7
            { 'x': 20 * 20 + 5, 'y': 1 * (-20), 'z': 5 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //8
            { 'x': 21 * 20 + 5, 'y': 0 * (-20), 'z': 10 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //9
            { 'x': 19 * 20 + 5, 'y': 0 * (-20), 'z': 17 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //10
            { 'x': 17 * 20 + 5, 'y': 0 * (-20), 'z': 15 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //10
            { 'x': 17 * 20 + 5, 'y': 0 * (-20), 'z': 17 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //11
            { 'x': 15 * 20 + 5, 'y': 0 * (-20), 'z': 15 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //11
            { 'x': 15 * 20 + 5, 'y': 0 * (-20), 'z': 17 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //12
            { 'x': 13 * 20 + 5, 'y': 0 * (-20), 'z': 15 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //12
            { 'x': 13 * 20 + 5, 'y': 0 * (-20), 'z': 17 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //13
            { 'x': 11 * 20 + 5, 'y': 0 * (-20), 'z': 15 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //13
            { 'x': 11 * 20 + 5, 'y': 0 * (-20), 'z': 17 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //14
            { 'x': 9 * 20 + 5, 'y': 0 * (-20), 'z': 15 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //14
            { 'x': 1 * 20 + 5, 'y': 0 * (-20), 'z': 11 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //15
            { 'x': 1 * 20 + 5, 'y': 0 * (-20), 'z': 11 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //15
            { 'x': 1 * 20 + 5, 'y': 0 * (-20), 'z': 3 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //15
            { 'x': 1 * 20 + 5, 'y': 0 * (-20), 'z': 3 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //15
            { 'x': 4 * 20 + 5, 'y': 0 * (-20), 'z': 3 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //16
            { 'x': 6 * 20 + 5, 'y': 0 * (-20), 'z': 1 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //17
            { 'x': 6 * 20 + 5, 'y': 0 * (-20), 'z': 3 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //18
            { 'x': 8 * 20 + 5, 'y': 0 * (-20), 'z': 1 * (-20) + 5, 'bridgeMin': 1 * (-20), 'bridgeMax': 0 * (-20), }, //19
        ]

        // console.log(JSON.stringify(this.level.floorplan))
        // console.log(JSON.stringify(this.level.bridgeplan))
        // console.log(JSON.stringify(this.level.buttonplan))

        for (var i = 0; i < this.level.buttonplan.length; i++) {
            this.level.buttons.push(new Button(this.scene, this.level.bridges[i], this.level.buttonplan[i].x, this.level.buttonplan[i].y, this.level.buttonplan[i].z, this.level.buttonplan[i].bridgeMin, this.level.buttonplan[i].bridgeMax))
        }

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
                this.player.model.container.position.set(30, 9, -130) // spawn area
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

            // SOCKET - SEND DATA

            this.socket.updateMovementData = {}
            this.socket.updateMovementData.x = this.player.model.container.position.x
            this.socket.updateMovementData.y = this.player.model.container.position.y
            this.socket.updateMovementData.z = this.player.model.container.position.z
            this.socket.updateMovementData.rotation = this.player.model.container.rotation.y
            this.socket.updateMovementData.animation = this.player.animation.animName
            this.socket.updateMovementData.playerType = this.playerType
            // console.log(this.socket.updateMovementData)
            this.socket.emit("updateMovement", JSON.stringify(this.socket.updateMovementData)) //x, y, z, rotation, animation, playerType

            // FOLLOW PLAYER WITH CAMERA

            this.camera.position.set(this.player.model.container.position.x + 0, this.player.model.container.position.y + 60, this.player.model.container.position.z + 100) //0,60,100
            this.camera.lookAt(new Vector3(this.player.model.container.position.x, this.player.model.container.position.y, this.player.model.container.position.z))

            // FINISH THE GAME

            if ((this.player.model.container.position.x > 13 * 20 && this.player.model.container.position.x < 14 * 20) && (this.player.model.container.position.z > 2 * (-20) && this.player.model.container.position.z < 1 * (-20))) {
                window.location.href = './finish.html'
            }

        }

        // BASE DATA

        this.stats.end()
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}