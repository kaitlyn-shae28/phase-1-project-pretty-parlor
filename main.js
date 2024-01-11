document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/appointments')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const typeDropdown = document.querySelector('#select-type');
      typeDropdown.addEventListener('change', (event) => {
        const category = event.target.value;
        filterCategory(category, data);
      });

      const buttons = document.querySelectorAll('.btn');
    })
    .catch(error => {
      console.error(error);
    });
});

const row = document.querySelector('.row');

function clearAppointments() {
  row.innerHTML = '';
  row.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
      alert("Appointment Booked!");
    }
  });
}

function filterCategory(category, data) {
  clearAppointments();
  const appointments = Array.from(data);
  const filteredAppointments = appointments.filter(appointment => appointment.category === category);
  console.log(filteredAppointments);

  filteredAppointments.forEach(appointment => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card" id=${appointment.category} style="width: 18rem; height: 100% ">
        <img src=${appointment.image}/>  
        <div class="card-body">
          <h4><b>${appointment.name}</b></h4>
          <p>Starting at ${appointment.price}</p>
          <button class="btn">Book Appointment!</button>
        </div>
      </div>
    `;
    row.innerHTML += div.innerHTML;
  });
};