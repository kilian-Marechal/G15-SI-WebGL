import * as THREE from 'three'

// class to create Hitbox
export default class Hitbox
{
    constructor(_width, _height, _depth, _posX, _posY, _posZ)
    {
        this.group = new THREE.Group()
        this.group.position.set(_posX, _posY, _posZ)// Hitbox's position
        const hitbox = new THREE.Mesh(
            new THREE.BoxGeometry(_width, _height, _depth),
            new THREE.MeshNormalMaterial()
        )
        this.group.add(hitbox)// Add the created Hitbox to the group
    }
}