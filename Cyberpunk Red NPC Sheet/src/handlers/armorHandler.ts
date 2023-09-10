/**
 * Handler related to all character's armor.
 * @type {Object<function>}
 * @property {function} reduceFinalArmor Calculate final value of armor's depletion.
 * @property {function} reduceTotalArmor Calculate depletion of armor.
 * @property {function} ignoreHalfArmor Calculate armor considering it as half of total.
 */
const ArmorHandler = {
    /**
     * Reduces the total armor according to the type of damage and returns the final value.
     * @type {function}
     * @param {number} totalArmor Armor of character.
     * @param {number} ROF Number of attacks received.
     * @param {boolean} hasAmmoPenetration Condition to penetrating ammo.
     * @returns {number} Final remaining armor value after damage.
     */
    reduceFinalArmor(totalArmor: number, ROF: number, hasAmmoPenetration: boolean = false) {
        const _armorDeplete: number = hasAmmoPenetration ? 2 : 1;

        for(let counter = 0; counter < ROF; counter++) {
            totalArmor = Math.max(0, totalArmor - _armorDeplete);
        }

        return totalArmor;
    },

    /**
     * Reduces the total armor according to the type of damage and returns it.
     * @type {function}
     * @param {number} totalArmor Armor of character.
     * @param {number} ROF Number of attacks received.
     * @param {boolean} hasAmmoPenetration Condition to penetrating ammo.
     * @returns {Array<number>} Armor remaining after damage.
     */
    reduceTotalArmor(totalArmor: number, ROF: number, hasAmmoPenetration: boolean = false) {
        let _armorArray: Array<number> = [totalArmor];
        const _armorDeplete: number = hasAmmoPenetration ? 2 : 1;

        for(let counter = 1; counter <= ROF; counter++) {
            _armorArray.push(Math.max(0, totalArmor - _armorDeplete));
            totalArmor -= _armorDeplete;
        }

        return _armorArray;
    },

    /**
     * Considers armor as half of its value and returns it.
     * @type {function}
     * @param {number} totalArmor Armor of character.
     * @param {number} ROF Number of attacks received.
     * @param {boolean} hasAmmoPenetration Condition to penetrating ammo.
     * @returns {Array<number>} Armor treated as its half.
     */
    ignoreHalfArmor(totalArmor: number, ROF: number, hasAmmoPenetration: boolean = false) {
        let _armorArray: Array<number> = [];
        const _armorDeplete: number = hasAmmoPenetration ? 2 : 1;

        for(let counter = 0; counter < ROF; counter++) {
            _armorArray.push(Math.max(0, Math.ceil(totalArmor / 2)));
            totalArmor -= _armorDeplete;
        }

        return _armorArray;
    }
}

export default ArmorHandler