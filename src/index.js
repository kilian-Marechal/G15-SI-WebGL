import './style/main.styl'
import * as THREE from 'three'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'

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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.lookAt(scene.position)
camera.position.z = 8
scene.add(camera)

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
    if (_event.key === 'z')
    {
        moveForward = true
    }
    if (_event.key === 's')
    {
        moveBackward = true
    }
    if (_event.key === 'q')
    {
        moveLeft = true
    }
    if (_event.key === 'd')
    {
        moveRight = true
    }
}

/**
 * Controls KeysUp
 */
const onKeyUp = ( _event ) => {
    if (_event.key === 'z')
    {
        moveForward = false
    }
    if (_event.key === 's')
    {
        moveBackward = false
    }
    if (_event.key === 'q')
    {
        moveLeft = false
    }
    if (_event.key === 'd')
    {
        moveRight = false
    }
}

document.addEventListener ('keydown', onKeyDown)
document.addEventListener ('keyup', onKeyUp)

/**
 * Objects
 */
const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0096ff })
)
scene.add(box)

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0096ff, side: THREE.DoubleSide })
)
scene.add(plane)

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

document.addEventListener('keydown', (_event) => {
    if(_event.key === ' ')
    {
        controls.lock()
    }
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