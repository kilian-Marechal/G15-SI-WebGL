import './style/main.styl'
import * as THREE from 'three'
import Monster from './scripts/MonsterClass.js'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'
import marbleGroundSource from './images/StoneMarbleCalacatta004/Previews/StoneMarbleCalacatta004_Flat.jpg'
import stoneBrickSource from './images/StoneBricksBeige015/Previews/StoneBricksBeige015_Flat.jpg'
import plasterSource from './images/Plaster_001_SD/Plaster_001_COLOR.jpg'


/**
 * Textures
 */


const textureLoader = new THREE.TextureLoader()

const marbleGroundTexture = textureLoader.load(marbleGroundSource)
marbleGroundTexture.repeat.x = 15
marbleGroundTexture.repeat.y = 15
marbleGroundTexture.wrapS = THREE.RepeatWrapping
marbleGroundTexture.wrapT = THREE.RepeatWrapping

const stoneBrickTexture = textureLoader.load(stoneBrickSource)
stoneBrickTexture.repeat.x = 15
stoneBrickTexture.repeat.y = 10
stoneBrickTexture.wrapS = THREE.RepeatWrapping
stoneBrickTexture.wrapT = THREE.RepeatWrapping

const plasterTexture = textureLoader.load(plasterSource)
plasterTexture.wrapS = THREE.RepeatWrapping
plasterTexture.wrapT = THREE.RepeatWrapping


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


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 500)
camera.lookAt(scene.position)
camera.position.set(0, 1.5, - 5)
scene.add(camera)


/**
 * Lights
 */


const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)


/**
 * Move
 */ 
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
scene.add(controls.getObject())


/**
 * Controls KeysDown
 */


const onKeyDown = ( _event ) => {
    if (_event.key === 'z' || _event.code === 'ArrowUp')
    {
        moveForward = true
        controls.lock()
    }
    if (_event.key === 's' || _event.code === 'ArrowDown')
    {
        moveBackward = true
        controls.lock()
    }
    if (_event.key === 'q' || _event.code === 'ArrowLeft')
    {
        moveLeft = true
        controls.lock()
    }
    if (_event.key === 'd' || _event.code === 'ArrowRight')
    {
        moveRight = true
        controls.lock()
    }
    if (_event.key === ' ' || _event.code === 'space')
    {
        camera.position.y += 1
    }
    if (_event.key === 'Control' || _event.code === 'ControlLeft')
    {
        camera.position.y -= 1
    }
}


/**
 * Controls KeysUp
 */


const onKeyUp = ( _event ) => {
    if (_event.key === 'z' || _event.code === 'ArrowUp')
    {
        moveForward = false
    }
    if (_event.key === 's' || _event.code === 'ArrowDown')
    {
        moveBackward = false
    }
    if (_event.key === 'q' || _event.code === 'ArrowLeft')
    {
        moveLeft = false
    }
    if (_event.key === 'd' || _event.code === 'ArrowRight')
    {
        moveRight = false
    }
}

document.addEventListener ('keydown', onKeyDown)
document.addEventListener ('keyup', onKeyUp)


/**
 * Create Monsters
 */ 
const kelbi1 = new Monster('/models/kelbi/glTF-Binary/Kelbi1.glb')
kelbi1.group.position.set(0, 2, - 10)
scene.add(kelbi1.group)

const diablos = new Monster('/models/diablos/glTF-Binary/Diablos.glb')
diablos.group.position.set(0, 4, - 35)
scene.add(diablos.group)


/**
 * Objects
 */

 
//Groups
const museum = new THREE.Group()
scene.add(museum)

museum.position.set(0, 0, 0)

const firstRoom = new THREE.Group()
scene.add(firstRoom)

const secondRoom = new THREE.Group()
scene.add(secondRoom)

const thirdRoom = new THREE.Group()
scene.add(thirdRoom)

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 400, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
ground.position.set(0, 0, - 200)
ground.rotation.x -= Math.PI * 0.5
museum.add(ground)


// Walls
const wallLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallLeft.rotation.y = Math.PI * 0.5 
wallLeft.position.set(- 100, 15, - 200)
museum.add(wallLeft)

const wallRight = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallRight.rotation.y = - Math.PI * 0.5 
wallRight.position.set(100, 15, - 200)
museum.add(wallRight)

const wallForward = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallForward.position.set(0, 15, - 400)
museum.add(wallForward)

const wallBackward = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallBackward.position.set(0, 15, 0)

museum.add(wallBackward)


// Room 1
const wallLeftFirstRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallLeftFirstRoom.position.set(- 40, 15, - 125)
firstRoom.add(wallLeftFirstRoom)

const wallRightFirstRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightFirstRoom.position.set(70, 15, - 125)
firstRoom.add(wallRightFirstRoom)

const stageKelbi = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 2, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageKelbi.position.set(0, 0.51, - 10)
firstRoom.add(stageKelbi)

// Room 2
const wallLeftSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallLeftSecondRoom.position.set(- 40, 15, - 275)
secondRoom.add(wallLeftSecondRoom)

const wallRightSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 30, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightSecondRoom.position.set(70, 15, - 275)
secondRoom.add(wallRightSecondRoom)

// Room 3

const stageNina = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 2, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageNina.position.set(0, 0.51, - 10)
thirdRoom.add(stageNina)


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

    velocity.x -= velocity.x * 28.0 * delta
    velocity.z -= velocity.z * 28.0 * delta

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