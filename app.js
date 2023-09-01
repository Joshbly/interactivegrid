// app.js

const tiles = [];
const grid = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
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

function turnRandomTileBlack() {
    tiles[Math.floor(Math.random() * tiles.length)].className = "tile black";
}

let autoBlackTurner = setInterval(turnRandomTileBlack, 2000);
