const createSongHTMLElement = (song) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'contenido__seccionCanciones__listaCanciones__tarjeta')
    div.innerHTML = `
    <img class="contenido__seccionCanciones__listaCanciones__tarjeta__portada"
        src="${song.image.url}" alt="">

    <div class="contenido__seccionCanciones__listaCanciones__tarjeta__descripcion">
        <h2
            class="contenido__seccionCanciones__listaCanciones__tarjeta__descripcion__nombreCancion">
            ${song.title}</h2>
        <h3
            class="contenido__seccionCanciones__listaCanciones__tarjeta__descripcion__nombreArtista">
            ${song.author}</h3>
    </div>
    `

    setInteractiveComponent(div, song)

    return div
}





const setInteractiveComponent = (component, song) => {

    component.addEventListener('click', () => {
    
    document.getElementById('audio').setAttribute('src', song.audio.url )
    document.getElementById('image').setAttribute('src', song.image.url )
    document.getElementById('title').innerHTML = song.title
    document.getElementById('author').innerHTML = song.author

    })
}





axios.get('https://api.institutoalfa.org/api/songs')
    .then( (response) => {

        const dataSongs = response.data.songs
        const contenedor = document.getElementById('container-song')


        dataSongs.map( (song) => {
            const elemento = createSongHTMLElement(song)

            contenedor.appendChild(elemento)
        
        } )

    })

    document.getElementById('play').addEventListener('click', () => {
        const audio = document.getElementById('audio')
    
        if (audio.paused) {
            document.getElementById('play').setAttribute('src', '/assets/botonPausa.png')
            audio.play()
        } else {
            audio.pause()
            document.getElementById('play').setAttribute('src', '/assets/botonPlay.svg')
        }
    })