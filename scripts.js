document.addEventListener('DOMContentLoaded', () => {
    const artistData = [
        {name: 'Belchior', image: './img/artista-belchior.jpg'},
        {name: 'Beatles', image: './img/artista-beatles.jpg'},
        {name: 'Charlie Brown Jr.', image: './img/artista-cbjr.jpg'},
        {name: 'The Strokes', image: './img/artista-strokes.jpg'},
        {name: 'The Last Shadow Puppets', image: './img/artista-TLSP.jpg'},
        {name: 'Arctic Monkeys', image: './img/artista-arctic.jpg'},
    ];
    const albumsData = [
        {name: 'AM', artist: 'Arctic Monkeys', image: './img/capa-am.jpg', 'AM': './am.mp3'},
        {name: 'Favourite Worst Nightmare', artist: 'Arctic Monkeys', image: './img/capa-fwn.jpg', 'Favourite Worst Nightmare': './fwn.mp3'},
        {name: 'Tranquility Base Hotel & Cassino', artist: 'Arctic Monkeys', image: './img/capa-tbhc.jpg','Tranquility Base Hotel & Cassino': './tbhc.mp3'},
        {name: 'Room on Fire', artist: 'The Strokes', image: './img/capa-roomonfire.jpg', 'Room on Fire': './roomonfire.mp3'},
        {name: 'Coração Selvagem', artist: 'Belchior', image: './img/capa-coracaoselvagem.jpg', 'Coração Selvagem': './coracaoselvagem.mp3'},
        {name: 'New Abnormal', artist: 'The Strokes', image: './img/capa-newabnormal.jpg', 'New Abnormal': './newabnormal.mp3'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    function  tocarmusica(nomedamusica){
        const player = document.querySelector('audio')
        player.src = albumsData.find((album) => !!album[nomedamusica])[nomedamusica]
        player.addEventListener('loadeddata', ()=>{
            player.play()
           
        })
    }
    const albumsGrid = document.querySelector('.albums-grid')

    artistData.forEach(artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')
        artistCard.innerHTML = `
        <img src="${artist.image}" alt= "imagem do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>
        `
       
        artistGrid.appendChild(artistCard)
    })
    albumsData.forEach(album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')
        albumCard.innerHTML = `
        <img src="${album.image}" alt= "imagem do ${album.name}">
        <h3>${album.name}</h3>
         <p>${album.artist}</p>
        `
        albumCard.addEventListener('click', () =>{
            tocarmusica(album.name)
        })
        albumsGrid.appendChild(albumCard)
    })

})




