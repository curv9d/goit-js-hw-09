let formData = {
  email: "",
  message: ""
};

function saveFormData() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateForm() {
  const form = document.querySelector('.feedback-form');
  form.email.value = formData.email;
  form.message.value = formData.message;
}

document.addEventListener('DOMContentLoaded', function() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    formData = JSON.parse(savedData);
    populateForm();
  }
});

document.querySelector('.feedback-form').addEventListener('input', function(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  saveFormData();
});

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    event.preventDefault();
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    event.preventDefault();
    document.querySelector('.feedback-form').reset();
  }
});