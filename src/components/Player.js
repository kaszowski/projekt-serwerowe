import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    Mesh,
    DoubleSide,
    Object3D,
} from "three";

export default class Player {

    constructor(model) {
        this.container = new Object3D()
        model.scale.set(0.35, 0.35, 0.35)
        this.container.add(model)
        model.position.x -= 1.1
        model.position.z += 2.0
        this.container.position.set(0, 9, 0)
    }
    moveLeft() {
        this.container.position.x -= 0.5
    }
    moveRight() {
        this.container.position.x += 0.5
    }
    moveForward() {
        this.container.position.z -= 0.5
    }
    moveBack() {
        this.container.position.z += 0.5
    }
    lookLeft() {
        this.container.rotation.y = 1 * Math.PI
    }
    lookRight() {
        this.container.rotation.y = 0 * Math.PI
    }
    lookForward() {
        this.container.rotation.y = 0.5 * Math.PI
    }
    lookBack() {
        this.container.rotation.y = 1.5 * Math.PI
    }

}