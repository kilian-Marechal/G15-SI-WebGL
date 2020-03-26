import './style/main.styl'
import * as THREE from 'three'
import Monster, { monsterGroup } from './scripts/MonsterClass.js'
import Panel, { panelGroup } from './scripts/Panel.js'
import Wall, { wallGroup } from './scripts/WallsClass.js'
import Pedestal, { pedestalGroup } from './scripts/PedestalsClass.js'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'
import marbleGroundSource from './images/StoneMarbleCalacatta004/Previews/StoneMarbleCalacatta004_Flat.jpg'
import stoneBrickSource from './images/StoneBricksBeige015/Previews/StoneBricksBeige015_Flat.jpg'
import plasterSource from './images/Plaster_001_SD/Plaster_001_COLOR.jpg'
import audioMonsterHunter from './audio/MH-ost-min.mp3'


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
plasterTexture.repeat.x = 10
plasterTexture.repeat.y = 10
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
camera.position.set(- 40, 5, - 5)
scene.add(camera)


/**
 * Move
 */


let moveForward = false
let moveBackward = false
let moveLeft = false
let moveRight = false


/**
 * Create Monsters
 */


scene.add(monsterGroup)
const diablos = new Monster(
    /*Path*/'/models/diablos/glTF-Binary/Diablos.glb',
    /*posX*/ - 40,
    /*posY*/ 20,
    /*posZ*/ - 85,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1.5),
)


const rathalos = new Monster(
    '/models/rathalos/glTF-Binary/Rathalos.glb',
    /*posX*/ 56.5,
    /*posY*/ 20,
    /*posZ*/ - 60,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)


const deviljho = new Monster(
    '/models/deviljho/glTF-Binary/Deviljho.glb',
    /*posX*/ - 27,
    /*posY*/ 40,
    /*posZ*/ - 157,
    /*scale*/ 7,
    /*rotation*/ (Math.PI * 2),
)


const barroth = new Monster(
    '/models/barroth/glTF-Binary/Barroth.glb',
    /*posX*/ - 33,
    /*posY*/ 32,
    /*posZ*/ - 245,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)


const uragaan = new Monster(
    '/models/uragaan/glTF-Binary/Uragaan.glb',
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 210,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 0.5),
)


const kelbi2 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi2.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)


const baggi = new Monster(
    '/models/baggi/glTF-Binary/Baggi.glb',
    /*posX*/ - 90,
    /*posY*/ 7,
    /*posZ*/ - 337,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)


const kelbi1 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi1.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 368,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)


const agnaktor = new Monster(
    '/models/agnaktor/glTF-Binary/Agnaktor.glb',
    /*posX*/ 5,
    /*posY*/ 20,
    /*posZ*/ - 343,
    /*scale*/ 2.8,
    /*rotation*/ (Math.PI * 1.75),
)


const popo = new Monster(
    '/models/popo/glTF-Binary/Popo.glb',
    /*posX*/ 87,
    /*posY*/ 12,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)


const fish1 = new Monster(
    '/models/fish/glTF-Binary/Fish1.glb',
    /*posX*/ 15,
    /*posY*/ 40,
    /*posZ*/ - 355,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.2),
)


const fish2 = new Monster(
    '/models/fish/glTF-Binary/Fish2.glb',
    /*posX*/ -20,
    /*posY*/ 15,
    /*posZ*/ - 330,
    /*scale*/ 1,
    /*rotation*/ (Math.PI * 0.8),
)


const fish3 = new Monster(
    '/models/fish/glTF-Binary/Fish3.glb',
    /*posX*/ 25,
    /*posY*/ 10,
    /*posZ*/ - 360,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.8),
)


const fish4 = new Monster(
    '/models/fish/glTF-Binary/Fish4.glb',
    /*posX*/ 0,
    /*posY*/ 4,
    /*posZ*/ - 340,
    /*scale*/ 3,
    /*rotation*/ (Math.PI * 1.5),
)


const fish5 = new Monster(
    '/models/fish/glTF-Binary/Fish5.glb',
    /*posX*/ - 20,
    /*posY*/ 40,
    /*posZ*/ - 350,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)


const fish6 = new Monster(
    '/models/fish/glTF-Binary/Fish6.glb',
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 343,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)


const giggi = new Monster(
    '/models/giggi/glTF-Binary/Giggi.glb',
    /*posX*/ 10,
    /*posY*/ 10,
    /*posZ*/ - 385,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI * 0.5),
)


const delex = new Monster(
    '/models/delex/glTF-Binary/Delex.glb',
    /*posX*/ -30,
    /*posY*/ 5,
    /*posZ*/ - 355,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)


const altaroth = new Monster(
    '/models/altaroth/glTF-Binary/Altaroth.glb',
    /*posX*/ 89,
    /*posY*/ 4.8,
    /*posZ*/ - 337.5,
    /*scale*/ 3,
    /*rotation*/ (Math.PI),
)


const bnahabra = new Monster(
    '/models/bnahabra/glTF-Binary/Bnahabra.glb',
    /*posX*/ 89,
    /*posY*/ 5,
    /*posZ*/ - 368.5,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI),
)


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
 * Walls, Pedestals and Pannels
 */

 
