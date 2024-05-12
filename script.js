function createGrid(rows) {
    const container = document.querySelector('#container');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        let widthval = (800/rows).toString();
        let heightval = (800/rows -2).toString();
        let px = 'px'
        row.style.width = (widthval + px)
        container.appendChild(row);
        for (let i = 0; i < rows; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.width = (widthval+px);
            square.style.height = (heightval+px);
            square.setAttribute('onmouseover', 'makeBlack(this)')
            square.setAttribute('onmouseout', 'makeBlack(this)')
            container.appendChild(square);
            row.appendChild(square);
        };
    };
}

createGrid(16)

function makeBlack(x) {
    x.style.backgroundColor = 'black';
};

const gridButton = document.querySelector('#gridButton');
gridButton.addEventListener('click', () => {
    let num = prompt('Enter the value for the NxN grid you want')
    container.remove()
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    body.appendChild(container)
    createGrid(num)
});