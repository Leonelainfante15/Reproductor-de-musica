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

    return div
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
