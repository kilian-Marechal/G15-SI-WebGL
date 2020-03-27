import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// class to create monsters
export default class Monster
{
    constructor(_path, _posX, _posY, _posZ, _scale, _rotation)
    {
        this.group = new THREE.Group()
        this.group.position.set(_posX, _posY, _posZ)// Model's position
        this.group.scale.set(_scale, _scale, _scale)// Model 's scale
        this.group.rotation.y = _rotation// Model's rotation

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
                    const child = _gltf.scene.children[0]
                    child.geometry.computeVertexNormals()
                    child.material = new THREE.MeshStandardMaterial({
                        map: child.material.map
                    })
                    this.group.add(child)// Add the created model to the group
                }
            }
        )
    }
}