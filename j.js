function store(){ //stores items in the localStorage
  var name = document.getElementById('name').value;
  var phoneNumber = document.getElementById('phn').value;
  var key = document.getElementById('key').value;

  const deatails = {
      name: name,
      phoneNumber: phoneNumber,
  }

  window.localStorage.setItem(key,JSON.stringify(deatails));  
  //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
  var key = document.getElementById('name').value; //gets key from user
  console.log("retrive records");
  var records = windows.localStorage.getItem(key); //searches for the key in localStorage
  var paragraph = document.createElement("");
  var infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
  document.getElementById("detailsForm").onsubmit = store
  document.getElementById("clearButton").onclick = clearStorage
  document.getElementById("removeButton").onclick = removeItem
}