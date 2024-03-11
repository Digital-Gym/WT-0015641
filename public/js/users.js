document.addEventListener("DOMContentLoaded", function () {
    const goalsList = document.getElementById('goalsList');

    fetchGoals();

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('editBtn')) {
            const goal = event.target.dataset;
            editGoal(goal);
        }

        if (event.target.classList.contains('deleteBtn')) {
            const goalId = event.target.dataset.id;
            deleteGoal(goalId);
        }

        if (event.target.classList.contains('send-data')) {
            updateGoal(event);
        }

    });

    function fetchGoals() {
        // fetch data
        fetch('/api/cards') 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(goals => {
                goals.forEach(goal => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="first">
                            <p>${goal.id}</p>
                            <h3>${goal.name}</h3>
                        </div>
                        <div>
                            <p class="price">${goal.price}$</p>
                            <span>
                                <button type="button" class="editBtn" data-id="${goal.id}" data-name="${goal.name}" data-price="${goal.price}">Edit</button>
                                <button type="button" class="deleteBtn" data-id="${goal.id}">Delete</button>
                            </span>
                        </div>
                    `;
                    goalsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching goals:', error));
    }

    // presudo global vars 
    var currentEditingId = null;
    const editOverlay = document.getElementById('editOverlay');
    const editNameInput = document.getElementById('editName');
    const editPriceInput = document.getElementById('editPrice');
    
    
    // shows the edit layout (start point)
    function editGoal(goal) {
        currentEditingId = goal.id;
        console.log(`Edit button clicked for goal with ID ${goal.id}`);
    
        editOverlay.style.display = "block";
        editNameInput.value = goal.name;
        editPriceInput.value = goal.price;
    }
    
    // handles save event
    function updateGoal(event) {
        event.preventDefault();
        const newName = editNameInput.value;
        const newPrice = editPriceInput.value;
    
        // just in case we need to check that
        if (currentEditingId) {
        
          // sending put request
          fetch(`users/api/cards/${currentEditingId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName, price: newPrice }),
          })
            .then(response => response.json())
            .then(updatedGoal => {
              // refresh data on page
              console.log(updatedGoal);
              const goalElement = document.querySelector(`.editBtn[data-id="${currentEditingId}"]`).closest('li');
              goalElement.querySelector('h3').textContent = updatedGoal.name;
              goalElement.querySelector('.price').textContent = `${updatedGoal.price}$`;
            })
            .catch(error => console.error('Error updating goal:', error));
        }
    }
    

    function deleteGoal(goalId) {
        console.log(`Delete button clicked for goal with ID ${goalId}`);
    }
});
