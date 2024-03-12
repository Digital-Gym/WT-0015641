document.addEventListener("DOMContentLoaded", function () {
    const createForm = document.getElementById('createForm');

    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // fill data
        const newName = document.getElementById('createName');
        const newPrice = document.getElementById('createPrice');
        const newImage = document.getElementById('createImage');

        if (newImage.files[0].size > 5000000){
            newImage.value = '';
            alert('File size exceeds the allowed limit of 5 MB');
            return
        }

        let formData = new FormData();

        formData.append('name', newName.value);
        formData.append('price', newPrice.value);
        formData.append('image', newImage.files[0]);

        for (var key of formData.keys()) {
            console.log(key, formData.get(key)); 
        }
        
        // Sending POST request to create a new goal
        fetch('/users/api/cards', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
        .then(response => response.json())
        .then(createdGoal => {
            console.log(createdGoal);
            window.location.href = '/';
        })
        .catch(error => console.error('Error creating goal:', error));
    });
});
