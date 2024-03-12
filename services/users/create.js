const path = require('path');
const fs = require('fs/promises');

async function createGoal(req, filename) {
    try {
        const jsonPath = path.join(__dirname, '..', '../data', 'db.json');

        const data = await fs.readFile(jsonPath, 'utf8');
        const cards = JSON.parse(data);
        const { name, price } = req.body;

        // Generate a new ID for the created goal
        const newId = cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 0;

        // Add the new goal to the array
        const newGoal = { id: newId, name, price, img: filename || null};
        const updatedCards = [...cards, newGoal];

        // Update the file with the new goal
        await fs.writeFile(jsonPath, JSON.stringify(updatedCards, null, 2), 'utf8');

        return { success: true, goal: newGoal };
    } catch (error) {
        console.error(error);
        return { error: 'Internal Server Error', status: 500 };
    }
}

module.exports = createGoal;
