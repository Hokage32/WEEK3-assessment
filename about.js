console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted Successfully!")
}

function pugMouse(evt){
	evt.preventDefault()

	alert('I Love You!')
}

let form = document.querySelector('#contact');
let pug = document.querySelector('img')


form.addEventListener('submit', handleSubmit);
pug.addEventListener('mouseover', pugMouse)


