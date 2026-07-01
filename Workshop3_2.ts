export function calculatePrice(price: number, discountPercent: number): number {
    const after = price - (price * discountPercent / 100);

    if (after < 0) {
        return 0;
    } else {
        return after;
    }
}

let price1: number = 500;
let price2: number = 200;

let discountPercent: number = 10;

let priceAfterDiscount1: number = calculatePrice(price1, discountPercent);
let priceAfterDiscount2: number = calculatePrice(price2, discountPercent);

console.log(`สินค้าราคา ${price1} บาท ราคาสุทธิหลังหักส่วนลด ${priceAfterDiscount1} บาท`);
console.log(`สินค้าราคา ${price2} บาท ราคาสุทธิหลังหักส่วนลด ${priceAfterDiscount2} บาท`);