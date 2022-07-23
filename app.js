//Elements
const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".income-total");
const outcomeTotalE1 = document.querySelector(".outcome-total");
const chartE1 = document.querySelector(".chart");
const expenseE1 = document.querySelector("#expense");
const incomeE1 = document.querySelector("#income");
const allE1 = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

//Buttons
const expenseBtn = docuemt.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//Input Btns
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const addExpense = document.querySelector(".add-expense");
const ExpenseTitle = document.getElementById("expense-title-input");
const ExpenseAmount = document.getElementById("expense-amount-input");

//Variables
let ENTRY_LIST = [];

//eventListeners
expenseBtn.addEventListener('click', function(){
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseE1);
    hide([incomeE1, allE1]);
});
incomeBtn.addEventListener('click', function(){
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeE1);
    hide([ExpenseE1, allE1]);
});
allBtn.addEventListener('click', function(){
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
    show(allE1);
    hide([expenseE1, incomeE1]);
});

addIncome.addEventListener("click", function(){
    if(!incomeTitle.value || !incomeAmount.value) return;
    
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: parseFloat( incomeAmount.value),
    }
    ENTRY_LIST.push(income);

    updateUI();
    clearInput([incomeTitle, incomeAmount]);

    });

addExpense.addEventListener("click", function(){
    if(!incomeTitle.value || !incomeAmount.value) return;
    
    let income = {
        type: "expense",
        title: ExpenseTitle.value,
        amount: parseFloat( ExpenseAmount.value),
    }
    ENTRY_LIST.push(expense);
    
    updateUI();
    clearInput([expenseTitle, expenseAmount]);

    });

//Functions
function active( element ){
    element.classList.add("active");
}

function show( element ){
    element.classList.remove("hide")
}

function hide( elementsArray ){
    elementsArray.foreach( element => {
        element.classList.add("hide");
    });
}

function inactive( elementsArray ){
    elementsArray.foreach( element => {
        element.classList.add("active");
    });
}

function clearInput( inputsArray ) {
    inputsArray.foreach(input => {
        input.value = "";
        });
}

function calculateTotal(type, ENTRY_LIST){
    let sum = 0;
    ENTRY_LIST.forEach( entry => {
        if(entry.type == type ){
            sum += entry.amount;
        }
    });
} 

function calculateBalance(income, outcome){
    return income - outcome;
}

function updateUI(){
    
}

