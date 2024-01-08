const bookButtons = document.getElementById('appointment-button')

document.addEventListener('DOMContentLoaded', () => {
    const typeDropdown = document.querySelector('#select-type');
    typeDropdown.addEventListener('change', (event) => {
    const selectedType = event.target.value;
    filterTypes(selectedType);
    const buttons = document.querySelectorAll(".btn");
  });
});

function filterCategory(selectedCategory) {
    const a = arr.filter(el => el.Category === category);
    console.log(a);

    a.map(element => {
        const div = document.createElement('div')
        div.className = 'col-lg-4 col-md-4 col-sm-6 col-12 p-3'
        div.innerHTML = `
                    <div class="card" style="width: 18rem; height: 100% ">
                            <div class="card-body">
                          <h5 class="card-title">${element.Name}</h5>
                           <p class="card-text">${element.Category}</p>
                            </div>
                    </div>
                            `
        row.appendChild(div)
    });

}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Appointment Booked!");
  });
});

