class CharacterSkillStructure {
    public skill: string;
    public baseStat: string;
    public type: string;
    public dificulty: number;
    public rank?: number;

    constructor(skill: string, baseStat: string, type: string, dificulty: number, rank: number = 0) {
        this.skill = skill;
        this.baseStat = baseStat;
        this.type = type;
        this.dificulty = dificulty;
        this.rank = rank;
    }

    setSkillRank(rank: number) {
        this.rank = rank;
    }

    getSkillRank() {
        return this.rank
    }
}

const CharacterSkills = {
    CONCENTRATION: new CharacterSkillStructure('CONCENTRATION', 'WILL', 'AWARENESS', 1),
    CONCEAL_REVEAL_OBJECT: new CharacterSkillStructure('CONCEAL/REVEAL OBJECT', 'INT', 'AWARENESS', 1),
    LIP_READING: new CharacterSkillStructure('LIP READING', 'INT', 'AWARENESS', 1),
    PERCEPTION: new CharacterSkillStructure('PERCEPTION', 'INT', 'AWARENESS', 1),
    TRACKING: new CharacterSkillStructure('TRACKING', 'INT', 'AWARENESS', 1),

    ATHLETICS: new CharacterSkillStructure('ATHLETICS', 'DEX', 'BODY', 1),
    CONTORTIONIST: new CharacterSkillStructure('CONTORTIONIST', 'DEX', 'BODY', 1),
    DANCE: new CharacterSkillStructure('DANCE', 'DEX', 'BODY', 1),
    ENDURANCE: new CharacterSkillStructure('ENDURANCE', 'WILL', 'BODY', 1),
    RESIST_TORTURE_DRUGS: new CharacterSkillStructure('RESIST TORTURE/DRUGS', 'WILL', 'BODY', 1),
    STEALTH: new CharacterSkillStructure('STEALTH', 'DEX', 'BODY', 1),

    DRIVE_LAND_VEHICLE: new CharacterSkillStructure('DRIVE LAND VEHICLE', 'REF', 'CONTROL', 1),
    PILOR_AIR_VEHICLE: new CharacterSkillStructure('PILOR AIR VEHICLE', 'REF', 'CONTROL', 2),
    PILOT_SEA_VEHICLE: new CharacterSkillStructure('PILOT SEA VEHICLE', 'REF', 'CONTROL', 1),
    RIDING: new CharacterSkillStructure('RIDING', 'REF', 'CONTROL', 1),

    ACCOUNTING: new CharacterSkillStructure('ACCOUNTING', 'INT', 'EDUCATION', 1),
    ANIMAL_HANDLING: new CharacterSkillStructure('ANIMAL HANDLING', 'INT', 'EDUCATION', 1),
    BUREAUCRACY: new CharacterSkillStructure('BUREAUCRACY', 'INT', 'EDUCATION', 1),
    BUSINESS: new CharacterSkillStructure('BUSINESS', 'INT', 'EDUCATION', 1),
    COMPOSITION: new CharacterSkillStructure('COMPOSITION', 'INT', 'EDUCATION', 1),
    CRIMINOLOGY: new CharacterSkillStructure('CRIMINOLOGY', 'INT', 'EDUCATION', 1),
    CRYPTOGRAPHY: new CharacterSkillStructure('CRYPTOGRAPHY', 'INT', 'EDUCATION', 1),
    DEDUCTION: new CharacterSkillStructure('DEDUCTION', 'INT', 'EDUCATION', 1),
    EDUCATION: new CharacterSkillStructure('EDUCATION', 'INT', 'EDUCATION', 1),
    GAMBLE: new CharacterSkillStructure('GAMBLE', 'INT', 'EDUCATION', 1),
    LIBRARY_SEARCH: new CharacterSkillStructure('LIBRARY SEARCH', 'INT', 'EDUCATION', 1),
    TACTICS: new CharacterSkillStructure('TACTICS', 'INT', 'EDUCATION', 1),
    WILDERNESS_SURVIVAL: new CharacterSkillStructure('WILDERNESS SURVIVAL', 'INT', 'EDUCATION', 1),

    BRAWLING: new CharacterSkillStructure('BRAWLING', 'DEX', 'FIGHTING', 1),
    EVASION: new CharacterSkillStructure('EVASION', 'DEX', 'FIGHTING', 1),
    MARTIAL_ARTS: new CharacterSkillStructure('MARTIAL ARTS', 'DEX', 'FIGHTING', 2),
    MELEE_WEAPON: new CharacterSkillStructure('MELEE WEAPON', 'DEX', 'FIGHTING', 1),

    ACTING: new CharacterSkillStructure('ACTING', 'COOL', 'PERFORMANCE', 1),

    ARCHERY: new CharacterSkillStructure('ARCHERY', 'REF', 'RANGED_WEAPON', 1),
    AUTOFIRE: new CharacterSkillStructure('AUTOFIRE', 'REF', 'RANGED_WEAPON', 2),
    HANDGUN: new CharacterSkillStructure('HANDGUN', 'REF', 'RANGED_WEAPON', 1),
    HEAVY_WEAPONS: new CharacterSkillStructure('HEAVY WEAPONS', 'REF', 'RANGED_WEAPON', 2),
    SHOULDER_ARMS: new CharacterSkillStructure('SHOULDER ARMS', 'REF', 'RANGED_WEAPON', 1),
    
    BRIBERY: new CharacterSkillStructure('BRIBERY', 'COOL', 'SOCIAL', 1),
    CONVERSATION: new CharacterSkillStructure('CONVERSATION', 'EMP', 'SOCIAL', 1),
    HUMAN_PERCEPTION: new CharacterSkillStructure('HUMAN PERCEPTION', 'EMP', 'SOCIAL', 1),
    INTERROGATION: new CharacterSkillStructure('INTERROGATION', 'COOL', 'SOCIAL', 1),
    PERSUASION: new CharacterSkillStructure('PERSUASION', 'COOL', 'SOCIAL', 1),
    PERSONAL_GROOMING: new CharacterSkillStructure('PERSONAL GROOMING', 'COOL', 'SOCIAL', 1),
    STREETWISE: new CharacterSkillStructure('STREETWISE', 'COOL', 'SOCIAL', 1),
    TRADING: new CharacterSkillStructure('TRADING', 'COOL', 'SOCIAL', 1),
    WARDROBE_STYLE: new CharacterSkillStructure('WARDROBE & STYLE', 'COOL', 'SOCIAL', 1),
    
    AIR_VEHICLE_TECH: new CharacterSkillStructure('AIR VEHICLE TECH', 'TECH', 'TECHNIQUE', 1),
    BASIC_TECH: new CharacterSkillStructure('BASIC TECH', 'TECH', 'TECHNIQUE', 1),
    CYBERTECH: new CharacterSkillStructure('CYBERTECH', 'TECH', 'TECHNIQUE', 1),
    DEMOLITIONS: new CharacterSkillStructure('DEMOLITIONS', 'TECH', 'TECHNIQUE', 2),
    ELECTRONICS_SECURITY_TECH: new CharacterSkillStructure('ELECTRONICS/SECURITY TECH', 'TECH', 'TECHNIQUE', 2),
    FIRST_AID: new CharacterSkillStructure('FIRST AID', 'TECH', 'TECHNIQUE', 1),
    FORGERY: new CharacterSkillStructure('FORGERY', 'TECH', 'TECHNIQUE', 1),
    LAND_VEHICLE_TECH: new CharacterSkillStructure('LAND VEHICLE TECH', 'TECH', 'TECHNIQUE', 1),
    PAINT_DRAW_SCULPT: new CharacterSkillStructure('PAINT/DRAW/SCULPT', 'TECH', 'TECHNIQUE', 1),
    PARAMEDIC: new CharacterSkillStructure('PARAMEDIC', 'TECH', 'TECHNIQUE', 2),
    PHOTOGRAPHY_FILM: new CharacterSkillStructure('PHOTOGRAPHY/FILM', 'TECH', 'TECHNIQUE', 1),
    PICK_LOCK: new CharacterSkillStructure('PICK LOCK', 'TECH', 'TECHNIQUE', 1),
    PICK_POCKET: new CharacterSkillStructure('PICK POCKET', 'TECH', 'TECHNIQUE', 1),
    SEA_VEHICLE_TECH: new CharacterSkillStructure('SEA VEHICLE TECH', 'TECH', 'TECHNIQUE', 1),
    WEAPONSTECH: new CharacterSkillStructure('WEAPONSTECH', 'TECH', 'TECHNIQUE', 1),
};

export default CharacterSkills;