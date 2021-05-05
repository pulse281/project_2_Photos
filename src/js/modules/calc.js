const calc = (args, resArea, promoInput, promoVerification, ...arg) => {

const area = document.querySelector(resArea),
      promo = document.querySelector(promoInput),
      size = document.querySelector(arg[0]),
      material = document.querySelector(arg[1]),
      options = document.querySelector(arg[2]);

console.log(size.value);

function changeInput(input) {
    input.addEventListener('input', () => {
        args[input.id] = Number(input.value);
        if (input == promo) {
            args.p = input.value.toUpperCase();
        }
        console.log(args[input.id]);
        calculate();
    });
}
changeInput(size);
changeInput(material);
changeInput(options);
changeInput(promo);

function calculate() {
    if(args.size && args.material && args.options) {
        let res = args.size + args.material + args.options;
        area.textContent = UsePromo(args.p, res);
    }
    else if (args.size && args.material && isNaN(args.options)) {
        let res = args.size + args.material;
        area.textContent = UsePromo(args.p, res);
    } else {
        area.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }
}

function UsePromo(promo, sum) {
    if (promo === promoVerification) {
        sum = sum - (sum * 0.3);
    }
    return sum;
}

};

export default calc;