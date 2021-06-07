import Config from "./Config";

const KEYS = {
    "left": 65,
    "up": 87,
    "right": 68,
    "down": 83,
};

export default class Keyboard {
    constructor(domElement) {

        this.domElement = domElement;

        // events
        this.domElement.addEventListener('keydown', event => this.onKeyDown(event), false);
        this.domElement.addEventListener('keyup', event => this.onKeyUp(event), false);


    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case KEYS.up:
                Config.moveForward = false;
                break;
            case KEYS.down:
                Config.moveBack = false;
                break;
            case KEYS.left:
                Config.moveLeft = false;
                break;
            case KEYS.right:
                Config.moveRight = false;
                break;


        }
        console.log('onKeyChange', event.keyCode)
    }

    onKeyDown(event) {
        switch (event.keyCode) {
            case KEYS.up:
                Config.moveForward = true;
                break;
            case KEYS.down:
                Config.moveBack = true;
                break;
            case KEYS.left:
                Config.moveLeft = true;
                break;
            case KEYS.right:
                Config.moveRight = true;
                break;
        }

    }


}
