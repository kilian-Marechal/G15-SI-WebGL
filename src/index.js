import './style/main.styl'
import * as THREE from 'three'
import Monster from './scripts/MonsterClass.js'
import Panel from './scripts/Panel.js'
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
// To create : new Monster('_path', _posX, _posY, _posZ, _scale, _rotation)
const diablos = new Monster(
    '/models/diablos/glTF-Binary/Diablos.glb',
    /*posX*/ - 40,
    /*posY*/ 20,
    /*posZ*/ - 85,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1.5),
)
scene.add(diablos.group)

const rathalos = new Monster(
    '/models/rathalos/glTF-Binary/Rathalos.glb',
    /*posX*/ 56.5,
    /*posY*/ 20,
    /*posZ*/ - 60,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)
scene.add(rathalos.group)

const deviljho = new Monster(
    '/models/deviljho/glTF-Binary/Deviljho.glb',
    /*posX*/ - 27,
    /*posY*/ 40,
    /*posZ*/ - 157,
    /*scale*/ 7,
    /*rotation*/ (Math.PI * 2),
)
scene.add(deviljho.group)

const barroth = new Monster(
    '/models/barroth/glTF-Binary/Barroth.glb',
    /*posX*/ - 33,
    /*posY*/ 32,
    /*posZ*/ - 245,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)
scene.add(barroth.group)

const uragaan = new Monster(
    '/models/uragaan/glTF-Binary/Uragaan.glb',
    /*posX*/ 70,
    /*posY*/ 32,
    /*posZ*/ - 210,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(uragaan.group)

const kelbi2 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi2.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)
scene.add(kelbi2.group)

const baggi = new Monster(
    '/models/baggi/glTF-Binary/Baggi.glb',
    /*posX*/ - 90,
    /*posY*/ 7,
    /*posZ*/ - 337,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)
scene.add(baggi.group)

const kelbi1 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi1.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 368,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)
scene.add(kelbi1.group)

const agnaktor = new Monster(
    '/models/agnaktor/glTF-Binary/Agnaktor.glb',
    /*posX*/ 5,
    /*posY*/ 20,
    /*posZ*/ - 343,
    /*scale*/ 2.8,
    /*rotation*/ (Math.PI * 1.75),
)
scene.add(agnaktor.group)

