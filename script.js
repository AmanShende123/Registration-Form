function data() {
  var A = document.getElementById("Name").value;
  var B = document.getElementById("Email").value;
  var C = document.getElementById("ph-number").value;
  var D = document.getElementById("password").value;
  var E = document.getElementById("Cfpassword").value;

  if (A == "" || B == "" || C == "" || D == "" || E == "") {
    alert("All Fields are mandatory.");
    return false;
  } else if (A.length < 5) {
    alert("Name should be more than 5 characters");
    return false;
  } else if (!B.includes("@")) {
    alert('Please enter a valid email address with "@" character.');
    return;
  } else if (C.length < 10 || C.length > 10 || C === 123456789) {
    alert(
      "Phone Number should not be 123456789 and must be a 10-digit number. ."
    );
    return false;
  } else if (D != E) {
    alert("Password and confirm password should be same.");
    return false;
  } else {
    alert("Registration Successfull.");
  }
}
