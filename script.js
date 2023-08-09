const personDB = {
     genser: null,
     age: null,
     weight: null,
     height: null,
     activityCoefficient: null,
     start() {
          this.gender = prompt("Укажите Ваш пол: 1 - мужчина или 2 - жкенщина.")
          if (this.gender !== '1' && this.gender !== '2'){
               alert("Вы ввели некоректные данные!");
               this.gender = prompt("Укажите Ваш пол: 1 - мужчина или 2 - жкенщина.")
          }

          this.age = +prompt('Укажите Ваш возраст:');
          if (check(this.age)){
               this.age = +prompt('Укажите Ваш возраст:');
          }

          this.weight = +prompt('Укажите Ваш вес:');
          if (check(this.weight)){
               this.weight = +prompt('Укажите Ваш вес:');
          }

          this.height = +prompt('Укажите Ваш рост:');
          if (check(this.height)){
               this.height = +prompt('Укажите Ваш рост:');
          }

          this.activityCoefficient = +prompt("Выберите Ваш уровень активности: 1.2 - минимальный, 1.375 - низкий, 1.55 - умеренный, 1.725 - высокий, 1.9 - экстремальный.");
          if (this.activityCoefficient !== 1.2 && this.activityCoefficient !== 1.375 && this.activityCoefficient !== 1.55 && this.activityCoefficient !== 1.725 && this.activityCoefficient !== 1.9){
               alert("Вы ввели некоректные данные!"); 
               this.activityCoefficient = +prompt("Выберите Ваш уровень активности: 1.2 - минимальный; 1.375 - низкий; 1.55 - умеренный; 1.725 - высокий; 1.9 - экстремальный. ");
          }
          },
               

getBMI() {
     if(!this.weight && !this.height){
          alert("Запустите метод personDB.start")
     }

     const index = +(Math.pow((this.weight / this.height), 2) * 100).toFixed(2);
     
     if (index < 18.5){
          console.log("Ниже нормального веса");
     } else if(index>=18.5 && index < 25){
          console.log('Нормальный вес');
     }else if(index >=25 && index<30){
          console.log("Избыточный вес");
     }else if(index>=30 && index <35){
          console.log("Ожирение I-степени");
     }else if(index>=35 && index<40){
          console.log('Ожирение II-степени');
     }else{
          console.log("Ожирение III-степени");
     }
},
getDailyCalories(){
     if(!this.weight && !this.height && !this.gender && this.age && this.activityCoefficient){
          alert("Запустите метод personDB.start");
     } 
     if (this.gender === "1"){
          this.dailyColories = (10 * this.weight) + (6.25 * this.height) - (5 * this.age)
          + 5 * this.activityCoefficient;
     } else if (this.gender === "2"){
          this.dailyColories = (10 * this.weight) + (6.25 * this.height) - (5 * this.age)
          - 161 * this.activityCoefficient;
     }

}
}

function check(value) {
     if (value == "" || value <=0 || value == isNaN){
          alert("Вы ввели некоректные данные!");
          return true;
     }
     
}
personDB.start();
personDB.getBMI();
personDB.getDailyCalories();
console.log(personDB);