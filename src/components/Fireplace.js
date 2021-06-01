import { Object3D, SpriteMaterial, TextureLoader, AdditiveBlending, PointLight } from "three"
import fireTex from "./assets/fire.png"
import Particle from "./Particle"

export default class Fireplace extends Object3D {

    constructor() {
        super()
        //tablica na cząsteczki
        this.particles = []
        // przewidywana ilość cząsteczek
        this.count = 25
        // materiał cząsteczki, rzecz najważniejsza
        // jego właściwość blending decyduje o tym, że cząsteczki mieszają się
        // ze sobą

        this.particleMaterial = new SpriteMaterial({
            color: 0xdda0dd,
            map: new TextureLoader().load(fireTex),
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
            blending: AdditiveBlending
        });
        // dodajemy światło, aby ognisko emitowało oświetlenie na scenie
        this.point = new PointLight(0xdda0dd, 20, 20)
        this.init()
    }

    init() {

        // w pętli tworzymy odpowiednią ilość cząsteczek klasy Particle
        // dodajemy do this (kontener3D) i tablicy

        for (let i = 1; i <= this.count; i++) {
            var particle = new Particle(this.particleMaterial)
            this.add(particle)
            this.particles.push(particle);
        }


    }

    update() {
        // tutaj w pętli wykonujemy funkcję update każdej cząsteczki,
        // którą mamy w tablicy   
        for (let p of this.particles) {
            p.update()
        }

    }
}