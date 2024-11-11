const profile = {
  username: 'Jacob',
  playTime: 300,

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
  changeUsername(newUserName) {
    this.username = newUserName;
  },
  updatePlayTime(newPlayTime) {
    this.playTime += newPlayTime;
  },
};

console.log(profile.getInfo());

profile.changeUsername('Marco'); // це виклик методу
console.log(profile.getInfo('Marco'));

profile.updatePlayTime(20); // це виклик методу
console.log(profile.getInfo());

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
