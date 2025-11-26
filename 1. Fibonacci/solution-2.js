function fib(number) {
    // переменная series - первые два числа 0,1 в индексе
    const series = [0, 1];
    // цикл. переменная i=2; 2<число; i++ увеличить на 1
    for (let i = 2; i < number; i++) {
        //метод пуш - добавляет еще какой то элемент к массиву
        // array.push(element1, element2, ..., elementN);
        series.push(series[i - 1] + series[i - 2]);
    }
    // возврат итога после преодоления number
    return series;
}

console.log(fib(123))