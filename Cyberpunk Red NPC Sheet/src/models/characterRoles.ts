class CharacterRoleStructure {
    public role: string;
    public skill: string;
    public rank: number;

    constructor(role: string, skill: string, rank: number = 1) {
        this.role = role;
        this.skill = skill;
        this.rank = rank;
    }

    setRoleRank(rank: number) {
        this.rank = rank;
    }

    getRoleRank() {
        return this.rank;
    }
}

const CharacterRole = {
    ROCKERBOY: new CharacterRoleStructure('ROCKERBOY', 'CHARISMATIC_IMPACT'),
    SOLO: new CharacterRoleStructure('SOLO', 'COMBAT_AWARENESS'),
    NETRUNNER: new CharacterRoleStructure('NETRUNNER', 'INTERFACE'),
    TECH: new CharacterRoleStructure('TECH', 'MAKER'),
    MEDTECH: new CharacterRoleStructure('MEDTECH', 'MEDICINE'),
    MEDIA: new CharacterRoleStructure('MEDIA', 'CREDIBILITY'),
    EXEC: new CharacterRoleStructure('EXEC', 'TEAMWORK'),
    LAWMAN: new CharacterRoleStructure('LAWMAN', 'BACKUP'),
    FIXER: new CharacterRoleStructure('FIXER', 'OPERATOR'),
    NOMAD: new CharacterRoleStructure('NOMAD', 'MOTO')
};

export default CharacterRole;