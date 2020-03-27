import * as THREE from 'three'
import woodFineDarkSource from '../images/WoodFineDark004/Previews/WoodFineDark004_Flat.jpg'


export default class Panel
{
    constructor()
    {
        this.group = new THREE.Group() 
        {
                
                const textureLoader = new THREE.TextureLoader()

                const woodFineDarkTexture = textureLoader.load(woodFineDarkSource)
                woodFineDarkTexture.repeat.x = 1
                woodFineDarkTexture.repeat.y = 1
                woodFineDarkTexture.wrapS = THREE.RepeatWrapping
                woodFineDarkTexture.wrapT = THREE.RepeatWrapping

                const baseElementPanel = new THREE.Mesh(
                    new THREE.BoxGeometry(4, 0.5, 4),
                    new THREE.MeshLambertMaterial({
                        map: woodFineDarkTexture
                    })
                )
                baseElementPanel.position.set(- 40, 0.26, - 55)

                const mainElementPanel = new THREE.Mesh(
                    new THREE.BoxGeometry(2, 3.5, 2),
                    new THREE.MeshLambertMaterial({
                        map: woodFineDarkTexture
                    })
                )
                mainElementPanel.position.set(- 40, 1.75, - 55)

                const boardElementPanel = new THREE.Mesh(
                    new THREE.BoxGeometry(4, 0.1, 4),
                    new THREE.MeshLambertMaterial({
                        map: woodFineDarkTexture
                    })
                )
                boardElementPanel.rotation.x = Math.PI * 0.10
                boardElementPanel.position.set(- 40, 3.8, - 55)


                this.group.add(baseElementPanel)
                this.group.add(mainElementPanel)
                this.group.add(boardElementPanel)
            }
    }
}