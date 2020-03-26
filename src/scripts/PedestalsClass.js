import * as THREE from 'three'

// create and export a group to add to the scene in index.js
export const pedestalGroup = new THREE.Group()

// class to create Pedestals
export default class Pedestal
{
    constructor(_width, _height, _depth, _map, _posX, _posY, _posZ)
    {
        const pedestal = new THREE.Mesh(
            new THREE.BoxGeometry(_width, _height, _depth),
            new THREE.MeshLambertMaterial({
                map: _map// pedestal's map
            })
        )
        pedestal.position.set(_posX, _posY, _posZ)// pedestal's position
        pedestalGroup.add(pedestal)// Add the created pedestal to the group
    }
}