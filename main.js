const bookButtons = document.getElementById('appointment-button')

document.addEventListener('DOMContentLoaded', () => {
    const typeDropdown = document.querySelector('#select-type');
    typeDropdown.addEventListener('change', (event) => {
    const selectedType = event.target.value;
    filterTypes(selectedType);
    const buttons = document.querySelectorAll(".btn");
  });
});

function filterTypes(selectedType) {
    const appointmentTypes = document.querySelector('.card');
      
    appointmentTypes.forEach((appointmentType) => {
        var getIds = document.getElementById(selectedType.value)
        if (appointmentType.id === getIds) {
           appointmentTypes.style.display = 'block';
        } else {
              appointmentTypes.style.display = 'none';
        }
    });
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Appointment Booked!");
  });
});

