import './style/main.styl'
import * as THREE from 'three'
import Monster from './scripts/MonsterClass.js'
import Panel from './scripts/Panel.js'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'
import marbleGroundSource from './images/StoneMarbleCalacatta004/Previews/StoneMarbleCalacatta004_Flat.jpg'
import stoneBrickSource from './images/StoneBricksBeige015/Previews/StoneBricksBeige015_Flat.jpg'
import plasterSource from './images/Plaster_001_SD/Plaster_001_COLOR.jpg'
import audioMonsterHunter from './audio/MH-ost-min.mp3'
import imageMap from './images/map.jpg'
import importFelyne from './images/felyne.gif'
import importLogo from './images/logo.png'
import importMapDeviljho from './images/mapdeviljho.jpg'
import importMapRathalos from './images/maprathalos.jpg'
import importDeviljho from './images/deviljho.png'
import importDeviljhoIcon from './images/deviljhoicon.png'
import importRathalosIcon from './images/rathalosicon.png'
import importRathalos from './images/rathalos.png'

const placeholderRathalos = document.querySelector('.rathalos')
const imageRathalos = new Image()
imageRathalos.src = importRathalos
placeholderRathalos.appendChild(imageRathalos)

const placeholderRathalosIcon = document.querySelector('.rathalosIcon')
const imageRathalosIcon = new Image()
imageRathalosIcon.src = importRathalosIcon
placeholderRathalosIcon.appendChild(imageRathalosIcon)

const placeholderDeviljhoIcon = document.querySelector('.deviljhoIcon')
const imageDeviljhoIcon = new Image()
imageDeviljhoIcon.src = importDeviljhoIcon
placeholderDeviljhoIcon.appendChild(imageDeviljhoIcon)

const placeholderDeviljho = document.querySelector('.deviljho')
const imageDeviljho = new Image()
imageDeviljho.src = importDeviljho
placeholderDeviljho.appendChild(imageDeviljho)

const placeholderMapDeviljho = document.querySelector('.js-mapImageDeviljho')
const placeholderMapRathalos = document.querySelector('.js-mapImageRathalos')
const imageMapDeviljho = new Image()
const imageMapRathalos = new Image()
imageMapDeviljho.src = importMapDeviljho
imageMapRathalos.src = importMapRathalos
placeholderMapDeviljho.appendChild(imageMapDeviljho)
placeholderMapRathalos.appendChild(imageMapRathalos)



const placeholderLogo = document.querySelector('.emblem')
const placeholderLogo2 = document.querySelector('.emblem2')
const placeholderLogo3 = document.querySelector('.emblem3')
const imageLogo = new Image()
const imageLogo2 = new Image()
const imageLogo3 = new Image()
imageLogo.src = importLogo
imageLogo2.src = importLogo
imageLogo3.src = importLogo
placeholderLogo.appendChild(imageLogo)
placeholderLogo2.appendChild(imageLogo2)
placeholderLogo3.appendChild(imageLogo3)

const placeholderFelyne = document.querySelector('.felyne')
const placeholderFelyne2 = document.querySelector('.felyne2')
const placeholderFelyne3 = document.querySelector('.felyne3')
const imageFelyne = new Image()
const imageFelyne2 = new Image()
const imageFelyne3 = new Image()
imageFelyne.src = importFelyne
imageFelyne2.src = importFelyne
imageFelyne3.src = importFelyne
placeholderFelyne.appendChild(imageFelyne)
placeholderFelyne2.appendChild(imageFelyne2)
placeholderFelyne3.appendChild(imageFelyne3)

const placeholderImage = document.querySelector('.background')
const $image = new Image()
$image.src = imageMap
placeholderImage.appendChild($image)

/**
 * Info Page
 */

