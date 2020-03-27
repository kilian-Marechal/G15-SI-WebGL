import * as THREE from 'three'

// class to create Walls
export default class Wall
{
    constructor(_width, _height, _widthSegments, _heightSegments, _map, _posX, _posY, _posZ, _rotationX, _rotationY)
    {
        this.group = new THREE.Group()
        this.group.position.set(_posX, _posY, _posZ)// Wall's position
        this.group.rotation.x -= _rotationX// Wall's rotation on X axis
        this.group.rotation.y -= _rotationY// Wall's rotation on Y axis
        const wall = new THREE.Mesh(
            new THREE.PlaneGeometry(_width, _height, _widthSegments, _heightSegments),
            new THREE.MeshPhongMaterial({
                map: _map,// Wall's map
                side: THREE.DoubleSide
            })
        )
        this.group.add(wall)// Add the created wall to the group
    }
}