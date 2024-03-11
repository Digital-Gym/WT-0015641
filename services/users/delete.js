const path = require('path');
const fs = require('fs/promises');

async function deleteGoal(req) {
    try {
        const jsonPath = path.join(__dirname, '..', '../data', 'db.json');

        const data = await fs.readFile(jsonPath, 'utf8');
        const cards = JSON.parse(data);
        const { id } = req.params;

        // Filter if not contains ID then fill
        const updatedCards = cards.filter(card => card.id.toString() !== id);

        // Rewrite json
        await fs.writeFile(jsonPath, JSON.stringify(updatedCards, null, 2), 'utf8');

        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: 'Internal Server Error', status: 500 };
    }
}

module.exports = deleteGoal;