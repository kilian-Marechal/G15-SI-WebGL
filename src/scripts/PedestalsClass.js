import * as THREE from 'three'

// class to create Pedestals
export default class Pedestal
{
    constructor(_width, _height, _depth, _map, _posX, _posY, _posZ)
    {
        this.group = new THREE.Group()
        this.group.position.set(_posX, _posY, _posZ)// pedestal's position
        const pedestal = new THREE.Mesh(
            new THREE.BoxGeometry(_width, _height, _depth),
            new THREE.MeshPhongMaterial({
                map: _map// pedestal's map
            })
        )
        this.group.add(pedestal)// Add the created pedestal to the group
    }
}