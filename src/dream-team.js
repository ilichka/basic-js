module.exports = function createDreamTeam(members) {
    let name, firstLetter;
    let mass = [];
    if(typeof members === 'object' && members !== null) {
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
          name = String(members[i]);
          name = name.trim();
          firstLetter = name[0];
          mass[i] = firstLetter.toUpperCase();
        }
      }
      mass.sort();
      mass = mass.join('');
      return mass;
    }
    else {
      return false;
    }
};