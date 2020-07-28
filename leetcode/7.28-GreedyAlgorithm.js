/**
 * @function greedyAlgorithm
 * @description find the fast way to reduce sum
 * @explaination 
 *  1. reduce the sum from the largest one, then the second largest, then ..., which is not the best way to get the solution, 
 *     for example: when condition are 11, 5, 1 you will not get the best way
 */
function greedyAlgorithm(money = 41) {
    try {
        let sum = money;
        const TWENTY_FIFTEEN = 25;
        const TEN = 10;
        const FIVE = 5;
        const ONE = 1;
        let num25 = 0, num10 = 0, num5 = 0, num1 = 0;
        while(sum >= TWENTY_FIFTEEN) {
            num25++;
            sum -= TWENTY_FIFTEEN;
            continue;
        }
        while(sum >= TEN) {
            num10++;
            sum -= TEN;
            continue;
        }
        while(sum >= FIVE) {
            num5++;
            sum -= FIVE;
            continue;
        }
        while(sum >= ONE) {
            num1++;
            sum -= ONE;
            continue;
        }
        console.log(`找零${money}元, 用了${TWENTY_FIFTEEN}元${num25}次、${TEN}元${num10}次、${FIVE}元${num5}次、${ONE}元${num1}次`);
    } catch (e) {
        console.log(e);
    }

}

greedyAlgorithm(120);
