"use strict";

/* 
🍀 section  
 -> 🍉 small section 
🍚 : next plan
🍄 : code explain
🍖 js-6 :connect

🍄Algorithm)  

🍖 :connect
😈 bug

(🍤 delete later) : delete later
🍤 (hard-coding) (soft-coding)
🍤 way-1 way-2 way-3
🍤 :  Tip,
*/


/*🍚next plan
html: class name change, page1-10 --> page1-remove
CSS : clear and organize , var(--color)
*/

// 🍀let

// 🌊 (hard-coding) (it's supposed to change with server data)

let dataNumber0 = selfcheckitem[0].number;
let dataName0 = selfcheckitem[0].name;
let dataPrice0 = selfcheckitem[0].price;

let dataNumber1 = selfcheckitem[1].number;
let dataName1 = selfcheckitem[1].name;
let dataPrice1 = selfcheckitem[1].price;

let dataNumber2 = selfcheckitem[2].number;
let dataName2 = selfcheckitem[2].name;
let dataPrice2 = selfcheckitem[2].price;

// js1025. discount

let discountTitle;

let discountTitleAll;
let discountSetAll;
let discountAmountAll;
let discountedPriceAll;

// js1025 discount-price calc
let discount_percent;
let discountedSet;
let discounted_itemprice;

let itemPrice;
let itemPriceNum;

// js1004
let grandTaxPriceElem = document.querySelector('.grand_tax-price');

let taxSum;

let grandTotalElem =  document.querySelector('.grand_total');
grandTotalElem = 0;
let grandTotalPriceElem =  document.querySelector('.grand_totla-price');

//  js1005
let removeBtn = document.querySelector(".remove_btn");

// 🍀const     

const tableWrap = document.querySelector('.world-left .table-wrap');
const check = document.querySelector(".world-left .check");
const scannerInput = document.querySelector('.scanner-input');
const clickRight = document.querySelector('.click-right');

const page1Elem = document.querySelector('.page1');
const worldRight_btnContainer = document.querySelector(".world-right .btn-container");
const removeItemBtn = document.querySelector('.page1 .remove_item');
const page1DiscountBtn = document.querySelector('.page1 .discount');

const page1CancelBtn = document.querySelector('.page1 .cancel');
const page1FinishBtn = document.querySelector('.page1 .finish');

const page1_10Elem = document.querySelector('.page1-10');
const page1_10ContinueBtn = document.querySelector('.page1-10 .continue');

const page1_discount_Elem = document.querySelector('.page1-discount');
const page1_discount_ContinueBtn = document.querySelector('.page1-discount .continue');

/* 
item_discount-dollar
item_discount-percent

trans_discount-dollar
trans_discount-percent
*/
const item_discountPercent = document.querySelector('.page1-discount .item_discount-percent');

const page2Elem = document.querySelector('.page2');
const page2ReturnBtn = document.querySelector('.page2 .return');
const page2CreditBtn = document.querySelector('.page2 .credit');
const page2DebitBtn = document.querySelector('.page2 .debit');

const page3Elem = document.querySelector('.page3');
const page3CancelBtn = document.querySelector('.page3 .cancel');

// request-help
const help1 = document.querySelector('.page1 .help');
const help2 = document.querySelector('.page2 .help');
const help3 = document.querySelector('.page3 .help');

const ballonParent = document.querySelector('.ballon-parent');
const ballonParent2 = document.querySelector('.ballon-parent2');
const ballonParent3 = document.querySelector('.ballon-parent3');

const helpCloseBtn = document.querySelector('.ballon-parent .help_close');
const helpCloseBtn2 = document.querySelector('.ballon-parent2 .help_close');
const helpCloseBtn3 = document.querySelector('.ballon-parent3 .help_close');
//🍀server - mySQL

// 🍀event

// 🍀js10 
//🍀js1006. transNumHandler, changing number of 'transNum'

let transNum = document.querySelector('.world-left .transNum');
let n = transNum.textContent;
let n_num = parseInt(n);

page1FinishBtn.addEventListener('click',()=>{
    page2Elem.classList.add('change');
  
    /* (📌hide it for now)
        if (grandTotalPriceElem.textContent > 0) {        
            transNumHandler();        
        }
    */
});

page1CancelBtn.addEventListener('click',()=>{

    if (grandTotalPriceElem.textContent > 0) {        
        transNumHandler();        
    }     

    let itemsImg = document.querySelectorAll('.items-img');
    for (let i = 0; i < itemsImg.length; i++) {       
        itemsImg[i].parentNode.remove();
    }

    grandTaxPriceElem.innerHTML = '0';
    grandTotalPriceElem.innerHTML = '0';

    scannerInput.focus();
});

