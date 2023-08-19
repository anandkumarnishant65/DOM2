function store(){ //stores items in the localStorage
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phn').value;
  var key = document.getElementById('key').value;

  const deatails = {
      name: name,
      phone: phone,
      key: key
  }

  window.localStorage.setItem(key,JSON.stringify(deatails));  
  //converting object to string
}


window.onload =function(){ //ensures the page is loaded before functions are executed.
  document.getElementById("detailsForm").onsubmit = store
}