var name = document.querySelector('.js-name'),
    physiology = document.querySelector('.js-physiology'),
    capacities = document.querySelector('.js-capacities'),
    behavior = document.querySelector('.js-behavior'),
    habitat = document.querySelector('.js-habitat'),
    text = document.querySelector('.js-text'),
    mapButton = document.querySelector('.js-map'),
    mapImage = document.querySelector('.js-mapImage'),
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
        text.innerHTML = "Le Deviljho est un très grand bipède, de la famille des Wyvernes de terre, caractérisé par sa coloration verte uniforme, couleur forêt, et par un haut de corps musclé."
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
        text.innerHTML = "Le Deviljho attaque principalement à l'aide de sa mâchoire et sa queue. De par sa grande chaleur corporelle et son métabolisme le Deviljho est toujours affamé, et est en recherche permanente de nourriture."
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
        text.innerHTML = "Le Deviljho est un monstre nomade. Il a tendance à errer sur de longues distances à la recherche de proies. Son statut de super-prédateur lui permet de traverser le territoire de n'importe quel monstre qui se dresse sur son chemin, ce qui n'empêche pas d'entrer en conflit régulièrement avec d'autres monstres. "
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
        text.innerHTML = "En raison de son caractère nomade, le Deviljho est connu pour habiter une grande variété d'environnements, tels que la Toundra, l'Île déserte et le Volcan. Sa présence perturbe un peu souvent l'écosystème naturel, qui est cependant adapté aux allers et venues de ce monstres. Deviljho attaque principalement à l'aide de sa mâchoire et sa queue. De par sa grande chaleur corporelle et son métabolisme le Deviljho est toujours affamé, et est en recherche permanente de nourriture."
        currentCat = 4
    })

    mapButton.addEventListener('click', () => {

        mapImage.classList.add('show')
        mapImage.classList.remove('hide')
    })


    document.addEventListener('keydown', (e) => 
{
    if (e.code == 'Escape') 
    {
        mapImage.classList.add('hide')
    }
})