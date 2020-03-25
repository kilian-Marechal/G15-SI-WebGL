import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Monster
{
    constructor(_path,)
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
                console.log(_gltf)
                // get all meshes from the object
                while(_gltf.scene.children.length)
                {
                    const child = _gltf.scene.children[0]
                    this.group.add(child)
                }
            }
        )
    }
}