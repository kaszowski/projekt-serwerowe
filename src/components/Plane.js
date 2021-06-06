import {
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    DoubleSide,
    TextureLoader,
    RepeatWrapping,
    MeshPhongMaterial
} from "three";
import floorTex from "./assets/floor.png"

export default class Plane {

    constructor(scene) {
        this.planebase = new PlaneGeometry(250, 250);

        this.texture = new TextureLoader().load(floorTex)
        this.texture.wrapS = RepeatWrapping
        this.texture.wrapT = RepeatWrapping
        this.texture.repeat.set(10, 10)

        this.floortexture = new MeshPhongMaterial({
            specular: 0xffffff,
            shininess: 50,
            side: DoubleSide,
            map: this.texture
        })

        this.planemesh = new Mesh(this.planebase, this.floortexture);
        this.planemesh.position.set(0, 0, 0)
        this.planemesh.rotation.x = 1 / 2 * Math.PI
        //this.plane.receiveShadow = true

        scene.add(this.planemesh)
    }
}