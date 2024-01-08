const bookButtons = document.getElementById('appointment-button')

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json');
        .then(response => response.json());
    const typeDropdown = document.querySelector('#select-type');
    typeDropdown.addEventListener('change', (event) => {
    const category = event.target.value;
    filterCategory(category);
  });
});

const row = document.querySelector('.row')
function filterCategory(category) {
    const a = arr.filter(el => el.category === category);
    console.log(a);

    a.map(element => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card" id=${element.category} style="width: 18rem; height: 100% ">
                        <img src= ${element.image}   
                        <div class="card-body">
                            <h4><b>${element.name}</b></h4>
                            <p>Starting at ${element.price}</p>
                            <button class="btn">Book Appointment!</button>
                        </div>
                    </div>
                            `
         row.innerHTML = div;
    });

};

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Appointment Booked!");
  });
});

