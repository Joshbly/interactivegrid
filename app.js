// app.js

const tiles = [];
let grid = document.getElementById('grid');
let numTiles = 100;

function createTiles() {
    for (let i = 0; i < numTiles; i++) {
        const newTile = document.createElement('div');
        newTile.className = "tile";
        newTile.onclick = function() {
            this.className = "tile";
            clearTimeout(autoBlackTurner);
            autoBlackTurner = setTimeout(turnRandomTileBlack, 2000);
        }
        grid.appendChild(newTile);
        tiles.push(newTile);
    }
}

function removeTiles() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    tiles.length = 0;
}

function adjustTiles() {
    let viewportWidth = window.innerWidth;
    numTiles = Math.floor(viewportWidth / 100); // Adjust this to change the number of tiles per row based on the viewport width
    removeTiles();
    createTiles();
}

window.onresize = adjustTiles;

function turnRandomTileBlack() {
    tiles[Math.floor(Math.random() * tiles.length)].className = "tile black";
}

let autoBlackTurner = setInterval(turnRandomTileBlack, 2000);

adjustTiles();
