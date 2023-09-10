import { describe, expect, expectTypeOf, it } from 'vitest';

import ArmorHandler from '@/handlers/armorHandler';

const totalArmor: number = 10;
const ROF: number = 4;

describe('reduceFinalArmor function', () => {
    it('should return number', () => {
        const returnedArmor = ArmorHandler.reduceFinalArmor(totalArmor, ROF);
        expectTypeOf(typeof(returnedArmor)).toEqualTypeOf<number>
    });

    it('should return number with correct value', () => {
        const returnedArmor = ArmorHandler.reduceFinalArmor(totalArmor, ROF);
        expect(returnedArmor).toStrictEqual(6)
    });

    it('should return number with correct values and with penetration ammo', () => {
        const arrayNumber = ArmorHandler.reduceFinalArmor(totalArmor, ROF, true);
        expect(arrayNumber).toStrictEqual(2)
    });

    it('should return number with positive number or minimum 0', () => {
        const totalArmor: number = 5;
        const returnedHP = ArmorHandler.reduceFinalArmor(totalArmor, ROF, true);
        expect(returnedHP).toStrictEqual(0)
    });
})

describe('reduceTotalArmor function', () => {
    it('should return Array<number>', () => {
        const arrayNumber = ArmorHandler.reduceTotalArmor(totalArmor, ROF);
        expectTypeOf(typeof(arrayNumber)).toEqualTypeOf<Array<number>>
    });

    it('should return Array<number> with correct values', () => {
        const arrayNumber = ArmorHandler.reduceTotalArmor(totalArmor, ROF);
        expect(arrayNumber).toStrictEqual([10, 9, 8, 7, 6])
    });

    it('should return Array<number> with correct values and with penetration ammo', () => {
        const arrayNumber = ArmorHandler.reduceTotalArmor(totalArmor, ROF, true);
        expect(arrayNumber).toStrictEqual([10, 8, 6, 4, 2])
    });

    it('should return Array<number> with positive numbers or minimum 0', () => {
        const totalArmor: number = 5;
        const returnedHP = ArmorHandler.reduceTotalArmor(totalArmor, ROF, true);
        expect(returnedHP).toStrictEqual([5, 3, 1, 0, 0])
    });
})

describe('ignoreHalfArmor function', () => {
    it('should return Array<number>', () => {
        const arrayNumber = ArmorHandler.ignoreHalfArmor(totalArmor, ROF);
        expectTypeOf(typeof(arrayNumber)).toEqualTypeOf<Array<number>>
    });

    it('should return Array<number> with correct values', () => {
        const arrayNumber = ArmorHandler.ignoreHalfArmor(totalArmor, ROF);
        expect(arrayNumber).toStrictEqual([5, 5, 4, 4])
    });

    it('should return Array<number> with correct values and with penetration ammo', () => {
        const arrayNumber = ArmorHandler.ignoreHalfArmor(totalArmor, ROF, true);
        expect(arrayNumber).toStrictEqual([5, 4, 3, 2])
    });

    it('should return Array<number> with positive numbers or minimum 0', () => {
        const totalArmor: number = 5;
        const returnedHP = ArmorHandler.ignoreHalfArmor(totalArmor, ROF, true);
        expect(returnedHP).toStrictEqual([3, 2, 1, 0])
    });
})