var name = document.querySelector('.js-name'),
    physiology = document.querySelector('.js-physiologyDeviljho'),
    physiology = document.querySelector('.js-physiologyRathalos'),
    capacities = document.querySelector('.js-capacitiesDeviljho'),
    capacities = document.querySelector('.js-capacitiesRathalos'),
    behavior = document.querySelector('.js-behaviorDeviljho'),
    behavior = document.querySelector('.js-behaviorRathalos'),
    habitat = document.querySelector('.js-habitatDeviljho'),
    habitat = document.querySelector('.js-habitatRathalos'),
    textDeviljho = document.querySelector('.js-textDeviljho'),
    textRathalos = document.querySelector('.js-textRathalos'),
    mapButton = document.querySelector('.js-map'),
    mapButton2 = document.querySelector('.js-map2'),
    mapImage = document.querySelector('.js-mapImageDeviljho'),
    mapImage2 = document.querySelector('.js-mapImageRathalos'),
    currentCat = 0

    physiology.addEventListener('click', () => {

        capacities.style.color ="#fff"
        capacities.style.backgroundColor ="transparent"
        physiology.style.color ="#000"
        physiology.style.backgroundColor = "#fff"
        behavior.style.color ="#fff"
        behavior.style.backgroundColor = "transparent"
        habitat.style.color ="#fff"
        habitat.style.backgroundColor = "transparent"
        textDeviljho.innerHTML = "Le Deviljho est un très grand bipède, de la famille des Wyvernes de terre, caractérisé par sa coloration verte uniforme, couleur forêt, et par un haut de corps musclé."
        textRathalos.innerHTML = "De taille moyenne, ils sont reconnaissables par leur couleur rouge cramoisie et leurs ailes comportant des motifs de flammes. Au delà de son apparence de Wyverne, le Rathalos évoque aussi l'aigle, autant par son museau crochu que par son statut de roi des cieux."
        currentCat = 1

    })

    capacities.addEventListener('click', () => {

        capacities.style.color ="#000"
        capacities.style.backgroundColor ="#fff"
        physiology.style.color ="#fff"
        physiology.style.backgroundColor = "transparent"
        behavior.style.color ="#fff"
        behavior.style.backgroundColor = "transparent"
        habitat.style.color ="#fff"
        habitat.style.backgroundColor = "transparent"
        textDeviljho.innerHTML = "Le Deviljho attaque principalement à l'aide de sa mâchoire et sa queue. De par sa grande chaleur corporelle et son métabolisme le Deviljho est toujours affamé, et est en recherche permanente de nourriture."
        textRathalos.innerHTML = "Le Rathalos passe la plupart de son temps à se battre en vol. Sa capacité à vivre dans les environnements les plus étranges et rudes participe à sa renommée de Roi des Wyvernes. Tout comme la Rathian il peut immobiliser un chasseur et le déchiqueter."
        currentCat = 2

    })

    behavior.addEventListener('click', () => {

        capacities.style.color ="#fff"
        capacities.style.backgroundColor ="transparent"
        physiology.style.color ="#fff"
        physiology.style.backgroundColor = "transparent"
        behavior.style.color ="#000"
        behavior.style.backgroundColor = "#fff"
        habitat.style.color ="#fff"
        habitat.style.backgroundColor = "transparent"
        textDeviljho.innerHTML = "Le Deviljho est un monstre nomade. Il a tendance à errer sur de longues distances à la recherche de proies. Son statut de super-prédateur lui permet de traverser le territoire de n'importe quel monstre qui se dresse sur son chemin, ce qui n'empêche pas d'entrer en conflit régulièrement avec d'autres monstres. "
        textRathalos.innerHTML = "Il existe deux sous-espèce de Rathalos, le Rathalos azur habitant aux mêmes endroits que son cousin rouge, et une sous-espèce plus solitaire, le Rathalos d'argent, vivant dans des zones plus recluses : l'Ancienne Tour ou les Marais. "
        currentCat = 3
    })

    habitat.addEventListener('click', () => {

        capacities.style.color ="#fff"
        capacities.style.backgroundColor ="transparent"
        physiology.style.color ="#fff"
        physiology.style.backgroundColor = "transparent"
        behavior.style.color ="#fff"
        behavior.style.backgroundColor = "transparent"
        habitat.style.color ="#000"
        habitat.style.backgroundColor = "#fff"
        textDeviljho.innerHTML = "En raison de son caractère nomade, le Deviljho est connu pour habiter une grande variété d'environnements, tels que la Toundra, l'Île déserte et le Volcan. Sa présence perturbe un peu souvent l'écosystème naturel, qui est cependant adapté aux allers et venues de ce monstres. Deviljho attaque principalement à l'aide de sa mâchoire et sa queue. De par sa grande chaleur corporelle et son métabolisme le Deviljho est toujours affamé, et est en recherche permanente de nourriture."
        textRathalos.innerHTML = "Du fait de sa suprématie dans les airs, le Rathalos vit souvent au sommet des terrains, ce qui lui permet de surveiller rapidement toute l'activité de son territoire. Cela s'illustre par le fait qu'il vit au sommet de la falaise de l'Île déserte, ou encore au sommet de l'arbre de de la forêt ancienne. "
        currentCat = 4
    })

    mapButton.addEventListener('click', () => {

        mapImage.classList.add('show')
        mapImage.classList.remove('hide')
        console.log("worked")
    })

    mapButton2.addEventListener('click', () => {

        mapImage2.classList.add('show')
        mapImage2.classList.remove('hide')
        console.log("worked")
    })

    document.addEventListener('keydown', (e) => 
{
    if (e.code == 'Escape') 
    {
        mapImage.classList.remove('show')
        mapImage.classList.add('hide')
        mapImage2.classList.remove('show')
        mapImage2.classList.add('hide')
    
    }
})

/**
 * Textures
 */


const textureLoader = new THREE.TextureLoader()

