import './style/main.styl'
import * as THREE from 'three'
import Monster from './scripts/MonsterClass.js'
import Panel from './scripts/Panel.js'
import Wall from './scripts/WallsClass.js'
import Pedestal from './scripts/PedestalsClass.js'
import Spot from './scripts/SpotsClass.js'
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


const monsterGroup = new THREE.Group()
scene.add(monsterGroup)
const diablos = new Monster(
    /*Path*/'/models/diablos/glTF-Binary/Diablos.glb',
    /*posX*/ - 40,
    /*posY*/ 20,
    /*posZ*/ - 85,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1.5),
)
monsterGroup.add(diablos.group)

const rathalos = new Monster(
    '/models/rathalos/glTF-Binary/Rathalos.glb',
    /*posX*/ 56.5,
    /*posY*/ 20,
    /*posZ*/ - 60,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)
monsterGroup.add(rathalos.group)

const deviljho = new Monster(
    '/models/deviljho/glTF-Binary/Deviljho.glb',
    /*posX*/ - 27,
    /*posY*/ 40,
    /*posZ*/ - 157,
    /*scale*/ 7,
    /*rotation*/ (Math.PI * 2),
)
monsterGroup.add(deviljho.group)


const barroth = new Monster(
    '/models/barroth/glTF-Binary/Barroth.glb',
    /*posX*/ - 33,
    /*posY*/ 32,
    /*posZ*/ - 245,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)
monsterGroup.add(barroth.group)


const uragaan = new Monster(
    '/models/uragaan/glTF-Binary/Uragaan.glb',
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 210,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 0.5),
)
monsterGroup.add(uragaan.group)


const kelbi2 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi2.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)
monsterGroup.add(kelbi2.group)


const baggi = new Monster(
    '/models/baggi/glTF-Binary/Baggi.glb',
    /*posX*/ - 90,
    /*posY*/ 7,
    /*posZ*/ - 337,
    /*scale*/ 5,
    /*rotation*/ (Math.PI * 2),
)
monsterGroup.add(baggi.group)

const kelbi1 = new Monster(
    '/models/kelbi/glTF-Binary/Kelbi1.glb',
    /*posX*/ - 90,
    /*posY*/ 4.8,
    /*posZ*/ - 368,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 2),
)
monsterGroup.add(kelbi1.group)

const agnaktor = new Monster(
    '/models/agnaktor/glTF-Binary/Agnaktor.glb',
    /*posX*/ 5,
    /*posY*/ 20,
    /*posZ*/ - 343,
    /*scale*/ 2.8,
    /*rotation*/ (Math.PI * 1.75),
)
monsterGroup.add(agnaktor.group)

const popo = new Monster(
    '/models/popo/glTF-Binary/Popo.glb',
    /*posX*/ 87,
    /*posY*/ 12,
    /*posZ*/ - 306,
    /*scale*/ 4,
    /*rotation*/ (Math.PI * 1),
)
monsterGroup.add(popo.group)

const fish1 = new Monster(
    '/models/fish/glTF-Binary/Fish1.glb',
    /*posX*/ 15,
    /*posY*/ 40,
    /*posZ*/ - 355,
    /*scale*/ 2,
    /*rotation*/ (Math.PI * 0.2),
)
monsterGroup.add(fish1.group)

const fish2 = new Monster(
    '/models/fish/glTF-Binary/Fish2.glb',
    /*posX*/ -20,
    /*posY*/ 15,
    /*posZ*/ - 330,
    /*scale*/ 1,
    /*rotation*/ (Math.PI * 0.8),
)
monsterGroup.add(fish2.group)

const fish3 = new Monster(
    '/models/fish/glTF-Binary/Fish3.glb',
    /*posX*/ 25,
    /*posY*/ 10,
    /*posZ*/ - 360,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.8),
)
monsterGroup.add(fish3.group)