//Groups
const museum = new THREE.Group()
scene.add(museum)
museum.add(wallGroup)
museum.add(pedestalGroup)

// Ground
const ground = new Wall(
    /*width*/ 200,
    /*height*/ 400,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ marbleGroundTexture,
    /*posX*/ 0,
    /*posY*/ 0,
    /*posZ*/ - 200,
    /*rotationX*/ Math.PI * 0.5,
    /*rotationY*/ 0
)

// Roof
const roof = new Wall(
    /*width*/ 200,
    /*height*/ 400,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ marbleGroundTexture,
    /*posX*/ 0,
    /*posY*/ 60,
    /*posZ*/ - 200,
    /*rotationX*/ Math.PI * 0.5,
    /*rotationY*/ 0
)

// Global Walls
const wallLeft = new Wall(
    /*width*/ 400,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 100,
    /*posY*/ 30,
    /*posZ*/ - 200,
    /*rotationX*/ 0,
    /*rotationY*/ Math.PI * 0.5
)

const wallRight = new Wall(
    /*width*/ 400,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ 100,
    /*posY*/ 30,
    /*posZ*/ - 200,
    /*rotationX*/ 0,
    /*rotationY*/ Math.PI * 0.5
)

const wallForward = new Wall(
    /*width*/ 200,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 400,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

const wallBackward = new Wall(
    /*width*/ 200,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ 0,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

/**
 * Room 1
 */

// Room 1 - Walls

const wallLeftFirstRoom = new Wall(
    /*width*/ 120,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 40,
    /*posY*/ 30,
    /*posZ*/ - 125,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

const wallRightFirstRoom = new Wall(
    /*width*/ 60,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 125,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

// Room 1 - Pedestals
const pedestalDiablo = new Pedestal(
    /*width*/ 90,
    /*height*/ 1,
    /*depth*/ 35,
    /*map*/ plasterTexture,
    /*posX*/ - 40,
    /*posY*/ 0.51,
    /*posZ*/ - 94,
)

const pedestalRathalos = new Pedestal(
    /*width*/ 35,
    /*height*/ 1,
    /*depth*/ 100,
    /*map*/ plasterTexture,
    /*posX*/ 68,
    /*posY*/ 0.51,
    /*posZ*/ - 62,
)

// Room 1 - Panels
const panelDiablo = new Panel()
scene.add(panelDiablo.group)

const panelRathalos = new Panel()
panelRathalos.group.position.set(- 20, 0, - 20)
panelRathalos.group.rotation.y = Math.PI * 1.5
scene.add(panelRathalos.group)

/**
 * Room 2
 */ 

// Room 2 - Walls
const wallLeftSecondRoom = new Wall(
    /*width*/ 120,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 40,
    /*posY*/ 30,
    /*posZ*/ - 275,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

const wallRightSecondRoom = new Wall(
    /*width*/ 60,
    /*height*/ 60,
    /*widthSegments*/ 1,
    /*heigthSegments*/ 1,
    /*map*/ stoneBrickTexture,
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 275,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)

// Room 2 - Pedestals
const pedestalUragaan = new Pedestal(
    /*width*/ 90,
    /*height*/ 1,
    /*depth*/ 35,
    /*map*/ plasterTexture,
    /*posX*/ - 40,
    /*posY*/ 0.51,
    /*posZ*/ - 158,
)

const pedestalBarroth = new Pedestal(
    /*width*/ 90,
    /*height*/ 1,
    /*depth*/ 35,
    /*map*/ plasterTexture,
    /*posX*/ - 40,
    /*posY*/ 0.51,
    /*posZ*/ - 246,
)

const pedestalDeviljho = new Pedestal(
    /*width*/ 35,
    /*height*/ 1,
    /*depth*/ 100,
    /*map*/ plasterTexture,
    /*posX*/ 68,
    /*posY*/ 0.51,
    /*posZ*/ - 202,
)

// Room 2 - Panels
const panelUgaraan = new Panel()
panelUgaraan.group.position.set(- 20, 0, - 160)
panelUgaraan.group.rotation.y = Math.PI * 1.5
scene.add(panelUgaraan.group)

const panelDeviljho = new Panel()
panelDeviljho.group.position.set(- 75, 0, - 240)
panelDeviljho.group.rotation.y = Math.PI * 1
scene.add(panelDeviljho.group)

const panelBarroth = new Panel()
panelBarroth.group.position.set(5, 0, - 160)
panelBarroth.group.rotation.y = Math.PI * 2
scene.add(panelBarroth.group)

/**
 * Room 3
 */ 

// Room 3 - Pedestals
const pedestalKelbi1 = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ - 90,
    /*posY*/ 0.51,
    /*posZ*/ - 368,
)

const pedestalKelbi2 = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ - 90,
    /*posY*/ 0.51,
    /*posZ*/ - 306,
)

const pedestalBaggi = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ - 90,
    /*posY*/ 0.51,
    /*posZ*/ - 337,
)

const pedestalPopo = new Pedestal(
    /*width*/ 14,
    /*height*/ 1,
    /*depth*/ 15,
    /*map*/ plasterTexture,
    /*posX*/ 88,
    /*posY*/ 0.51,
    /*posZ*/ - 306,
)

const pedestalAltaroth = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ 90,
    /*posY*/ 0.51,
    /*posZ*/ - 337,
)

const pedestalBnahabra = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ 90,
    /*posY*/ 0.51,
    /*posZ*/ - 368,
)

