/**
 * Handler related to all damage to character's HP.
 * @type {Object<function>}
 * @property {function} reduceTotalHP Function to calculate the remaining HP.
 */
const DamageHandler = {
    /**
     * Reduces the total HP according to the armor and returns it.
     * @type {function}
     * @param {number} totalHP HP of character.
     * @param {Array<number>} damage Array of damages received.
     * @param {Array<number>} armor Array of armor depleted.
     * @param {number} ROF Number of attacks received.
     * @returns {number} HP remaining after damage.
     */
    reduceTotalHP(totalHP: number, damage: Array<number>, armor: Array<number>, ROF: number) {
        for (let i = 0; i < ROF; i++) {
            totalHP -= Math.max(0, damage[i] - armor[i]);
        }

        return Math.max(0, totalHP);
    }
}

export default DamageHandler;