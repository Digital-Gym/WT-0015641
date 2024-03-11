const path = require('path');
const fs = require('fs/promises');

async function update(req){
    try {
        const jsonPath = path.join(__dirname, '..', '../data', 'db.json');
        
        const data = await fs.readFile(jsonPath, 'utf8');
        const cards = JSON.parse(data);
        const { id } = req.params;
        const { name, price } = req.body;
    
        // Find target with ID and update it
        const updatedCards = cards.map(card => {
            if (card.id.toString() === id) {
                return { ...card, name, price };
            }
            return card;
        });
    
        // Rewrite everything
        await fs.writeFile(jsonPath, JSON.stringify(updatedCards, null, 2), 'utf8');
    
        
        return { success: true, price: price, name: name};
    } catch (error) {
        console.error(error);
        return { error: 'Internal Server Error', status: 500};
    }
}

module.exports = update;