const fish4 = new Monster(
    '/models/fish/glTF-Binary/Fish4.glb',
    /*posX*/ 0,
    /*posY*/ 4,
    /*posZ*/ - 340,
    /*scale*/ 3,
    /*rotation*/ (Math.PI * 1.5),
)
monsterGroup.add(fish4.group)

const fish5 = new Monster(
    '/models/fish/glTF-Binary/Fish5.glb',
    /*posX*/ - 20,
    /*posY*/ 40,
    /*posZ*/ - 350,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
monsterGroup.add(fish5.group)

const fish6 = new Monster(
    '/models/fish/glTF-Binary/Fish6.glb',
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 343,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
monsterGroup.add(fish6.group)

const giggi = new Monster(
    '/models/giggi/glTF-Binary/Giggi.glb',
    /*posX*/ 10,
    /*posY*/ 10,
    /*posZ*/ - 385,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI * 0.5),
)
monsterGroup.add(giggi.group)

const delex = new Monster(
    '/models/delex/glTF-Binary/Delex.glb',
    /*posX*/ -30,
    /*posY*/ 5,
    /*posZ*/ - 355,
    /*scale*/ 1.5,
    /*rotation*/ (Math.PI * 0.5),
)
monsterGroup.add(delex.group)


const altaroth = new Monster(
    '/models/altaroth/glTF-Binary/Altaroth.glb',
    /*posX*/ 89,
    /*posY*/ 4.7,
    /*posZ*/ - 337.5,
    /*scale*/ 3,
    /*rotation*/ (Math.PI),
)
monsterGroup.add(altaroth.group)

const bnahabra = new Monster(
    '/models/bnahabra/glTF-Binary/Bnahabra.glb',
    /*posX*/ 89,
    /*posY*/ 4,
    /*posZ*/ - 368.5,
    /*scale*/ 2.5,
    /*rotation*/ (Math.PI),
)
monsterGroup.add(bnahabra.group)

/**
 * Controls
 */


let controls = new PointerLockControls (camera, document.body)
let prevTime = performance.now()
let velocity = new THREE.Vector3()
let direction = new THREE.Vector3
scene.add(controls.getObject())


/**
 * Controls KeysDown
 */


const onKeyDown = ( _event ) => {
    if (_event.key === 'z' || _event.code === 'ArrowUp')
    {
        moveForward = true
    }
    if (_event.key === 's' || _event.code === 'ArrowDown')
    {
        moveBackward = true
    }
    if (_event.key === 'q' || _event.code === 'ArrowLeft')
    {
        moveLeft = true
    }
    if (_event.key === 'd' || _event.code === 'ArrowRight')
    {
        moveRight = true
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
const wallGroup = new THREE.Group()
scene.add(wallGroup)

const pedestalGroup = new THREE.Group()
scene.add(pedestalGroup)

// Ground
const ground = new Wall(
    /*width*/ 200,
    /*height*/ 400,
    /*depth*/ 2,
    /*map*/ marbleGroundTexture,
    /*posX*/ 0,
    /*posY*/ -1,
    /*posZ*/ - 200,
    /*rotationX*/ Math.PI * 0.5,
    /*rotationY*/ 0
)
wallGroup.add(ground.group)


// Roof
const roof = new Wall(
    /*width*/ 200,
    /*height*/ 400,
    /*depth*/ 3,
    /*map*/ marbleGroundTexture,
    /*posX*/ 0,
    /*posY*/ 60,
    /*posZ*/ - 200,
    /*rotationX*/ Math.PI * 0.5,
    /*rotationY*/ 0
)
wallGroup.add(roof.group)

// Global Walls
const wallLeft = new Wall(
    /*width*/ 400,
    /*height*/ 60,
    /*depth*/ 3,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 100,
    /*posY*/ 30,
    /*posZ*/ - 200,
    /*rotationX*/ 0,
    /*rotationY*/ Math.PI * 0.5
)
wallGroup.add(wallLeft.group)

const wallRight = new Wall(
    /*width*/ 400,
    /*height*/ 60,
    /*depth*/ 3,
    /*map*/ stoneBrickTexture,
    /*posX*/ 100,
    /*posY*/ 30,
    /*posZ*/ - 200,
    /*rotationX*/ 0,
    /*rotationY*/ Math.PI * 0.5
)
wallGroup.add(wallRight.group)

const wallForward = new Wall(
    /*width*/ 200,
    /*height*/ 60,
    /*depth*/ 3,
    /*map*/ stoneBrickTexture,
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ - 400,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallForward.group)

const wallBackward = new Wall(
    /*width*/ 200,
    /*height*/ 60,
    /*depth*/ 3,
    /*map*/ stoneBrickTexture,
    /*posX*/ 0,
    /*posY*/ 30,
    /*posZ*/ 0,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallBackward.group)


/**
 * Room 1
 */


// Room 1 - Walls

const wallLeftFirstRoom = new Wall(
    /*width*/ 120,
    /*height*/ 60,
    /*height*/ 2,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 40,
    /*posY*/ 30,
    /*posZ*/ - 125,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallLeftFirstRoom.group)

const wallRightFirstRoom = new Wall(
    /*width*/ 60,
    /*height*/ 60,
    /*height*/ 2,
    /*map*/ stoneBrickTexture,
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 125,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallRightFirstRoom.group)

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
pedestalGroup.add(pedestalDiablo.group)

const pedestalRathalos = new Pedestal(
    /*width*/ 35,
    /*height*/ 1,
    /*depth*/ 100,
    /*map*/ plasterTexture,
    /*posX*/ 68,
    /*posY*/ 0.51,
    /*posZ*/ - 62,
)
pedestalGroup.add(pedestalRathalos.group)

// Room 1 - Panels
const panelDiablos = new Panel()
scene.add(panelDiablos.group)

const panelRathalos = new Panel()
panelRathalos.group.position.set(- 20, 0, - 20)
panelRathalos.group.rotation.y = Math.PI * 1.5
scene.add(panelRathalos.group)

// Room 1 - Spots
const spot1Diablos = new Spot(
    /*posX*/ - 75,
    /*posZ*/ - 65,
    /*rotationY*/ Math.PI * 1.7
)
scene.add(spot1Diablos.group)

const spot2Diablos = new Spot(
    /*posX*/ - 5,
    /*posZ*/ - 65,
    /*rotationY*/ Math.PI * 0.35
)
scene.add(spot2Diablos.group)

const spot1Rathalos = new Spot(
    /*posX*/ 40,
    /*posZ*/ - 100,
    /*rotationY*/ Math.PI * 1.15
)
scene.add(spot1Rathalos.group)

const spot2Rathalos = new Spot(
    /*posX*/ 40,
    /*posZ*/ - 20,
    /*rotationY*/ Math.PI * 1.9
)
scene.add(spot2Rathalos.group)

/**
 * Room 2
 */ 


// Room 2 - Walls
const wallLeftSecondRoom = new Wall(
    /*width*/ 120,
    /*height*/ 60,
    /*height*/ 2,
    /*map*/ stoneBrickTexture,
    /*posX*/ - 40,
    /*posY*/ 30,
    /*posZ*/ - 275,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallLeftSecondRoom.group)

const wallRightSecondRoom = new Wall(
    /*width*/ 60,
    /*height*/ 60,
    /*height*/ 2,
    /*map*/ stoneBrickTexture,
    /*posX*/ 70,
    /*posY*/ 30,
    /*posZ*/ - 275,
    /*rotationX*/ 0,
    /*rotationY*/ 0
)
wallGroup.add(wallRightSecondRoom.group)

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
pedestalGroup.add(pedestalUragaan.group)

const pedestalBarroth = new Pedestal(
    /*width*/ 90,
    /*height*/ 1,
    /*depth*/ 35,
    /*map*/ plasterTexture,
    /*posX*/ - 40,
    /*posY*/ 0.51,
    /*posZ*/ - 246,
)
pedestalGroup.add(pedestalBarroth.group)

const pedestalDeviljho = new Pedestal(
    /*width*/ 35,
    /*height*/ 1,
    /*depth*/ 100,
    /*map*/ plasterTexture,
    /*posX*/ 68,
    /*posY*/ 0.51,
    /*posZ*/ - 202,
)
pedestalGroup.add(pedestalDeviljho.group)

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

// Room 2 - Spots
const spot1Uragaan = new Spot(
    /*posX*/ 45,
    /*posZ*/ - 160,
    /*rotationY*/ Math.PI * 1.85
)
scene.add(spot1Uragaan.group)

const spot2Uragaan = new Spot(
    /*posX*/ 45,
    /*posZ*/ - 245,
    /*rotationY*/ Math.PI * 1.15
)
scene.add(spot2Uragaan.group)

const spot1Deviljho = new Spot(
    /*posX*/ - 75,
    /*posZ*/ - 180,
    /*rotationY*/ Math.PI * 1.25
)
scene.add(spot1Deviljho.group)

const spot2Deviljho = new Spot(
    /*posX*/ - 5,
    /*posZ*/ - 180,
    /*rotationY*/ Math.PI * 0.75
)
scene.add(spot2Deviljho.group)

const spot1Barroth = new Spot(
    /*posX*/ - 75,
    /*posZ*/ - 225,
    /*rotationY*/ Math.PI * 1.65
)
scene.add(spot1Barroth.group)

const spot2Barroth = new Spot(
    /*posX*/ - 5,
    /*posZ*/ - 225,
    /*rotationY*/ Math.PI * 0.25
)
scene.add(spot2Barroth.group)

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
pedestalGroup.add(pedestalKelbi1.group)

const pedestalKelbi2 = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ - 90,
    /*posY*/ 0.51,
    /*posZ*/ - 306,
)
pedestalGroup.add(pedestalKelbi2.group)

const pedestalBaggi = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ - 90,
    /*posY*/ 0.51,
    /*posZ*/ - 337,
)
pedestalGroup.add(pedestalBaggi.group)

const pedestalPopo = new Pedestal(
    /*width*/ 14,
    /*height*/ 1,
    /*depth*/ 15,
    /*map*/ plasterTexture,
    /*posX*/ 88,
    /*posY*/ 0.51,
    /*posZ*/ - 306,
)
pedestalGroup.add(pedestalPopo.group)

const pedestalAltaroth = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ 90,
    /*posY*/ 0.51,
    /*posZ*/ - 337,
)
pedestalGroup.add(pedestalAltaroth.group)

