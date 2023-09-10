import { describe, expect, expectTypeOf, it } from 'vitest';

import DamageHandler from '@/handlers/damageHandler';

const totalHP: number = 10;
const damage: Array<number> = [12, 9, 10, 11];
const armor: Array<number> = [10, 9, 8, 7, 6];
const ROF: number = 4;

describe('reduceTotalHP function', () => {
    it('should return number', () => {
        const returnedHP = DamageHandler.reduceTotalHP(totalHP, damage, armor, ROF);
        expectTypeOf(typeof(returnedHP)).toEqualTypeOf<Array<number>>
    });

    it('should return number with correct value', () => {
        const returnedHP = DamageHandler.reduceTotalHP(totalHP, damage, armor, ROF);
        expect(returnedHP).toStrictEqual(2)
    });

    it('should return a positive number or minimum 0', () => {
        const damage: Array<number> = [15, 15, 15, 15];
        const returnedHP = DamageHandler.reduceTotalHP(totalHP, damage, armor, ROF);
        expect(returnedHP).toStrictEqual(0)
    });
})