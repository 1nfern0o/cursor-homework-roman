function randomColor() {
    setInterval(() => {
        let block = document.getElementsByClassName('block');

        for (let i = 0 ; i < block.length; i++) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            block[i].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        }
    }, 1000);
}

randomColor();
