import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    Mesh,
    DoubleSide,
} from "three";

export default class Ico extends Mesh {

    constructor() {
        super(new IcosahedronGeometry(), new MeshNormalMaterial({ side: DoubleSide }))
        this.scale.set(2, 2, 2)
        this.position.set(0, 2.5, 0)
    }
    // obrót
    moveLeft() {
        this.position.x -= 0.5
    }
    moveRight() {
        this.position.x += 0.5
    }
    moveForward() {
        this.position.z -= 0.5
    }
    moveBack() {
        this.position.z += 0.5
    }
}