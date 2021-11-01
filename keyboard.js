/*🍚next step
10. display input type : text  -> change to number  ...🍚
keyboard-login  --display input type : text
keyboard-password  --display input type : text
keyboard-discount  --display input type : number
*/

// 🍀 let
// 🍀const
const keyboardBtn  = document.querySelector('.keyboard-btn');

// login
const keyboardLogin = document.querySelector('.keyboard-login');
const loginDisplay = document.querySelector('.display-login');
const loginEnterKey = document.querySelector('.keyboard-login .enter');
const loginCloseKey = document.querySelector('.keyboard-login .close');

// keyboard-password
const keyboardPassword = document.querySelector('.keyboard-password');
const keyboardDisplay = document.querySelector('#display');
const enterKey = document.querySelector('.keyboard-password .enter');
const closeKey = document.querySelector('.keyboard-password .close');

// discount
const keyboardDiscount = document.querySelector('.keyboard-discount');
const discountDisplay = document.querySelector('.display-discount');
const discountEnterKey = document.querySelector('.keyboard-discount .enter');
const discountCloseKey = document.querySelector('.keyboard-discount .close');

// code
const keyboardCode = document.querySelector('.keyboard-code');
const CodeDisplay = document.querySelector('.display-code');
const CodeEnterKey = document.querySelector('.keyboard-code .enter');
const CodeCloseKey = document.querySelector('.keyboard-code .close');

const page1Code = document.querySelector('.page1 .code');

// 
const cashierElem = document.querySelector('.cashier');
const cashier_number =  8888;
const cashier_number20 = 9999;
const password = 0000


// 🍀js1004-40. keyboard-login : open

keyboardBtn.addEventListener('click',()=>{
	keyboardLogin.classList.add('change');	
	loginDisplay.value = "";
	keyboardDisplay.value = "";
});

// 🍀 keyboard-login : close 
loginCloseKey.addEventListener('click',()=>{
	keyboardLogin.classList.remove('change');
});

// 🍀 keyboard-login : Enter - cashier number & open keyboardContainer

loginEnterKey.addEventListener('click',()=>{

	// cashier_number
	if ( loginDisplay.value == cashier_number) {		
		keyboardPassword.classList.add('change');	
		
		cashierElem.textContent = `CASHIER ${cashier_number}`;

		
		worldRight_btnContainer.style.display="grid"
		// 🍉js1025. 
		page1DiscountBtn.style.display =`block`; 
		page1CancelBtn.style.display =`block`; 
		logoutBtn.style.display=`block`;
		
	} 

	//cashier_number20 - hide 'discount'btn, 'Cancel transaction'btn
	else if ( loginDisplay.value == cashier_number20) {		
		keyboardPassword.classList.add('change');	
		
		cashierElem.textContent = `CASHIER ${cashier_number20}`;
		
		worldRight_btnContainer.style.display="grid"
		// 🍉js1025. "item discount"btn, "cancle transaction" : display:none 	
		page1DiscountBtn.style.display =`none`; 
		page1CancelBtn.style.display =`none`; 
		logoutBtn.style.display=`none`;

	} else {	
		console.log(`wrong number`)
		loginDisplay.value = "";
	}
});

// 🍀js1002. close - keyboard-password 
closeKey.addEventListener('click',()=>{
	keyboardPassword.classList.remove('change');
	keyboardLogin.classList.remove('change');
});


//🍀Enter - keyboard-password 
enterKey.addEventListener('click',()=>{	
	if (keyboardDisplay.value == password) {
		keyboardPassword.classList.remove('change');
		keyboardLogin.classList.remove('change');

		
		scannerInput.style.display =`block`; 
		scannerInput.focus();
	}
	// if(keyboardDisplay.value !== password)
	else {
		keyboardPassword.classList.remove('change');
		keyboardLogin.classList.remove('change');
		cashierElem.textContent = `CASHIER 0000`;
		
		worldRight_btnContainer.style.display = `none`;
		scannerInput.style.display =`none`;  

	
	}	
});


// 🍀 open - Keyboard-discount  👉script.js, 🍉js1011-30.

// 🍀js1011. close - Keyboard-discount
discountCloseKey.addEventListener('click',()=>{
	keyboardDiscount.classList.remove('change');
});

// 🍀 Enter - Keyboard-discount  👉script.js, 🍉js1011-30.

//🍀login-keyboard - event bubbling

