import {Team} from '../iterator';

test('chacking team with first next', () => {
    const char = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
    const team = new Team();
    team.add(char);
    const iterator = team[Symbol.iterator]();
    expect(iterator.next()).toEqual({
        value: {
          name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10
        },
        done: false
      });
});

test('chacking team with first next with for of', () => {
    const char = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
    const team = new Team();
    team.add(char);
    const collection = [];
    for (let item of team){
        collection.push(item);
    }
    expect(collection).toEqual([{name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10}]);
});

test('chacking team with second next', () => {
    const char = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
    const team = new Team();
    team.add(char);
    const iterator = team[Symbol.iterator]();
    iterator.next();
    expect(iterator.next()).toEqual({value: undefined, done: true});
});