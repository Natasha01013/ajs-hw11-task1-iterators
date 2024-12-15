import {Team} from '../iterator';

test('chaking team', () => {
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
    const iterator = team.iterator();
    expect(iterator.next()).toEqual({name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10});
    expect(iterator.next()).toEqual({value: undefined, done: true});
});