const pedestalBnahabra = new Pedestal(
    /*width*/ 7,
    /*height*/ 1,
    /*depth*/ 8,
    /*map*/ plasterTexture,
    /*posX*/ 90,
    /*posY*/ 0.51,
    /*posZ*/ - 368,
)
pedestalGroup.add(pedestalBnahabra.group)

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

// Room 3 - Spots
const spot1Aquarium = new Spot(
    /*posX*/ - 35,
    /*posZ*/ - 305,
    /*rotationY*/ Math.PI * 1.75
)
scene.add(spot1Aquarium.group)

const spot2Aquarium = new Spot(
    /*posX*/ 35,
    /*posZ*/ - 305,
    /*rotationY*/ Math.PI * 0.2
)
scene.add(spot2Aquarium.group)

const spot3Aquarium = new Spot(
    /*posX*/ - 35,
    /*posZ*/ - 395,
    /*rotationY*/ Math.PI * 1.25
)
scene.add(spot3Aquarium.group)

const spot4Aquarium = new Spot(
    /*posX*/ 35,
    /*posZ*/ - 395,
    /*rotationY*/ Math.PI * 0.75
)
scene.add(spot4Aquarium.group)

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
audioFirstRoom.visible = false
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
    new THREE.MeshNormalMaterial()
)
audioSecondRoom.position.set(0, 55, - 200)
audioSecondRoom.visible = false
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
    new THREE.MeshNormalMaterial()
)
audioThirdRoom.position.set(0, 55, - 350)
audioThirdRoom.visible = false
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