function transNumHandler() {
    /*   
        (🍉original way) , 1 10 100 9999
        n_num++;
        transNum.innerHTML=`${n_num}`;   

        if (n_num >= 9999 ) {
            n_num = 0;        
        }  
    */

    //🍉way2. trans-number++; , 0001 0010 0100 9999

    n_num++;

    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }

    transNum.innerHTML=`${(n_num).pad(4)}`;

    if (n_num >= 9999 ) {
        n_num = 0;        
    }  
}

page2CreditBtn.addEventListener('click',()=>{
    page3Elem.classList.add('change');
});

page2DebitBtn.addEventListener('click',()=>{
    page3Elem.classList.add('change');
});

page2ReturnBtn.addEventListener('click',()=>{
    page2Elem.classList.remove('change');    
});

page3CancelBtn.addEventListener('click',()=>{   
    page3Elem.classList.remove('change');
});


// 🍀js0928-20. load. when the browser start, focus on scan-input
window.addEventListener('DOMContentLoaded',()=>{    

    // keyboardLogin

    // 🍉real code
    keyboardLogin.classList.add('change');	
	loginDisplay.value = "";
	keyboardDisplay.value = "";    
    scannerInput.style.display =`none`;  


    // // 🍉test
    // scannerInput.focus();

});


//🍀js0928.putting number into scaner-input from scanner machine.
//🍀js0930, JSON
console.log(selfcheckitem)
console.log( selfcheckitem[0].number) 

console.log(dataName2)

scannerInput.addEventListener('change',()=>{

    if (scannerInput.value == dataNumber0) {
        scanner(dataNumber0,dataName0,dataPrice0);

    }else if (scannerInput.value == dataNumber1) {
        scanner(dataNumber1,dataName1,dataPrice1);

    }else if (scannerInput.value == dataNumber2) {
        scanner(dataNumber2,dataName2,dataPrice2);
    }else{
        return;
    }  

    scannerInput.value="";
    scannerInput.focus();
}); 




// 🍀js0928 , 1025
// scanner(dataNumber0,dataName0,dataPrice0);
function scanner(p_dataNumber,p_dataName,p_dataPrice) {
    let tr= document.createElement('tr');
    tr.className = "tbody_items";
    tr.innerHTML=`        
    <td class="tbody_items_td items-img"></td>
    <td class="tbody_items_td items-number">${p_dataNumber} <p class="discount_p discount_title"></p></td>
    <td class="tbody_items_td">${p_dataName} <p class="discount_p discount_set"></p> </td>  
    <td class+"tbody_items_td">1 <p class="discount_p discount_amount"></p></td>
    <td class="tbody_items_td items-price">${p_dataPrice} <p class="discount_p discounted_price"></p></td>
    `;
    check.append(tr);    
    
    // 🍀js1004
    grandTotal(p_dataPrice);   
}


// 🍀js1004, total-price , grandTotal, taxSum , round down number 2 decimal
function grandTotal(p_dataPrice) {
    
    // 🍉total-price , grandTotal, taxSum
    let priceNumber = Number(p_dataPrice);
    grandTotalElem += priceNumber;    
    taxSum = grandTotalElem *0.06;

    // 🍉round down number 2 decimal

    // 🍉tax-sum
    // grandTaxPriceElem.innerHTML = (Math.floor(taxSum* 100) / 100);
    grandTaxPriceElem.innerHTML = parseFloat(taxSum).toFixed(2);  

    // 🍉price-sum
    // grandTotalPriceElem.innerHTML = (Math.floor(grandTotalElem* 100) / 100);
    
    //🍉total price + tax
    grandTotalPriceElem.innerHTML = parseFloat(taxSum + grandTotalElem).toFixed(2);     
    
}


// 🍀js1005-40. grandTotal-Subtract

// if (scannerInput.value == dataNumber0) {
//     scanner(dataNumber0,dataName0,dataPrice0);

function grandTotalSubtract(p_priceChange) {
    
    let priceNumber = Number(p_priceChange);

    grandTotalElem -= priceNumber;
    
    taxSum = grandTotalElem *0.06;

    // 🍉total price, tax, whole-price
    //floor, round down number 2 decimal

    // tax-sum
    // grandTaxPriceElem.innerHTML = (Math.floor(taxSum* 100) / 100);
    grandTaxPriceElem.innerHTML = parseFloat(taxSum).toFixed(2);  

    // price-sum
    // grandTotalPriceElem.innerHTML = (Math.floor(grandTotalElem* 100) / 100);
    
    //total price + tax
    grandTotalPriceElem.innerHTML =parseFloat(taxSum + grandTotalElem).toFixed(2);  `grandTotalPriceElem ${grandTotalPriceElem}`
}

