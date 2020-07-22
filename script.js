document.querySelector('#btn-send').onclick = (event) => {
    event.preventDefault();


    let form = document.querySelector('form');
    console.log(form.elements.exampleInputName1.value);
    console.log(form.elements.exampleInputEmail1.value);
    console.log(form.elements.exampleInputMobile1.value);
    console.log(form.elements.exampleFormControlTextarea1.value);
}