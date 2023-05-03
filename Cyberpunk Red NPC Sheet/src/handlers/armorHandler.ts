const ArmorHandler = {
    reduceTotalArmor(totalArmor: number, ROF: number, hasAmmoPenetration: boolean = false) {
        let _armorArray: Array<number> = [];
        let _armorDeplete: number = hasAmmoPenetration ? 2 : 1;

        for(let counter = 0; counter < ROF; counter++) {
            _armorArray.push(totalArmor - _armorDeplete);
            totalArmor -= _armorDeplete;
        }

        return _armorArray;
    },

    ignoreHalfArmor(totalArmor: number, ROF: number, hasAmmoPenetration: boolean = false) {
        let _armorArray: Array<number> = [];
        let _armorDeplete: number = hasAmmoPenetration ? 2 : 1;

        for(let counter = 0; counter < ROF; counter++) {
            _armorArray.push(Math.ceil(totalArmor / 2));
            totalArmor -= _armorDeplete;
        }

        return _armorArray;
    }
}

export default ArmorHandler