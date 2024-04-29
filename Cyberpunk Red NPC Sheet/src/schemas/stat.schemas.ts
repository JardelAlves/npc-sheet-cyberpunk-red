import { object, number, string } from 'yup';
import type { InferType } from 'yup'

export type StatType = 'INT' | 'REF' | 'DEX' | 'TECH' | 'COOL' | 'WILL' | 'LUCK' | 'MOVE' | 'BODY' | 'EMP';
export const baseStatSchema = object({
    stat: string<StatType>().required(),
    rank: number().required().default(0)
});

export type BaseStat = InferType<typeof baseStatSchema>
