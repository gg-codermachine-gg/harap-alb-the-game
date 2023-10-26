import Phaser, { Textures } from 'phaser';
import logoImg from './assets/logo.png';
import Json from "./assets/playerAnimation.json"

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
        

    }

    preload ()
    {
        //  This is an example of a bundled image:
        this.load.image('logo', logoImg);

        //  This is an example of loading a static image from the public folder:
        this.load.image('background', 'assets/bg.jpg');
        this.load.atlas("player", "/spriteSheet/player.png" , "/json/playerAnimation.json")
        console.log(Json);
    }
      
    create ()
    {
        this.add.image(400, 300, 'background');

        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
