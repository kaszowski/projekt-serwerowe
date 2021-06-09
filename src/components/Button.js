//unprepared

import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    BoxGeometry,
    Mesh,
    DoubleSide,
    Object3D,
    AxesHelper
} from "three";

export default class Button {

    constructor(scene) {
        //console.log("Box")
        this.scene = scene;
        this.geometry = new BoxGeometry();
        this.material = new MeshNormalMaterial();
        this.box = new Mesh(this.geometry, this.material);
        this.container = new Object3D();
        this.container.add(this.box)
        this.container.add(new AxesHelper(1000))
        this.scene.add(this.container)
    }
    rotateLeft() {
        this.container.rotation.y += 0.01
    }
    rotateRight() {
        this.container.rotation.y -= 0.01
    }
    moveLeft() {
        this.container.position.x -= 0.1
    }
    moveRight() {
        this.container.position.x += 0.1
    }
    moveUp() {
        this.container.position.z -= 0.1
    }
    moveDown() {
        this.container.position.z += 0.1
    }
}