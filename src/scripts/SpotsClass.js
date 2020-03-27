import * as THREE from 'three'
import metalMaterialSource from '../images/Metal/90845.jpg'


export default class Spot
{
    constructor(_posX, _posZ, _rotationY)
    {
        this.group = new THREE.Group() 
        this.group.position.set(_posX, 1, _posZ)// Model's position
        this.group.rotation.y = _rotationY
        const textureLoader = new THREE.TextureLoader()

        const metalMaterialTexture = textureLoader.load(metalMaterialSource)
        metalMaterialTexture.repeat.x = 1
        metalMaterialTexture.repeat.y = 1
        metalMaterialTexture.wrapS = THREE.RepeatWrapping
        metalMaterialTexture.wrapT = THREE.RepeatWrapping

        this.baseElementSpot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 2.8),
            new THREE.MeshStandardMaterial({
                map: metalMaterialTexture
            })
        )

        this.mainElementSpot = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1, 2),
            new THREE.MeshStandardMaterial({
                map: metalMaterialTexture
            })
        )
        this.mainElementSpot.position.y = 1
        this.mainElementSpot.rotation.x = Math.PI * 0.15

        this.group.add(this.baseElementSpot)
        this.group.add(this.mainElementSpot)
    }
}