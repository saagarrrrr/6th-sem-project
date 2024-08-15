const imgContainers = document.querySelectorAll('.imgbox');
imgContainers.forEach( clickedImgBox => {
    clickedImgBox.addEventListener('click', () => {
        clickedImgBox.classList.toggle('active');

        imgContainers.forEach((imageContainer)=>{
            if(clickedImgBox !== imageContainer){
                imageContainer.classList.remove('active');
            }
        });
    });
})