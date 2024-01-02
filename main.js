const bookButtons = document.getElementById('appointment-button')

document.addEventListener('DOMContentLoaded', () => {
    const typeDropdown = document.querySelector('#select-type');
    typeDropdown.addEventListener('change', (event) => {
    const selectedType = event.target.value;
    filterTypes(selectedType);
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

// bookButtons.map(bookButton => {
//     bookButtons.addEventListener('click', () => {
//         alert('Appointment Booked!');
//     })
// })

// NEED TO MAKE ALL BUTTONS POP UP!!!!