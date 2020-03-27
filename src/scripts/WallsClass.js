import * as THREE from 'three'

// class to create Walls
export default class Wall
{
    constructor(_width, _height, _depth, _map, _posX, _posY, _posZ, _rotationX, _rotationY)
    {
        this.group = new THREE.Group()
        this.group.position.set(_posX, _posY, _posZ)// Wall's position
        this.group.rotation.x -= _rotationX// Wall's rotation on X axis
        this.group.rotation.y -= _rotationY// Wall's rotation on Y axis
        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(_width, _height, _depth),
            new THREE.MeshStandardMaterial({
                map: _map,// Wall's map
            })
        )
        this.group.add(wall)// Add the created wall to the group
    }
}