// 🍀js1025. log-out

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener('click',()=>{

    // keyboard bring up

    keyboardLogin.classList.add('change');	
	loginDisplay.value = "";
	keyboardDisplay.value = "";


    // cancel transaction
    
    if (grandTotalPriceElem.textContent > 0) {        
        transNumHandler();        
    }     

    let itemsImg = document.querySelectorAll('.items-img');
    for (let i = 0; i < itemsImg.length; i++) {       
        itemsImg[i].parentNode.remove();
    }

    grandTaxPriceElem.innerHTML = '0';
    grandTotalPriceElem.innerHTML = '0';

    scannerInput.focus();

});


// 🍀js1005. page1-remove btn click, move into remove page...etc

const tableParent = document.querySelector('.table-parent');

removeItemBtn.addEventListener('click',()=>{
    if (grandTotalPriceElem.textContent > 0) {        
        scannerInput.style.display =`none`;  
        tableParent.setAttribute('style','pointer-events: auto;');
        
        removeImgHandler();      
    }
}); 

function removeImgHandler() {
    page1_10Elem.classList.add('change');

    let itemsImg = document.querySelectorAll('.items-img');
    
    for (let i = 0; i < itemsImg.length; i++) {
        itemsImg[i].innerHTML=`
      <img src="./img/remove.png" alt="" class="remove_img_btn">    
      `;            
    }
}

// 🍀js1005-30. remove item , subtract the price

tableWrap.addEventListener('click',(e)=>{
    if (e.target.classList.contains('remove_img_btn')) {
        e.target.parentNode.parentNode.remove();

        /* subtract the price that i removed.        
        10. get value from item-price
        20 send the price to grand_total_subtract function           
        */

        let priceChange = e.target.parentNode.parentNode.children[4].textContent;

        grandTotalSubtract(priceChange);/* js1005-40 */
    }
});

// 🍀js1005-50. page1_10, continue Scanning

page1_10ContinueBtn.addEventListener('click',()=>{
    page1_10Elem.classList.remove('change');
    tableParent.setAttribute('style','pointer-events: none;');
    
    scannerInput.style.display =`block`;  
    scannerInput.focus();

    // 🍉delete remove.png
    let itemsImg = document.querySelectorAll('.items-img');
    
    for (let i = 0; i < itemsImg.length; i++) {
        itemsImg[i].innerHTML=``;      
    }
});


/* 
🍄js 1025 Algorithm

10. page1discount btn click, create the 'discount , ~~%, ~~$' line under the eacth items 

10-20. put background color on first item.

20 when click items line, discount-keyboard show up.

30 put the number from keyboard into item on table 

40 change ~~%, ~~$,   total ~~~$ 🌊

50, when we click 10%,20%....discount btn from right, the numbers are supposed to go into ~~% input 🌊

60. page1DiscountContinueBtn, back to page1, 

60-20 focus to scanner

60-30 make the discounted line stay on table. no-reset
*/


//  🍀js1007. page1DiscountBtn click,


page1DiscountBtn.addEventListener('click',(e)=>{    
    
    discountTitle = tableWrap.querySelector('.discount_title');
    console.log(discountTitle)
    console.log(discountTitle.childNodes)


    if (grandTotalPriceElem.textContent > 0) {        
        tableParent.setAttribute('style','pointer-events: auto;');
        scannerInput.style.display =`none`;          
        page1_discount_Elem.classList.add('change');

        clickRight.setAttribute('style','display:block');

        page1DiscountHandler(e); 
    }
}); 



// 🍀js1026. stay the discount page when there are numbers already on table  🌊


//🍀js1007, 🍀js1025. Discount line created under the each items

