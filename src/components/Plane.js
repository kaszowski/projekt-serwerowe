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

    constructor(scene, sizeX, sizeZ, posX, posZ) {
        this.planebase = new PlaneGeometry(sizeX, sizeZ);

        this.texture = new TextureLoader().load(floorTex)
        this.texture.wrapS = RepeatWrapping
        this.texture.wrapT = RepeatWrapping
        this.texture.repeat.set(sizeX / 10, sizeZ / 10)

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

        this.setPosition(posX + (sizeX / 2), posZ + (sizeZ / 2))

        scene.add(this.planemesh)
    }
    setPosition(x, z) {
        this.planemesh.position.set(x, 0, z)
    }
    addToScene(scene) {
        scene.add(this.planemesh)
        console.log(this.planemesh)
    }
}