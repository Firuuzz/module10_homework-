const btnNode = document.querySelector('.btn').addEventListener('click', myClick);
function myClick(){
    const height = window.screen.height;
    const width = window.screen.width;
    alert(`Ширина экрана: ${width}px   
    Высота экрана: ${height}px`)
}
