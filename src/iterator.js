export class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        this.members.push(character);
    }


iterator() {
    let index = 0;
    return {
        next: () => {
            if(index < this.members.length){
            return this.members[index++];
            }
            return {
                value: undefined,
                done: true,
            }
        }
    }
}
}