const fish1 = new Monster(
    '/models/fish/glTF-Binary/Fish1.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish1.group)

const fish2 = new Monster(
    '/models/fish/glTF-Binary/Fish2.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish2.group)

const fish3 = new Monster(
    '/models/fish/glTF-Binary/Fish3.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish3.group)

const fish4 = new Monster(
    '/models/fish/glTF-Binary/Fish4.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish4.group)

const fish5 = new Monster(
    '/models/fish/glTF-Binary/Fish5.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish5.group)

const fish6 = new Monster(
    '/models/fish/glTF-Binary/Fish6.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish6.group)

const giggi = new Monster(
    '/models/giggi/glTF-Binary/Giggi.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(giggi.group)

const delex = new Monster(
    '/models/delex/glTF-Binary/Delex.glb',
    /*posX*/ 0,
    /*posY*/ 15,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(delex.group)


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
 * Objects
 */

 
//Groups
const museum = new THREE.Group()
scene.add(museum)

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 400, 1, 1),
    new THREE.MeshPhongMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
ground.position.set(0, 0, - 200)
ground.rotation.x -= Math.PI * 0.5
museum.add(ground)

// Roof
const roof = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 400, 1, 1),
    new THREE.MeshStandardMaterial({
        map: marbleGroundTexture,
        side: THREE.DoubleSide
    })
)
roof.position.set(0, 60, - 200)
roof.rotation.x -= Math.PI * 0.5
museum.add(roof)

// Walls
const wallLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallLeft.rotation.y = Math.PI * 0.5 
wallLeft.position.set(- 100, 30, - 200)
museum.add(wallLeft)

const wallRight = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallRight.rotation.y = - Math.PI * 0.5 
wallRight.position.set(100, 30, - 200)
museum.add(wallRight)

const wallForward = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallForward.position.set(0, 30, - 400)
museum.add(wallForward)

const wallBackward = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide
    })
)
wallBackward.position.set(0, 30, 0)

museum.add(wallBackward)

// Room 1
const wallLeftFirstRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallLeftFirstRoom.position.set(- 40, 30, - 125)
scene.add(wallLeftFirstRoom)

const wallRightFirstRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightFirstRoom.position.set(70, 30, - 125)
scene.add(wallRightFirstRoom)

const stageDiablo = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshLambertMaterial({
        map: plasterTexture,
    })
)
stageDiablo.position.set(- 40, 0.51, - 94)
scene.add(stageDiablo)

const stageRathalos = new THREE.Mesh(
    new THREE.BoxGeometry(35, 1, 100),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageRathalos.position.set(68, 0.51, - 62),
scene.add(stageRathalos)

const panelDiablo = new Panel()
scene.add(panelDiablo.group)

const panelRathalos = new Panel()
panelRathalos.group.position.set(- 20, 0, - 20)
panelRathalos.group.rotation.y = Math.PI * 1.5
scene.add(panelRathalos.group)

// Room 2
const wallLeftSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallLeftSecondRoom.position.set(- 40, 30, - 275)
scene.add(wallLeftSecondRoom)

const wallRightSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightSecondRoom.position.set(70, 30, - 275)
scene.add(wallRightSecondRoom)

const stageUragaan = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageUragaan.position.set(- 40, 0.51, - 158)
scene.add(stageUragaan)

const stageBarroth = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageBarroth.position.set(- 40, 0.51, - 246)
scene.add(stageBarroth)

const stageDeviljho = new THREE.Mesh(
    new THREE.BoxGeometry(35, 1, 100),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageDeviljho.position.set(68, 0.51, - 202),
scene.add(stageDeviljho)

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


// Room 3
const stageKelbil2 = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageKelbil2.position.set(- 90, 0.51, - 306,25)
scene.add(stageKelbil2)

const stagebaggi = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagebaggi.position.set(- 90, 0.51, - 337,5)
scene.add(stagebaggi)

const stageKelbi = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageKelbi.position.set(- 90, 0.51, - 368,75)
scene.add(stageKelbi)

const stagePopo = new THREE.Mesh(
    new THREE.BoxGeometry(14, 1, 15, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagePopo.position.set(88, 0.51, - 306.25)
scene.add(stagePopo)

const stagetest = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagetest.position.set(90, 0.51, - 337.5)
scene.add(stagetest)

const stagetest2 = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagetest2.position.set(90, 0.51, - 368.75)
scene.add(stagetest2)

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
    sound.play()
})

const audioFirstRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(10, 16, 8),
    new THREE.MeshNormalMaterial({
        color: 0xFF0000
    })
)
audioFirstRoom.position.set(0, 55, - 15)
audioFirstRoom.visible = false
scene.add(audioFirstRoom)

audioFirstRoom.add(sound)


const soundSecond = new THREE.PositionalAudio(listener)

const audioLoaderSecond = new THREE.AudioLoader()
audioLoaderSecond.load(audioMonsterHunter, (buffer) => {
    soundSecond.setBuffer(buffer),
    soundSecond.setRefDistance(1),
    soundSecond.setMaxDistance(0.10),
    soundSecond.play()
})

const audioSecondRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 8, 4),
    new THREE.MeshNormalMaterial({
        color: 0xFF0000
    })
)
audioSecondRoom.position.set(0, 55, - 250)
audioSecondRoom.visible = false
scene.add(audioSecondRoom)

audioSecondRoom.add(soundSecond)

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
 * Renderer
 */


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
renderer.outputEncoding = THREE.sRGBEncoding
renderer.gammaFactor = 2.2


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