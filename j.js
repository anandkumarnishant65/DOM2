var AddForm = document.getElementById("addForm");

AddForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var name = document.getElementById("name");
  var email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value} and email of ${email.value}`
    );

    name.value = "";
    email.value = "";
  }
  
});
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
}