import * as THREE from 'three'

// create and export a group to add to the scene in index.js
export const wallGroup = new THREE.Group()

// class to create Walls
export default class Wall
{
    constructor(_width, _height, _widthSegments, _heightSegments, _map, _posX, _posY, _posZ, _rotationX, _rotationY)
    {
        const wall = new THREE.Mesh(
            new THREE.PlaneGeometry(_width, _height, _widthSegments, _heightSegments),
            new THREE.MeshPhongMaterial({
                map: _map,// Wall's map
                side: THREE.DoubleSide
            })
        )
        wall.position.set(_posX, _posY, _posZ)// Wall's position
        wall.rotation.x -= _rotationX// Wall's rotation on X axis
        wall.rotation.y -= _rotationY// Wall's rotation on Y axis
        wallGroup.add(wall)// Add the created wall to the group
    }
}