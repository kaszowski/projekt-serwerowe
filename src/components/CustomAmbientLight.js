import {
    Object3D,
    AmbientLight
} from "three";


export default class CustomAmbientLight {

    constructor(scene, color, brightness) {
        this.container = new Object3D();
        this.light = new AmbientLight(0xffffff, brightness);
        this.light.position.set(0, 0, 0);
        this.container.add(this.light);
        scene.add(this.container)
    }
}