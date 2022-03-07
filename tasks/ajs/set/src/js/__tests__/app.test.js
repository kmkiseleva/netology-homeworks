import Team from '../app';

const hero1 = {
  name: 'John',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

const hero2 = {
  name: 'Mike',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 30,
  defence: 45,
};

const hero3 = {
  name: 'Kevin',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 50,
  defence: 45,
};

test("Method 'add' has to add new hero to the team", () => {
  const ourTeam = new Team();
  ourTeam.add(hero1);
  expect([...ourTeam.members][0]).toEqual(hero1);
});

test("Method 'add' has to throw new error if the hero exists", () => {
  const ourTeam = new Team();
  ourTeam.add(hero2);
  expect(() => ourTeam.add(hero2)).toThrow();
});

test("Method 'addAll' has to add several heroes", () => {
  const ourTeam = new Team();
  ourTeam.addAll(hero1, hero2, hero3);
  expect(ourTeam.members.size).toBe(3);
});

test("Method 'addAll' has to add several heroes without duplication", () => {
  const ourTeam = new Team();
  ourTeam.addAll(hero1, hero2, hero3, hero2, hero3);
  expect(ourTeam.members.size).toBe(3);
});

test("Method 'toArray' has to return an array", () => {
  const expectedArray = [
    {
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Mike',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 30,
      defence: 45,
    },
  ];

  const ourTeam = new Team();
  ourTeam.addAll(hero1, hero2);

  expect(ourTeam.toArray()).toEqual(expectedArray);
});