function page1DiscountHandler(e) {   
    console.log(e)
    e.preventDefault();   

     // 🍉1025-30 selected tr : puttiong the background color   
    //🍉1025-30  putting the Discount line when I click the tr ~ td 🌊

    tableWrap.addEventListener("click",(e)=>{
        
        const selected = document.querySelector(".tbody_items.selected");

        
        clickRight.setAttribute('style','display:none');


        if (selected != null) {
            selected.classList.remove("selected");                   
            keyboardDiscount.classList.remove('change');      
        }

        else if (e.target.classList.contains("discount_p")) {            
        e.target.parentNode.parentNode.classList.add("selected");
        }
        
        e.target.parentNode.classList.add("selected");
        console.log(e.target)        


        // 🍉js1025-30. Discount line create🌊
        // tr = e.target.parentnode

        console.log(e.target.parentNode)
        console.log(e.target.parentNode.children[1])

        // e.target.parentNode.children[1].children[0].innerHTML=`Discount <span class="discount_span" >0</span> %`; 
        // e.target.parentNode.children[2].children[0].innerHTML=`&nbsp;`;  
        // e.target.parentNode.children[3].children[0].innerHTML=`&nbsp;`;  
        // e.target.parentNode.children[4].children[0].innerHTML=`&nbsp;`;  


        // keyboard        
        keyboardDiscount.classList.add('change');         
        
             
        // 🍉1025-20.            
        discount_num_putting(e)
    });
    
    // 🌊putting BG , when click the input 
}



// 🍉js1025-30. (create Discount line when click the line and function)

function discount_num_putting(e) {

    console.log(e.target)
    discount_percent =  e.target.parentNode.children[1].children[0];
    console.log(discount_percent)
    
    // 🌊putting keyboard-discount number into e.target

        discountedSet = e.target.parentNode.children[2].children[0];

        discounted_itemprice = e.target.parentNode.children[4].children[0];
        console.log(discounted_itemprice)

        itemPrice = e.target.parentNode.children[4].textContent          
        itemPriceNum = parseFloat(itemPrice).toFixed(2);      
        
        console.log(itemPrice)
    
    
    // 🍉js1011-30. Enter- keyboard-discount number 
        discountEnterKey.addEventListener('click',()=>{

            // 🍉put the discount number(%) from keyboard display into the table  
            
            discount_percent.innerHTML= `Discount <span class="discount_span" >${discountDisplay.value}</span> %`;          

            console.log(discount_percent.textContent)

            discountedSet.innerHTML = "$" + parseFloat(itemPriceNum * discountDisplay.value /100).toFixed(2);  

            discounted_itemprice.innerHTML = parseFloat( itemPriceNum - (itemPriceNum* discountDisplay.value /100)).toFixed(2);;    

            keyboardDiscount.classList.remove('change');            
        }        
    ); 

    discountDisplay.value = "";
    
}



//🍀js1007-70. page1DiscountContinueBtn, back to page1, focus to scanner

page1_discount_ContinueBtn.addEventListener('click',()=>{
    
    clickRight.setAttribute('style','display:none');
    tableParent.setAttribute('style','pointer-events: none;');

    keyboardDiscount.classList.remove('change');

    page1_discount_ContinueBtn.classList.remove('change');
    scannerInput.focus();

    // 🍉delete remove.png
    let itemsImg = document.querySelectorAll('.items-img');
    
    for (let i = 0; i < itemsImg.length; i++) {
        itemsImg[i].innerHTML=``;      
    }
});


// 🍀js1007. page1-Discount, continue Scanning

page1_discount_ContinueBtn.addEventListener('click',()=>{
    page1_discount_Elem.classList.remove('change');

    scannerInput.style.display =`block`;  
    scannerInput.focus();


    /* 🍚kei-now */
});




// 🍀js1031 request help




help1.addEventListener('click',()=>{
    ballonParent.setAttribute('style', 'display: block;');
});

help2.addEventListener('click',()=>{
    ballonParent2.setAttribute('style', 'display: block;');
});

help3.addEventListener('click',()=>{
    ballonParent3.setAttribute('style', 'display: block;');
});

helpCloseBtn.addEventListener('click',()=>{
    ballonParent.setAttribute('style', 'display: none;');
});
helpCloseBtn2.addEventListener('click',()=>{
    ballonParent2.setAttribute('style', 'display: none;');
});
helpCloseBtn3.addEventListener('click',()=>{
    ballonParent3.setAttribute('style', 'display: none;');
});

console.log(help2)
console.log(help3)





















/* (📌hide it for now) 🍀js1006. start menu 
const worldStart = document.querySelectorAll('.world-start');
const worldStartBtn = document.querySelector('.world-start-btn'); 

const trans = document.querySelector('.trans');

let transNum = document.querySelector('.transNum');
let n = 0;

worldStartBtn.addEventListener('click',()=>{
    worldStartBtn.parentNode.classList.add('change');

    n++;
    transNum.innerHTML=`${n}`;   
}); */