const ambientLight = new THREE.AmbientLight(0xffffff, 0.10)
scene.add(ambientLight)

// First Room
// const pointLightFirstRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
// pointLightFirstRoom.position.set(5, 60, - 65)
// scene.add(pointLightFirstRoom)

// Diablo Lights
const spot1DiabloLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1DiabloLamp.target = diablos.group
spot1DiabloLamp.position.set(- 75, 1.2, - 65)
scene.add(spot1DiabloLamp)

const spot2DiabloLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2DiabloLamp.target = diablos.group
spot2DiabloLamp.position.set(- 5, 1.2, - 65)
scene.add(spot2DiabloLamp)

// Rathalos Lights
const spot1RathalosLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1RathalosLamp.target = rathalos.group
spot1RathalosLamp.position.set(40, 1.2, - 100)
scene.add(spot1RathalosLamp)

const spot2RathalosLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2RathalosLamp.target = rathalos.group
spot2RathalosLamp.position.set(40, 1.2, - 20)
scene.add(spot2RathalosLamp)


// Second Room
// const pointLightSecondRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
// pointLightSecondRoom.position.set(5, 60, - 200)
// scene.add(pointLightSecondRoom)

// Uragaan
const spot1UragaanLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1UragaanLamp.target = uragaan.group
spot1UragaanLamp.position.set(45, 1.2, - 160)
scene.add(spot1UragaanLamp)

