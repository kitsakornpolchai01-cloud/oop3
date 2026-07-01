function calculateArea(width: number, height: number): number {
    return width * height;
}

const showResult = (num: number): void => {
    console.log(`The result is: ${num}`);
};

showResult(calculateArea(5, 10));