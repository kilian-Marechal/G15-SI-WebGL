import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Monster
{
    constructor(_path, _name, _posX, _posY, _posZ, _scale, _rotation, _centerX, _centerY)
    {
        this.group = new THREE.Group()

        // instantiate the Draco loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        // instantiate the .gtlf loader
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        // load the glb file
        gltfLoader.load(
            _path,
            (_gltf) =>
            {
                // get all meshes from the object
                while(_gltf.scene.children.length)
                {
                    this.child = _gltf.scene.children[0]
                    this.child.position.set(_posX, _posY, _posZ)
                    this.child.scale.set(_scale, _scale, _scale)
                    // this.child.rotation.y = _rotation
                    // this.child.center.x = _centerX
                    // this.child.center.y = _centerY
                    this.group.add(this.child)
                }
            }
        )
    }
}