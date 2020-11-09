// 1 ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tag(titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// let tag_a = new Tag('a', 'Предназначен для создания ссылок', [{href: 'Задает адрес документа, на который следует перейти.'},
//                                                                 {name: 'Устанавливает имя якоря внутри документа.'},
//                                                                 {target: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let tag_div= new Tag('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//                         [{align: 'Задает выравнивание содержимого тега div'},
//                          {title: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let tag_h1 = new Tag('h1', 'Представляет собой наиболее важный заголовок первого уровня',
//                         [{align: 'Определяет выравнивание заголовка.'},
//                         {id: 'Указывает имя стилевого идентификатора.'}]);
// let tag_span = new Tag('span', 'Предназначен для определения строчных элементов документа.',
//                         [{class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//                         {dir: 'Задает направление и отображение текста — слева направо или справа налево.'}])
// let tag_input = new Tag('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//                         [{value: 'Значение элемента.'},
//                          {type: 'Сообщает браузеру, к какому типу относится элемент формы.'},
//                          {size: 'Ширина текстового поля.'}])
// let tag_form = new Tag('form', 'Устанавливает форму на веб-странице.',
//                         [{acion: 'Адрес программы или документа, который обрабатывает данные формы'},
//                         {method: 'Метод протокола HTTP.'}])
// let tag_option = new Tag('option', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//                         [{value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//                         {selected: 'Заранее устанавливает определенный пункт списка выделенным.'}])
// let tag_select = new Tag('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//                         [{multiple: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
//                         {size: 'Количество отображаемых строк списка.'}])

// console.log(tag_a);
// console.log(tag_div);
// console.log(tag_h1);
// console.log(tag_span);
// console.log(tag_input);
// console.log(tag_form);
// console.log(tag_option);
// console.log(tag_select);


// 2 ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class TagDescript{
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// let tag_a = new TagDescript('a', 'Предназначен для создания ссылок', [{href: 'Задает адрес документа, на который следует перейти.'},
//                                                                 {name: 'Устанавливает имя якоря внутри документа.'},
//                                                                 {target: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let tag_div= new TagDescript('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//                         [{align: 'Задает выравнивание содержимого тега div'},
//                          {title: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let tag_h1 = new TagDescript('h1', 'Представляет собой наиболее важный заголовок первого уровня',
//                         [{align: 'Определяет выравнивание заголовка.'},
//                         {id: 'Указывает имя стилевого идентификатора.'}]);
// let tag_span = new TagDescript('span', 'Предназначен для определения строчных элементов документа.',
//                         [{class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//                         {dir: 'Задает направление и отображение текста — слева направо или справа налево.'}])
// let tag_input = new TagDescript('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//                         [{value: 'Значение элемента.'},
//                          {type: 'Сообщает браузеру, к какому типу относится элемент формы.'},
//                          {size: 'Ширина текстового поля.'}])
// let tag_form = new TagDescript('form', 'Устанавливает форму на веб-странице.',
//                         [{acion: 'Адрес программы или документа, который обрабатывает данные формы'},
//                         {method: 'Метод протокола HTTP.'}])
// let tag_option = new TagDescript('option', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//                         [{value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//                         {selected: 'Заранее устанавливает определенный пункт списка выделенным.'}])
// let tag_select = new TagDescript('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//                         [{multiple: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
//                         {size: 'Количество отображаемых строк списка.'}])
// console.log(tag_a);
// console.log(tag_div);
// console.log(tag_h1);
// console.log(tag_span);
// console.log(tag_input);
// console.log(tag_form);
// console.log(tag_option);
// console.log(tag_select);


