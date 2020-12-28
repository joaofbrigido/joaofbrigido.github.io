export default function typeWriter(element) {
    const texto = element.innerHTML;
    const textoArray = [...texto];
    element.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(() =>
            element.innerHTML += letra, 75 * index);
    })
}
