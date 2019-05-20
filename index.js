'use strict';
var defaulPlace= (prompt('Введите исходное положение', '')).split(''); // получаем данные введенные пользователем и дели данные посимврльно

// var vertical = [1,2,3,4,5,6,7,8];
var horizontal = ["A","B","C","D","E","F","G","H"]; // массив букв, обозгачающих поля шахматной доски
var deafaultHorizont = null;
var deafaultHorizontTMP = defaulPlace[0]; // Берем первый символ из массива, который получился после обработки ыыеденных данных
for (let i=0; i<8; i++)
{
    if(deafaultHorizontTMP===horizontal[i]) // Сравниваем данные ввода пользователя с символами массива, для определения цифрового индекса, введенной буквы
    {
        deafaultHorizont=i;
    }
}
var deafaultVertical = defaulPlace[1]; // пъв предыдущей строке получили горизонтальный индекс, в этой сроке получаем вертиуальный

var pointMap = ( // записываем в масси массивов все возможные ходы конем в относительном виде
    [
    [deafaultHorizont+2, +deafaultVertical+1],
    [deafaultHorizont+2, +deafaultVertical-1],
    [deafaultHorizont-2, +deafaultVertical+1],
    [deafaultHorizont-2, +deafaultVertical-1],

    [deafaultHorizont+1, +deafaultVertical+2],
    [deafaultHorizont-1, +deafaultVertical+2],
    [deafaultHorizont+1, +deafaultVertical-2],
    [deafaultHorizont-1, +deafaultVertical-2],
    ]);
var variants="";
for(let i=0; i<pointMap.length; i++) //в этом цикле применяем полученное значение от прльзователя и вычисляем абсолютные имена ходов конем
{
    let arr = pointMap[i];
    if (arr[0]>0 && arr[1]>0 && arr[0]<8 && arr[1]<8)
    {
       variants+= horizontal[arr[0]]+arr[1]+" ";
    }
}
alert (variants); //выводим полученые данные
