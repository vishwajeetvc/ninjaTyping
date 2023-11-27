"use strict"

// lesson is the parrent of test section
const lesson = document.querySelector('.lessons');
const buttons = Array.from(document.querySelectorAll('.level .card'));

// An empty div where letter/words are appended
const test = document.querySelector(".test");

buttons.forEach(item =>{
	item.addEventListener('click',()=>{

		// hiding the content of the screen (except nav)
		Array.from(lesson.children).forEach(item=>{
			item.hidden = true
		})
		// getting the chapter name like asdfghkjl; from card bottom
		const chapter = item.children[1].innerHTML.toLowerCase().split(' ').join('');

		// append the letters on the test div  based on their chapter
		if(chapter == "asdfghjkl;"){
			testForLetters("as df gghjk ll;asdflk hsdaflkj; asdflkhsdaflkj;asdflkghjkll;asdflkhsdaflkj;asdflkhsdaflkj;asdflkghjkll;asdfl");
		}
		if(chapter == "qwertyuiop"){
				testForLetters("qwertyuioppoiuytrewqqwertyioppoiuytqwertqweioutgwqeoiytoiuewpqroiytqweoriuqwpeoiryqwoeriuqwpeoriytwoeqiruwqpeo");
		}
		if(chapter == "zxcvbnm"){
				testForLetters("zxcvbnmmnbvcxzzxcvbbxzcvmxcvbmnxcvbcvxzcmbcnxzcvmbcxznmxcvbvxczmnvcxbmcnmvxcbczxnmvxcmvxzcbvmxzcmnvxcbczxmvxcmx");
		}
		if(chapter == "a-z"){
				testForLetters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz");
		}
		
	})
})

test.addEventListener('click',()=>{alert("hi")})


// append letters in test div
function testForLetters(letters){
	letters.split('').forEach(item =>{
		const span = document.createElement('span');
		span.className="testLetter"
		span.innerHTML = item;
		test.append(span);
		test.hidden = false;
		document.querySelector(".cont").append(test);
	})
}