const spot2UragaanLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2UragaanLamp.target = uragaan.group
spot2UragaanLamp.position.set(45, 1.2, - 245)
scene.add(spot2UragaanLamp)

// Deviljho
const spot1DeviljhoLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1DeviljhoLamp.target = deviljho.group
spot1DeviljhoLamp.position.set(- 75, 1.2, - 180)
scene.add(spot1DeviljhoLamp)

const spot2DeviljhoLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2DeviljhoLamp.target = deviljho.group
spot2DeviljhoLamp.position.set(- 5, 1.2, - 180)
scene.add(spot2DeviljhoLamp)

// Barroth
const spot1BarrothLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1BarrothLamp.target = barroth.group
spot1BarrothLamp.position.set(- 75, 1.2, - 225)
scene.add(spot1BarrothLamp)

const spot2BarrothLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2BarrothLamp.target = barroth.group
spot2BarrothLamp.position.set(- 5, 1.2, - 225)
scene.add(spot2BarrothLamp)


// Third Room
// const pointLightThirdRoom = new THREE.PointLight(0xdeffde, 0.8, 150)
// pointLightThirdRoom.position.set(5, 60, - 335)
// scene.add(pointLightThirdRoom)

const spot1AquariumLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot1AquariumLamp.target = agnaktor.group
spot1AquariumLamp.position.set(- 35, 0.8, - 305)
scene.add(spot1AquariumLamp)

const spot2AquariumLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot2AquariumLamp.target = agnaktor.group
spot2AquariumLamp.position.set(35, 0.8, - 305)
scene.add(spot2AquariumLamp)

const spot3AquariumLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot3AquariumLamp.target = agnaktor.group
spot3AquariumLamp.position.set(- 35, 0.8, - 395)
scene.add(spot3AquariumLamp)

const spot4AquariumLamp = new THREE.SpotLight(0xc2822f, 0.8, 100, 100, 0)
spot4AquariumLamp.target = agnaktor.group
spot4AquariumLamp.position.set(35, 0.8, - 395)
scene.add(spot4AquariumLamp)


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
 * Interactions
 */


