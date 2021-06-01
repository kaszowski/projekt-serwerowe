import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    Mesh,
    DoubleSide,
} from "three";

export default class Ico extends Mesh {

    constructor() {
        super(new IcosahedronGeometry(), new MeshNormalMaterial({side:DoubleSide}))
        this.scale.set(5,5,5)
    }
    // obrót
    update() {
        this.rotation.y += 0.1
    }

}