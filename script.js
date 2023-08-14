const addButton = document.getElementById('addButton');
const habitInput = document.getElementById('habitInput');
const habitList = document.getElementById('habitList');

addButton.addEventListener('click', addHabit);

function addHabit() {
    const habitText = habitInput.value.trim();
    if (habitText !== '') {
        const habitItem = document.createElement('li');
        habitItem.innerHTML = `
            <span>${habitText}</span>
            <button class="deleteButton">Delete</button>
        `;
        habitList.appendChild(habitItem);
        habitInput.value = '';

        const deleteButton = habitItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            habitList.removeChild(habitItem);
        });
    }
}
