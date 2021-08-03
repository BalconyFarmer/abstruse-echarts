import {Menu3D} from "./Menu3D";
import * as THREE from "three"   //ES6
import {Canvas2D} from './Canvas2D'

export class PicWall3D extends Menu3D {
    constructor(dom) {
        super(dom);
        this.picData = null
    }

    initPicWall(data) {
        this.picData = data
        this.initThree();
        this.axesHelper();
        this.startAnimation();

        this.startControl();
        this.addPictures();
    }

    addPictures() {
        const self = this;
        this.picData.forEach((item, index) => {

            const oTest = new Canvas2D('demoCanvas')
            const canvas = oTest.initImg()
            // console.log(canvas, 'seeseesee')
            // debugger

            setTimeout(function (){
                let texture = new THREE.Texture(canvas);
                texture.needsUpdate = true; //注意这句不能少

                const material1 = new THREE.SpriteMaterial({map: texture});
                const sprite = new THREE.Sprite(material1);
                sprite.position.set(0, 0, 0);
                self.scene.add(sprite);
                self.munus.push(sprite)
                sprite.routerAdress = item.routerAdress
            },500)


        })
    }

}
