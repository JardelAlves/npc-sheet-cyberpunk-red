import { object, number, string } from 'yup';
import type { InferType } from 'yup';
import type { StatType } from '@/schemas/stat.schemas'

export type SkillType = 'AWARENESS' | 'BODY' | 'CONTROL' | 'EDUCATION' | 'FIGHTING' | 'PERFORMANCE' | 'RANGED_WEAPON' | 'SOCIAL' | 'TECHNIQUE';

export const baseSkillSchema = object({
    skillName: string().required(),
    type: string<SkillType>().required(),
    baseStat: string<StatType>().required(),
    difficulty: number().required().default(1),
    rank: number().required().default(0)
});

export type BaseSkill = InferType<typeof baseSkillSchema>
