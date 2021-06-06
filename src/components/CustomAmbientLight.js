import {
    Object3D,
    AmbientLight
} from "three";


export default class CustomAmbientLight {

    constructor(color, brightness) {
        this.container = new Object3D();
        this.init(color, brightness)
    }

    init(color, brightness) {
        this.light = new AmbientLight(color, brightness);
        this.light.position.set(0, 0, 0);
        this.container.add(this.light);
    }

    getLight() {
        return this.container;
    }
}