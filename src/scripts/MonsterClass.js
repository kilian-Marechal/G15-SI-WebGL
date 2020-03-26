import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// create and export a group to add to the scene in index.js
export const monsterGroup = new THREE.Group()

// class to create monsters
export default class Monster
{
    constructor(_path, _posX, _posY, _posZ, _scale, _rotation)
    {
        // instantiate the .gtlf loader
        const gltfLoader = new GLTFLoader()

        // load the glb file
        gltfLoader.load(
            _path,
            (_gltf) =>
            {
                // get all meshes from the object
                while(_gltf.scene.children.length)
                {
                    this.child = _gltf.scene.children[0]
                    this.child.position.set(_posX, _posY, _posZ)// Model's position
                    this.child.scale.set(_scale, _scale, _scale)// Model 's scale
                    this.child.rotation.y = _rotation// Model's rotation
                    this.child.material = new THREE.MeshLambertMaterial({
                        map: this.child.material.map
                    })
                    monsterGroup.add(this.child)// Add the created model to the group
                }
            }
        )
    }
}