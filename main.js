class accountMaker {
    constructor (_number, _pin, _balance) {
      this.number = _number
      this.pin = _pin
      this.balance = _balance
      this.pinTries = 3
    }
}

let accounts = [new accountMaker(12345678, 1234, 1000), new accountMaker(87654321, 4321, 100000) ]
console.log(accounts)

const giveMeCash = (accountNo, pin, cashAmount) => {   
  
  const inputAccount = () => {
    if (checkAccount()) {
      inputPin();
    }
    else {
      let choice = prompt("Error: Please enter a valid account number\n\nTry again? (Y/N)")
      if (choice == "y") {
        inputAccount()
      }
      else {
        alert("Goodbye!")
      }
    }};  
    
  const inputPin = () => {
    if (checkPin()) {
      accounts[accountKey].pinTries = 3;
      options();
    } 
    else {
      if (accounts[accountKey].pinTries > 0) {
        alert(`You have entered an incorrect pin, please try again. you have ${accounts[accountKey].pinTries} attempts remaining`);
        accounts[accountKey].pinTries--;
        inputPin();
      }
      else {
        alert("Goodbye!");
      }

    }
  };
  
  const options = () => {
    var choice = parseInt(prompt("Please select one of the following options:\n1 - Check Balance\n2 - Withdraw Cash\n3 - Change Pin\n4 - Exit"), 10);
    switch (choice) {
      case 1:
        showBalance();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        changePin();
        break;
      case 4:
        alert("Goodbye!");
        break;
      default:
        alert("Error: please choose a valid option")
        options();
        break;
    }
  };

  const checkAccount = () => {
    accountNo = parseInt(prompt("Please enter your account number"), 10);
    for (i=0; i<accounts.length; i++) {
      if(accounts[i].number === accountNo){
        accountKey = i
        return true;
      }
    }
  };
    
  let accountKey = -1;

  const checkPin = () => {
    var pinCh = parseInt(prompt("Please enter your PIN"), 10);
    return pinCh === accounts[accountKey].pin;
  };
  
  const checkBalance = (cashAmount) => {
    return cashAmount <= accounts[accountKey].balance;
  };
  
  const showBalance = () => {
    alert(`Your balance is £${accounts[accountKey].balance}`)
    exitQuestion();
    };

  const changePin = () => {
    pin = parseInt(prompt("Please enter your new pin"), 10);
    accounts[accountKey].pin = pin;
    alert("Pin changed, please log in again.");
    inputPin();
  };
  
  const withdraw = () =>{
    cashAmount = parseInt(prompt('How much do you wish to withdraw?'), 10);
    if (checkBalance(cashAmount)) {
      alert(`Sure, here is your £${cashAmount}`);
      accounts[accountKey].balance -= cashAmount;
      exitQuestion();
    }
    else {
      alert(`Insufficient funds available, your balance is £${accounts[accountKey].balance}`);
      exitQuestion();
    }
  };
  
  const exitQuestion = () => {
    var choice = prompt("Do you require any further services? (Y/N)")
    if (choice == "y") {
      options();
    }
    else {
      alert("Goodbye!");
    }
  };
  
  inputAccount();
  
};

// document.getElementById("button1").onclick = giveMeCash();