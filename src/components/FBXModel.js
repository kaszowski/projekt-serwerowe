//import { FBXLoader } from './FBXLoader'
import { FBXLoader } from 'three'
import {
    AnimationMixer
} from "three"
import WalkingAnimation from './assets/Walking.fbx'

export default class Model {
    constructor(scene) {
        this.mixer
        this.loader = new FBXLoader()
        this.scene = scene;
        this.mesh = null;

        this.loader.load(WalkingAnimation, function (object) {
            this.mixer = AnimationMixer(object)
            console.log("animacje modelu", object.animations)
            const action = mixer.clipAction(object.animations[0]);
            action.play();

            object.traverse(function (child) {
                // dla kazdego mesha w modelu
                if (child.isMesh) {
                    console.log(child)

                }
            });
            this.mesh = object
            this.scene.add(object);
        })
    }
}
