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
camera.position.set(0, 1.5, - 5)
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
const kelbi1 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi1.glb',
    /*posX*/ - 90,
    /*posY*/ 2,
    /*posZ*/ - 350,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(kelbi1.group)

const kelbi2 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi2.glb',
    /*posX*/ - 90,
    /*posY*/ 2,
    /*posZ*/ - 320,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(kelbi2.group)

const agnaktor = new Monster(
    '/models/agnaktor/glTF-Binary/Agnaktor.glb',
    /*posX*/ 0,
    /*posY*/ 50,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(agnaktor.group)

const baggi = new Monster(
    '/models/baggi/glTF-Binary/Baggi.glb',
    /*posX*/ 0,
    /*posY*/ 40,
    /*posZ*/ - 50,
    /*scale*/ 20,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(baggi.group)

const barroth = new Monster(
    '/models/barroth/glTF-Binary/Barroth.glb',
    /*posX*/ 0,
    /*posY*/ 40,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(barroth.group)

const deviljho = new Monster(
    '/models/deviljho/glTF-Binary/Deviljho.glb',
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 50,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(deviljho.group)

const diablos = new Monster(
    '/models/diablos/glTF-Binary/Diablos.glb',
    /*posX*/ 0,
    /*posY*/ 60,
    /*posZ*/ - 50,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(diablos.group)

const rathalos = new Monster(
    '/models/rathalos/glTF-Binary/Rathalos.glb',
    /*posX*/ 0,
    /*posY*/ 80,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(rathalos.group)

const popo = new Monster(
    '/models/popo/glTF-Binary/Popo.glb',
    /*posX*/ 0,
    /*posY*/ 90,
    /*posZ*/ - 50,
    /*scale*/ 10,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(popo.group)

const uragaan = new Monster(
    '/models/uragaan/glTF-Binary/Uragaan.glb',
    /*posX*/ 0,
    /*posY*/ 100,
    /*posZ*/ - 50,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(uragaan.group)

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

const firstRoom = new THREE.Group()
scene.add(firstRoom)

const secondRoom = new THREE.Group()
scene.add(secondRoom)

const thirdRoom = new THREE.Group()
scene.add(thirdRoom)

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
firstRoom.add(wallLeftFirstRoom)

const wallRightFirstRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightFirstRoom.position.set(70, 30, - 125)
firstRoom.add(wallRightFirstRoom)

const stageMonster1 = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshLambertMaterial({
        map: plasterTexture,
    })
)
stageMonster1.position.set(- 40, 0.51, - 94)
firstRoom.add(stageMonster1)

const stageMonster2 = new THREE.Mesh(
    new THREE.BoxGeometry(35, 1, 100),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageMonster2.position.set(68, 0.51, - 62),
firstRoom.add(stageMonster2)

// Room 2
const wallLeftSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallLeftSecondRoom.position.set(- 40, 30, - 275)
secondRoom.add(wallLeftSecondRoom)

const wallRightSecondRoom = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60, 1, 1),
    new THREE.MeshStandardMaterial({
        map: stoneBrickTexture,
        side: THREE.DoubleSide,
    })
)
wallRightSecondRoom.position.set(70, 30, - 275)
secondRoom.add(wallRightSecondRoom)

const stageMonster3 = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageMonster3.position.set(- 40, 0.51, - 158)
secondRoom.add(stageMonster3)

const stageMonster4 = new THREE.Mesh(
    new THREE.BoxGeometry(90, 1, 35),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageMonster4.position.set(- 40, 0.51, - 246)
secondRoom.add(stageMonster4)

const stageMonster5 = new THREE.Mesh(
    new THREE.BoxGeometry(35, 1, 100),
    new THREE.MeshStandardMaterial({
        map: plasterTexture,
    })
)
stageMonster5.position.set(68, 0.51, - 202),
secondRoom.add(stageMonster5)

// Room 3

const stageKelbi = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageKelbi.position.set(- 90, 0.51, - 337,5)
thirdRoom.add(stageKelbi)

const stageNiznouz = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageNiznouz.position.set(- 90, 0.51, - 306,25)
thirdRoom.add(stageNiznouz)

const stageNiznaz = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stageNiznaz.position.set(- 90, 0.51, - 368,75)
thirdRoom.add(stageNiznaz)

const stagetest = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagetest.position.set(90, 0.51, - 337.5)
thirdRoom.add(stagetest)

const stagetest2 = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagetest2.position.set(90, 0.51, - 306.25)
thirdRoom.add(stagetest2)

const stagetest3 = new THREE.Mesh(
    new THREE.BoxGeometry(7, 1, 8, 1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: plasterTexture
    })
)
stagetest3.position.set(90, 0.51, - 368.75)
thirdRoom.add(stagetest3)

const aquarium = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 20, 45, 20),
    new THREE.MeshBasicMaterial({
        color: 0x0000FF,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    })
)
aquarium.position.set(0, 22.51, - 340)
thirdRoom.add(aquarium)

/**
 * Lights
 */


const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
scene.add(ambientLight)

const pointLightFirstRoom = new THREE.PointLight(0xffffff, 0.7, 150)
pointLightFirstRoom.position.set(5, 50, - 65)
firstRoom.add(pointLightFirstRoom)

const pointLightSecondRoom = new THREE.PointLight(0xffffff, 0.7, 150)
pointLightSecondRoom.position.set(5, 50, - 200)
secondRoom.add(pointLightSecondRoom)

const pointLightThirdRoom = new THREE.PointLight(0xffffff, 0.7, 150)
pointLightThirdRoom.position.set(5, 50, - 335)
thirdRoom.add(pointLightThirdRoom)


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