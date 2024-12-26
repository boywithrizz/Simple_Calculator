let button = document.querySelectorAll(".button");
let arr = [];
let temp = 0;
let currsum = document.querySelector("#text1");
currsum.innerText = temp;
let exp = document.querySelector("#text2");
exp.innerText = "";

const calc = () => {
    if (arr.length >= 3 && arr.length % 2 === 1) {
        let last = arr.length;
        let num2 = Number(arr[last-1]);
        let sign = arr[last-2];
        let num1;
        if (last===3) {num1 = Number(arr[last-3]);}
        else {num1 = temp;}

        let result;
        switch (sign) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                throw new Error('Invalid operator');
        }

        return result;
    }
    return temp;
};

for (let butt of button) {
    butt.addEventListener("click", (evt) => {
        let value = evt.target.innerText;
        if (value === '=') {
            temp = calc();
            currsum.innerText = temp;
            exp.innerText = '';
            arr = [temp.toString()];
        } else if (value === 'AC') {
            location.reload();
        } else {
            arr.push(value);
            exp.innerText = arr.join('');
        }
    });
}