// Room 3 - Panel
const panelAgnaktor = new Panel()
panelAgnaktor.group.position.set(40, 0, - 245)
panelAgnaktor.group.rotation.y = Math.PI * 2
scene.add(panelAgnaktor.group)

const panelPopo = new Panel()
panelPopo.group.position.set(10, 0, - 266)
panelPopo.group.rotation.y = Math.PI * 1.5
scene.add(panelPopo.group)

const panelTest = new Panel()
panelTest.group.position.set(10, 0, - 297)
panelTest.group.rotation.y = Math.PI * 1.5
scene.add(panelTest.group)

const panelTest2 = new Panel()
panelTest2.group.position.set(10, 0, - 329)
panelTest2.group.rotation.y = Math.PI * 1.5
scene.add(panelTest2.group)

const panelKelbi = new Panel()
panelKelbi.group.position.set(- 18, 0, - 408)
panelKelbi.group.rotation.y = Math.PI * 0.5
scene.add(panelKelbi.group)

const panelBaggi = new Panel()
panelBaggi.group.position.set(- 18, 0, - 377)
panelBaggi.group.rotation.y = Math.PI * 0.5
scene.add(panelBaggi.group)

const panelKelbi2 = new Panel()
panelKelbi2.group.position.set(- 18, 0, - 346)
panelKelbi2.group.rotation.y = Math.PI * 0.5
scene.add(panelKelbi2.group)

// Room 3 - Aquarium
const aquarium = new THREE.Mesh(
    new THREE.CylinderGeometry(40, 40, 50,50),
    new THREE.MeshPhongMaterial({
        color: 0x4a69bd,
        transparent: true,
        opacity: 0.7,
        shininess: 70,
        side: THREE.DoubleSide
    })
)
aquarium.position.set(0, 25.01, - 350)
scene.add(aquarium)

/**
 * Audio
 */

const audioSound = new Audio()
audioSound.src = audioMonsterHunter

const listener = new THREE.AudioListener()
camera.add(listener)

const sound = new THREE.PositionalAudio(listener)

const audioLoader = new THREE.AudioLoader()
audioLoader.load(audioMonsterHunter, (buffer) => {
    sound.setBuffer(buffer),
    sound.setRefDistance(1),
    sound.setMaxDistance(0.10),
    sound.loop = true
    sound.play()
})

const audioFirstRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(10, 16, 8),
    new THREE.MeshNormalMaterial()
)
audioFirstRoom.position.set(0, 55, - 25)
// audioFirstRoom.visible = false
scene.add(audioFirstRoom)

audioFirstRoom.add(sound)


const soundSecond = new THREE.PositionalAudio(listener)

const audioLoaderSecond = new THREE.AudioLoader()
audioLoaderSecond.load(audioMonsterHunter, (buffer) => {
    soundSecond.setBuffer(buffer),
    soundSecond.setRefDistance(1),
    soundSecond.setMaxDistance(0.10),
    soundSecond.loop = true
    soundSecond.play()
})

const audioSecondRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 8, 4),
    new THREE.MeshNormalMaterial()
)
audioSecondRoom.position.set(0, 55, - 200)
// audioSecondRoom.visible = false
scene.add(audioSecondRoom)

audioSecondRoom.add(soundSecond)


const soundThird = new THREE.PositionalAudio(listener)

const audioLoaderThird = new THREE.AudioLoader()
audioLoaderThird.load(audioMonsterHunter, (buffer) => {
    soundThird.setBuffer(buffer),
    soundThird.setRefDistance(1),
    soundThird.setMaxDistance(0.10),
    soundThird.loop = true
    soundThird.play()
})

const audioThirdRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 8, 4),
    new THREE.MeshNormalMaterial()
)
audioThirdRoom.position.set(0, 55, - 350)
// audioThirdRoom.visible = false
scene.add(audioThirdRoom)

audioThirdRoom.add(soundThird)

/**
 * Renderer
 */


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
renderer.outputEncoding = THREE.sRGBEncoding
renderer.gammaFactor = 2.2

/**
 * Lights
 */


const ambientLight = new THREE.AmbientLight(0xffffff, 0.12)
scene.add(ambientLight)

const pointLightFirstRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
pointLightFirstRoom.position.set(5, 60, - 65)
scene.add(pointLightFirstRoom)

const pointLightSecondRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
pointLightSecondRoom.position.set(5, 60, - 200)
scene.add(pointLightSecondRoom)

const pointLightThirdRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
pointLightThirdRoom.position.set(5, 60, - 335)
scene.add(pointLightThirdRoom)


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

    velocity.x -= velocity.x * 1.0 * delta
    velocity.z -= velocity.z * 1.0 * delta

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