
"use strict"

// hidding all content except home
const allContent = Array.from(document.querySelector('.cont').children);
for(let i = 1; i < allContent.length; i++){
	allContent[i].style.display = "none";
}

const links = document.querySelectorAll('nav ul li')
// hiding home element for only first time (on reload) 
links[0].style.display="none";

//converting the link(collection) into array;
const linksArr = Array.from(links);

linksArr.forEach(link=>{
	link.addEventListener('click',()=>{

		// make visible all links
		linksArr.forEach(item => {
			item.style.display = "";
		})
		// hiding a clicked link
		link.style.display = "none";
		//hiding the all content
		allContent.forEach(item =>{
			item.style.display = "none";
		})
		// make visible one content
		allContent.find(item  => item.className == link.innerHTML.toLowerCase()).style.display= "";
		
	})
});

