export class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        this.members.push(character);
    }


    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if(index < this.members.length){
                    return{
                        value: this.members[index++],
                        done: false,
                    }
                }
                return {
                    value: undefined,
                    done: true,
                }
            }
        }
}
}