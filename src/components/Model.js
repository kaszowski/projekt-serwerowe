import { MD2Loader } from './MD2Loader';
import { Mesh, TextureLoader, MeshPhongMaterial } from "three"

export default class Model {
    constructor(scene, manager) {
        this.scene = scene;
        this.mesh = null;
        this.manager = manager;
        this.geometry = null
    }

    load(path, texture) {

        // Manager przekazany do loadera, pozwala na określenie czy model już się załadował, w klasie Main

        new MD2Loader(this.manager).load(
            path,
            geometry => {
                this.geometry = geometry;
                this.mesh = new Mesh(geometry, new MeshPhongMaterial({
                    map: new TextureLoader().load(texture), // dowolny plik png, jpg
                    morphTargets: true // animowanie materiału modelu
                }))
                // console.log(this.geometry.animations) // tu powinny być widoczne animacje
            },
        );
    }

    unload() {
        this.scene.remove(this.mesh); // ew funkcja do usunięcia modelu ze sceny
    }
}
