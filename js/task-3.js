const profile = {
  username: 'Jacob',
  playTime: 300,

  getInfo() {
    return `${profile.username} has ${profile.playTime} active hours`;
  },
};
console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// "Jacob has 300 active hours!"
/*Доповни обєкт profile методами для роботи з його властивостями.

Метод changeUsername(newName) повинен приймати рядок (нове імя) 
в параметр newName та змінювати значення властивості username на нове. 
Нічого не повертає.

Метод updatePlayTime(hours) повинен приймати число (кількість годин) 
у параметр hours та збільшити на нього значення властивості playTime. 
Нічого не повертає.

Метод getInfo() має повертати рядок формату <Username> has <amount> 
active hours!, де <Username> — це імя профілю, а <amount> — кількість 
ігрових годин.
*/
