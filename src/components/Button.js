import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    MeshPhongMaterial,
    BoxGeometry,
    Mesh,
    DoubleSide,
    FrontSide,
    Object3D,
    AxesHelper,
    TextureLoader
} from "three";
import buttonTex from './assets/floor.png'

export default class Button {

    constructor(scene, bridge, x, z, bridgeMin, bridgeMax) {
        this.scene = scene;
        this.geometry = new BoxGeometry(10, 2, 10);
        this.material = new MeshPhongMaterial({
            map: new TextureLoader().load(buttonTex)
        });
        this.isPressed = false
        this.bridge = bridge
        this.bridgeMax = bridgeMax
        this.bridgeMin = bridgeMin

        this.box = new Mesh(this.geometry, this.material);
        this.container = new Object3D();
        this.container.add(this.box)
        this.box.position.set(5, 1, 5)
        this.container.position.set(x, -5, z)

        this.scene.add(this.container)
    }
    press() {
        this.isPressed = true
        this.container.position.y = -1.9
    }
    release() {
        this.isPressed = false
        this.container.position.y = -1
    }
    riseBridge() {
        if (this.bridge.position.y < this.bridgeMax) {
            this.bridge.position.y += 0.25
        }
    }
    lowerBridge() {
        if (this.bridge.position.y > this.bridgeMin) {
            this.bridge.position.y -= 0.25
        }
    }
}