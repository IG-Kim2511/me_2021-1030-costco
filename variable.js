
// 🍀let

// 🍚 (hard-coding) (it's supposed to change with server data)

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

// js1004 price calc
let grandTaxPriceElem = document.querySelector('.grand_tax-price');

let taxSum;

let grandTotalElem =  document.querySelector('.grand_total');
grandTotalElem = 0;
let grandTotalPriceElem =  document.querySelector('.grand_totla-price');

let transNum = document.querySelector('.world-left .transNum');
let n = transNum.textContent;
let n_num = parseInt(n);

//  js1005
let removeBtn = document.querySelector(".remove_btn");

// 🍀const     

const tableParent = document.querySelector('.table-parent');
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



// 🍀keyboard - const
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
const cashier_number =  88;
const cashier_number20 = 99;
const password = 00;