const hitboxDiablo = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1.5, 15),
    new THREE.MeshNormalMaterial()
)
hitboxDiablo.position.set(- 40, 0.5, - 55)
hitboxDiablo.name = 'diablo'
hitboxDiablo.visible = false
scene.add(hitboxDiablo)


const hitboxRathaloss = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxRathaloss.position.set(35, 0.5, - 60)
hitboxRathaloss.visible = false
scene.add(hitboxRathaloss)


const hitboxUragaan = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxUragaan.position.set(35, 0.5, - 200)
hitboxUragaan.visible = false
scene.add(hitboxUragaan)


const hitboxDeviljho = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxDeviljho.position.set(- 35, 0.5, - 185)
hitboxDeviljho.name = 'deviljho'
hitboxDeviljho.visible = false
scene.add(hitboxDeviljho)


const hitboxBarroth = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxBarroth.position.set(- 35, 0.5, - 215)
hitboxBarroth.visible = false
scene.add(hitboxBarroth)

const hitboxKebil2 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxKebil2.position.set(- 73, 0.5, - 306)
hitboxKebil2.visible = false
scene.add(hitboxKebil2)


const hitboxBaggi = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxBaggi.position.set(- 73, 0.5, - 337)
hitboxBaggi.visible = false
scene.add(hitboxBaggi)


const hitboxKelbi = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxKelbi.position.set(- 73, 0.5, - 368)
hitboxKelbi.visible = false
scene.add(hitboxKelbi)


const hitboxPopo = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxPopo.position.set(65, 0.5, - 305)
hitboxPopo.visible = false
scene.add(hitboxPopo)


const hitboxDelex = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxDelex.position.set(65, 0.5, - 337)
hitboxDelex.visible = false
scene.add(hitboxDelex)


const hitboxGiggi = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxGiggi.position.set(65, 0.5, - 368)
hitboxGiggi.visible = false
scene.add(hitboxGiggi)


const hitboxAgnaktor = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 15),
    new THREE.MeshNormalMaterial()
)
hitboxAgnaktor.position.set(0, 0.5, - 300)
hitboxAgnaktor.visible = false
scene.add(hitboxAgnaktor)


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
const h5 = document.querySelector('h5')

const mouse = new THREE.Vector2();

let onMouseMove = (_event) => {
  mouse.x = (_event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(_event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener("mousemove", onMouseMove, false)

const infosDeviljho = document.querySelector('.infosDeviljho')

const raycaster = new THREE.Raycaster()
const loop = () =>
{
    window.requestAnimationFrame(loop)
    
    // Camera control
    const time = performance.now()
    const delta = ( time - prevTime ) / 1000
    
    velocity.x -= velocity.x * 14.0 * delta
    velocity.z -= velocity.z * 14.0 * delta
    
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

    let targetList = []

    targetList.push(hitboxDiablo, hitboxRathaloss, hitboxUragaan, hitboxDeviljho, hitboxBarroth, hitboxKebil2, hitboxBaggi, hitboxKelbi, hitboxPopo, hitboxGiggi, hitboxDelex, hitboxAgnaktor)
    raycaster.setFromCamera(mouse, camera)

    let intersects = raycaster.intersectObjects(targetList, true)
    if (intersects.length > 0) {
        h5.style.display = "block"
    }
    
    document.addEventListener('keydown', (event) => {
        if (intersects.length > 0 && event.keyCode === 69) {
            // keys[69] = E key
            if(infosDeviljho.classList.contains('infosDeviljho'))
            {
                h5.style.display = "none"
                infosDeviljho.classList.remove('infosDeviljho')
                infosDeviljho.classList.add('infosDeviljhoVisible')
                intersects = []
            }
            else{
                h5.style.display = "none"
                infosDeviljho.classList.remove('infosDeviljhoVisible')
                infosDeviljho.classList.add('infosDeviljho')
                intersects = []
            }
        }
    })

    // Render
    renderer.render(scene, camera)
}
loop()