// 3 ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'Sportage',
//     manufacturer: 'Kia',
//     year: 2012,
//     maxSpeed: 182,
//     engineCapacity: 2,
//     pilot: 'Max',
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function(){
//         console.log(`model: ${this.model},
//                     manufacture: ${this.manufacturer},
//                     year: ${this.year},
//                     maxspeed: ${this.maxSpeed},
//                     engineCapacity: ${this.engineCapacity}`)
//     },
//     increaseMaxSpeed: function(newSpeed){
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function(newValue){
//         this.year = newValue;
//     },
//     addDriver: function(driver){
//         this.pilot = driver;
//     }

// }

// let driverIvan = {name: 'Ivan', age: 28};

// 4 ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function CarFunction(model, manufacturer, year, maxSpeed, engineCapacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;  
//     this.pilot = 'Max';  
//     this.drive = function (){
//         console.log('їдемо зі швидкістю' + this.maxSpeed + 'на годину');
//     };
//     this.info = function(){
//         console.log(`model: ${this.model},
//                     manufacture: ${this.manufacturer},
//                     year: ${this.year},
//                     maxspeed: ${this.maxSpeed},
//                     engineCapacity: ${this.engineCapacity}`)
//     };
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function(newValue){
//         this.year = newValue;
//     };
//     this.addDriver = function(driver){
//         this.pilot = driver;
//     }
// }

// let carFun = new CarFunction('Octavia A7', 'Skoda', 2016, 181, 2)
// let driverIvan = {name: 'Ivan', age: 28};
// console.log(carFun.info);
// carFun.addDriver(driverIvan);
// carFun.changeYear(2020);
// carFun.increaseMaxSpeed(17);
// console.log(carFun);


// 5 ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class CarClass{
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;  
// //        this.pilot = 'Oleg'; 
//     } 
//         drive(){
//             console.log('їдемо зі швидкістю' + this.maxSpeed + 'на годину');
//         };
//         info(){
//             console.log(`model: ${this.model},
//                     manufacture: ${this.manufacturer},
//                     year: ${this.year},
//                     maxspeed: ${this.maxSpeed},
//                     engineCapacity: ${this.engineCapacity}
//                     pilot: ${this.pilot.name}`)
//         };
//         increaseMaxSpeed(newSpeed){
//             this.maxSpeed += newSpeed;
//         };
//         changeYear(newValue){
//             this.year = newValue;
//         };
//         addDriver(driver){
//             this.pilot = driver;
//         } 
    
// }

// let carClass = new CarClass('Octavia A7', 'Skoda', 2016, 181, 2)
// let driverMax = {name: 'Max', age: 35};
// carClass.info;
// carClass.drive;
// carClass.increaseMaxSpeed(25);
// carClass.addDriver(driverMax);
// console.log(carClass);



// 6 ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella{
//     constructor(name, age, sizeFoot){
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }    
// }

// class Prince{
//     constructor(name, age, shoes){
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
//     // first variant
//     findCinderella(arr){
//         let result = []        
//         for (const listPrincess of arr){
//             if (this.shoes === listPrincess.sizeFoot){
//                 result.push(listPrincess);                 
//             }
//         }
        
//         let str = result.length !== 0 ? `${result[0].name} - is Cinderella`:  'Cinderella not found'
//         console.log(str)
//     }

//     // second variant
//     // findCinderella(arr){        
//     //     let str = 'Cinderella not found'
//     //     for (const listPrincess of arr){
//     //         if (this.shoes === listPrincess.sizeFoot){
//     //             str = `${listPrincess.name} is Cinderella`
//     //             return console.log(str)  
//     //         }
//     //     }        
      
//     // }

// }   

// let ira = new Cinderella('Ira', 25, 38);
// let anna = new Cinderella('Anna', 28, 39);
// let liza = new Cinderella('Liza', 18, 35);
// let olga = new Cinderella('Olga', 32, 36);
// let toma = new Cinderella('Toma', 30, 34);
// let inna = new Cinderella('Inna', 27, 37);
// let natali = new Cinderella('Natali', 20, 38);
// let julia = new Cinderella('Julia', 29, 35);
// let vika = new Cinderella('Vika', 26, 36);
// let margo = new Cinderella('Margo', 22, 34);

// let arr_princess = [ira, anna, liza, olga, toma, inna, natali, julia, vika, margo];

// let prince1 = new Prince('Alex', 25, 36);

// prince1.findCinderella(arr_princess);



// 7 ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function CinderellaF(name, age, sizeFoot){
//     this.name = name;
//     this.age = age;
//     this.sizeFoot = sizeFoot;
// }

// function PrinceF(name, age, sizeShoes){
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes

//     this.findCinderella = function(arr){        
//         let str = 'Cinderella not found';
//         for (const listPrincess of arr){
//             if (this.shoes === listPrincess.sizeFoot){
//                 str = `${listPrincess.name} is Cinderella`;
//                 return console.log(str);
//             }
//         }        
      
//     }
// }

// let ira = new CinderellaF('Ira', 25, 38);
// let anna = new CinderellaF('Anna', 28, 39);
// let liza = new CinderellaF('Liza', 18, 35);
// let olga = new CinderellaF('Olga', 32, 36);
// let toma = new CinderellaF('Toma', 30, 34);
// let inna = new CinderellaF('Inna', 27, 37);
// let natali = new CinderellaF('Natali', 20, 38);
// let julia = new CinderellaF('Julia', 29, 35);
// let vika = new CinderellaF('Vika', 26, 36);
// let margo = new CinderellaF('Margo', 22, 34);

// let arr_princess = [ira, anna, liza, olga, toma, inna, natali, julia, vika, margo];

// let prince1 = new PrinceF('Alex', 25, 34);

// prince1.findCinderella(arr_princess);

