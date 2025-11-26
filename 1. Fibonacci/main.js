function fib(number) {
    // создаем переменную с индексами чисел 0,1
    let numbers = [0, 1];
    // переменная i = 2
    let i = 2;
    // цикл while с условием 2 меньше переменной number
    while (i < number) {
        // расчет числа фибоначи
        numbers[i] = numbers[i - 1] + numbers[i - 2];
        // увеличиваем i на один.
        i++;
    }
    // возвращаеем числа
    return numbers;
}
// лес гооооу
console.log(fib(31))