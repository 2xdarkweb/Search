const hamburge =document.querySelector('.hamburge');
const navbar = document.querySelector('ul')

hamburge.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});



const clo = document.querySelector('cl')
clo.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});


function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('Dark');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