const marbleGroundTexture = textureLoader.load(marbleGroundSource)
marbleGroundTexture.repeat.x = 15
marbleGroundTexture.repeat.y = 15
marbleGroundTexture.wrapS = THREE.RepeatWrapping
marbleGroundTexture.wrapT = THREE.RepeatWrapping
marbleGroundTexture.magFilter = THREE.NearestFilter

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
const diablos = new Monster(
    /*Path*/'/models/diablos/glTF-Binary/Diablos.glb',
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
    /*posY*/ 30,
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

const popo = new Monster(
    '/models/popo/glTF-Binary/Popo.glb',
    /*posX*/ 87,
    /*posY*/ 12,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)
scene.add(popo.group)

const fish1 = new Monster(
    '/models/fish/glTF-Binary/Fish1.glb',
    /*posX*/ 15,
    /*posY*/ 40,
    /*posZ*/ - 355,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.2),
)
scene.add(fish1.group)

const fish2 = new Monster(
    '/models/fish/glTF-Binary/Fish2.glb',
    /*posX*/ -20,
    /*posY*/ 15,
    /*posZ*/ - 330,
    /*scale*/ 1,
    /*rotation*/ (Math.PI * 0.8),
)
scene.add(fish2.group)

const fish3 = new Monster(
    '/models/fish/glTF-Binary/Fish3.glb',
    /*posX*/ 25,
    /*posY*/ 10,
    /*posZ*/ - 360,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.8),
)
scene.add(fish3.group)

const fish4 = new Monster(
    '/models/fish/glTF-Binary/Fish4.glb',
    /*posX*/ 0,
    /*posY*/ 4,
    /*posZ*/ - 340,
    /*scale*/ 3,
    /*rotation*/ (Math.PI * 1.5),
)
scene.add(fish4.group)

const fish5 = new Monster(
    '/models/fish/glTF-Binary/Fish5.glb',
    /*posX*/ - 20,
    /*posY*/ 40,
    /*posZ*/ - 350,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish5.group)

const fish6 = new Monster(
    '/models/fish/glTF-Binary/Fish6.glb',
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 343,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(fish6.group)

const giggi = new Monster(
    '/models/giggi/glTF-Binary/Giggi.glb',
    /*posX*/ 10,
    /*posY*/ 10,
    /*posZ*/ - 385,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(giggi.group)

const delex = new Monster(
    '/models/delex/glTF-Binary/Delex.glb',
    /*posX*/ -30,
    /*posY*/ 5,
    /*posZ*/ - 355,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
scene.add(delex.group)

const altaroth = new Monster(
    '/models/altaroth/glTF-Binary/Altaroth.glb',
    /*posX*/ 89,
    /*posY*/ 4.7,
    /*posZ*/ - 337.5,
    /*scale*/ 3,
    /*rotation*/ (Math.PI),
)
scene.add(altaroth.group)

const bnahabra = new Monster(
    '/models/bnahabra/glTF-Binary/Bnahabra.glb',
    /*posX*/ 89,
    /*posY*/ 4,
    /*posZ*/ - 368.5,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI),
)
scene.add(bnahabra.group)

/**
 * Controls
 */


let controls = new PointerLockControls (camera, document.body)
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
        // controls.lock()
    }
    if (_event.key === 's' || _event.code === 'ArrowDown')
    {
        moveBackward = true
        // controls.lock()
    }
    if (_event.key === 'q' || _event.code === 'ArrowLeft')
    {
        moveLeft = true
        // controls.lock()
    }
    if (_event.key === 'd' || _event.code === 'ArrowRight')
    {
        moveRight = true
        // controls.lock()
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
    sound.loop = true
    sound.play()
})

const audioFirstRoom = new THREE.Mesh(
    new THREE.SphereBufferGeometry(10, 16, 8),
    new THREE.MeshNormalMaterial({
        color: 0xFF0000
    })
)
audioFirstRoom.position.set(0, 55, - 25)
// audioFirstRoom.visible = false
scene.add(audioFirstRoom)

audioFirstRoom.add(sound)

// Second

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
    new THREE.MeshNormalMaterial({
        color: 0xFF0000
    })
)
audioSecondRoom.position.set(0, 55, - 200)
// audioSecondRoom.visible = false
scene.add(audioSecondRoom)

audioSecondRoom.add(soundSecond)


// Third


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
    new THREE.MeshNormalMaterial({
        color: 0xFF0000
    })
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
 * HTML Page
 */
const blocker = document.querySelector('.blocker')
const instructions = document.querySelector('.instructions')

controls.addEventListener('lock', () => {
    blocker.style.display = 'block'
})

controls.addEventListener('unlock', () => {
    instructions.style.display = 'none'
})

document.addEventListener('click', () => {
    controls.lock()
    instructions.style.display = 'none'
})


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