keyboardLogin.addEventListener('click',(e)=>{
	
	console.log(loginDisplay.value);

	if (e.target.classList.contains('key_1')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'1';
	}
	if (e.target.classList.contains('key_2')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'2';
	}
	if (e.target.classList.contains('key_3')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'3';
	}
	if (e.target.classList.contains('key_4')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'4';
	}
	if (e.target.classList.contains('key_5')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'5';
	}
	if (e.target.classList.contains('key_6')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'6';
	}
	if (e.target.classList.contains('key_7')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'7';
	}
	if (e.target.classList.contains('key_8')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'8';
	}
	if (e.target.classList.contains('key_9')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'9';
	}
	if (e.target.classList.contains('key_0')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'0';
	}
});


// 🍀js1002.keyboard-password 

keyboardPassword.addEventListener('click',(e)=>{
	
	console.log(keyboardDisplay.value);

	if (e.target.classList.contains('keyboard_1')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'1';
	}
	if (e.target.classList.contains('keyboard_2')) {		
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'2';
	}
	if (e.target.classList.contains('keyboard_3')) {		
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'3';
	}
	if (e.target.classList.contains('keyboard_4')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'4';
	}
	if (e.target.classList.contains('keyboard_5')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'5';
	}
	if (e.target.classList.contains('keyboard_6')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'6';
	}
	if (e.target.classList.contains('keyboard_7')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'7';
	}
	if (e.target.classList.contains('keyboard_8')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'8';
	}
	if (e.target.classList.contains('keyboard_9')) {
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'9';
	}
	if (e.target.classList.contains('keyboard_0')) {		
		let valu = keyboardDisplay.value;
		keyboardDisplay.value=valu+'0';
	}
});


// 🍉Don't need these function for now

// //BackSpace
// function funcDel() {
// 	let valu = keyboardDisplay.innerHTML;
// 	let x = keyboardDisplay.innerHTML.length;
// 	let y = 1;
// 	/* z = length in input - 1 */
// 	let z = x-y;
// 	keyboardDisplay.innerHTML=valu.slice(0,z);
// }


// //Clear
// function funcClear() {
// 	let valu = keyboardDisplay.innerHTML='';
// 	FcapsLock = '0';
//     Fshift = '0';
// }




//🍀login-keyboard - event bubbling

keyboardDiscount.addEventListener('click',(e)=>{	


	    
	// discountDisplay.value = "";

	if (e.target.classList.contains('key_1')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'1';
	}
	if (e.target.classList.contains('key_2')) {		
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'2';
	}
	if (e.target.classList.contains('key_3')) {		
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'3';
	}
	if (e.target.classList.contains('key_4')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'4';
	}
	if (e.target.classList.contains('key_5')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'5';
	}
	if (e.target.classList.contains('key_6')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'6';
	}
	if (e.target.classList.contains('key_7')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'7';
	}
	if (e.target.classList.contains('key_8')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'8';
	}
	if (e.target.classList.contains('key_9')) {
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'9';
	}
	if (e.target.classList.contains('key_0')) {		
		let valu = discountDisplay.value;
		discountDisplay.value=valu+'0'; 
	}
});



// 🍀 open - Keyboard-code  

page1Code.addEventListener('click',()=>{
	keyboardCode.classList.add('change');	
	CodeDisplay.value = "";	
});

// 🍀js1031. Keyboard-code : close
CodeCloseKey.addEventListener('click',()=>{
	keyboardCode.classList.remove('change');
});

// 🍀Keyboard-code : Enter

CodeEnterKey.addEventListener('click',()=>{

	if (CodeDisplay.value == dataNumber0) {
        scanner(dataNumber0,dataName0,dataPrice0);

    }else if (CodeDisplay.value == dataNumber1) {
        scanner(dataNumber1,dataName1,dataPrice1);

    }else if (CodeDisplay.value == dataNumber2) {
        scanner(dataNumber2,dataName2,dataPrice2);
    }else{
        return;
    }  

	keyboardCode.classList.remove('change');
	
    scannerInput.focus();

});



//🍀login-keyboard - event bubbling

keyboardCode.addEventListener('click',(e)=>{
	
	console.log(CodeDisplay.value);

	if (e.target.classList.contains('key_1')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'1';
	}
	if (e.target.classList.contains('key_2')) {		
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'2';
	}
	if (e.target.classList.contains('key_3')) {		
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'3';
	}
	if (e.target.classList.contains('key_4')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'4';
	}
	if (e.target.classList.contains('key_5')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'5';
	}
	if (e.target.classList.contains('key_6')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'6';
	}
	if (e.target.classList.contains('key_7')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'7';
	}
	if (e.target.classList.contains('key_8')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'8';
	}
	if (e.target.classList.contains('key_9')) {
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'9';
	}
	if (e.target.classList.contains('key_0')) {		
		let valu = CodeDisplay.value;
		CodeDisplay.value=valu+'0';
	}
});

