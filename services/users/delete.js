const path = require('path');
const fs = require('fs/promises');

async function deleteGoal(req) {
    try {
        const jsonPath = path.join(__dirname, '..', '../data', 'db.json');
        const uploadPath = path.join(__dirname, '..', '../public/images'); // Update the path accordingly

        const data = await fs.readFile(jsonPath, 'utf8');
        const cards = JSON.parse(data);
        const { id } = req.params;

        // Find the record to be deleted
        const recordToDelete = cards.find(card => card.id.toString() === id);

        if (!recordToDelete) {
            return { success: false, error: 'Record not found', status: 404 };
        }

        // Delete the associated file if it exists to keep db clean
        const imgFileName = recordToDelete.img;
        if (imgFileName) {
            const imgPath = path.join(uploadPath, imgFileName);
            await fs.unlink(imgPath);
        }

        // Filter out the record with the specified ID
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