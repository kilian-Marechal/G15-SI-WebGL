import './style/main.styl'
import * as THREE from 'three'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'
import marbleGroundSource from './images/StoneMarbleCalacatta004/Previews/StoneMarbleCalacatta004_Flat.jpg'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const marbleGroundTexture = textureLoader.load(marbleGroundSource)
marbleGroundTexture.repeat.x = 8
marbleGroundTexture.repeat.y = 8
marbleGroundTexture.wrapS = THREE.RepeatWrapping
marbleGroundTexture.wrapT = THREE.RepeatWrapping

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 250)
camera.lookAt(scene.position)
camera.position.z = 15
scene.add(camera)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

// Move
let moveForward = false
let moveBackward = false
let moveLeft = false
let moveRight = false

/**
 * Controls
 */
controls = new PointerLockControls (camera, document.body)
let prevTime = performance.now()
let velocity = new THREE.Vector3()
let clock = new THREE.Clock()
let direction = new THREE.Vector3
controls.unlock()
scene.add(controls.getObject())

/**
 * Controls KeysDown
 */
const onKeyDown = ( _event ) => {
    if (_event.key === 'z' || _event.key === 'ArrowUp')
    {
        moveForward = true
        controls.lock()
    }
    if (_event.key === 's' || _event.key === 'ArrowDown')
    {
        moveBackward = true
        controls.lock()
    }
    if (_event.key === 'q' || _event.key === 'ArrowLeft')
    {
        moveLeft = true
        controls.lock()
    }
    if (_event.key === 'd' || _event.key === 'ArrowRight')
    {
        moveRight = true
        controls.lock()
    }
}

/**
 * Controls KeysUp
 */
const onKeyUp = ( _event ) => {
    if (_event.key === 'z' || _event.key === 'ArrowUp')
    {
        moveForward = false
    }
    if (_event.key === 's' || _event.key === 'ArrowDown')
    {
        moveBackward = false
    }
    if (_event.key === 'q' || _event.key === 'ArrowLeft')
    {
        moveLeft = false
    }
    if (_event.key === 'd' || _event.key === 'ArrowRight')
    {
        moveRight = false
    }
}

document.addEventListener ('keydown', onKeyDown)
document.addEventListener ('keyup', onKeyUp)

/**
 * Objects
 */

//Group
const museum = new THREE.Group()
scene.add(museum)

museum.position.z = - 10
museum.position.y = - 1

// const dummy = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({
//         color: 0xFF0000
//     })
// )
// museum.add(dummy)

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 50, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
ground.position.y = - 0.55

ground.rotation.x -= Math.PI * 0.5
museum.add(ground)

// Walls
const wallLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 10, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
wallLeft.rotation.y = Math.PI * 0.5 
wallLeft.position.x = - 30
wallLeft.position.y = 4.45
museum.add(wallLeft)

const wallRight = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 10, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
wallRight.rotation.y = - Math.PI * 0.5 
wallRight.position.x = 30
wallRight.position.y = 4.45
museum.add(wallRight)

const wallForward = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 10, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide,
    })
)
wallForward.rotation.y = Math.PI
wallForward.position.z = - 25
wallForward.position.y = 4.45
museum.add(wallForward)

const wallBackward = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 10, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
wallBackward.rotation.y = Math.PI
wallBackward.position.z = 25
wallBackward.position.y = 4.45
museum.add(wallBackward)

//Aquarium
const aquarium = new THREE.Mesh(
    new THREE.SphereGeometry(8, 20, 10),
    new THREE.MeshBasicMaterial({
        color: 0x0000FF,
    })
)
aquarium.position.y = 5
museum.add(aquarium)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/**
 * Control Camera
 */
let controls = new PointerLockControls(camera, document.body)
scene.add(controls.getObject())

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    const time = performance.now()
    const delta = ( time - prevTime ) / 1000

    velocity.x -= velocity.x * 30.0 * delta
    velocity.z -= velocity.z * 30.0 * delta

    direction.z = Number( moveForward ) - Number ( moveBackward )
    direction.x = Number( moveRight ) - Number ( moveLeft )
    direction.normalize()

    if( moveForward || moveBackward )
    {
        velocity.z -= direction.z * 100.0 * delta
    }
    if( moveLeft || moveRight )
    {
        velocity.x -= direction.x * 100.0 * delta
    }

    controls.moveRight( - velocity.x * delta )
    controls.moveForward( - velocity.z * delta )
    controls.moveRight( - velocity.x * delta )
    controls.moveForward( - velocity.z * delta )

    prevTime = time

    // Render
    renderer.render(scene, camera)
}

loop()