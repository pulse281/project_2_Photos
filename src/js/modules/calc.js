const calc = (resArea, promoInput, ...arg) => {

const area = document.querySelector(resArea),
      promoInp = document.querySelector(promoInput),
      size = document.querySelector(arg[0]),
      material = document.querySelector(arg[1]),
      options = document.querySelector(arg[2]);

let args = {};

console.log(size.value);

function changeInput(input) {
    input.addEventListener('input', () => {
        args[input.id] = Number(input.value);
        console.log(args[input.id]);
        calculate();
    });
}
changeInput(size);
changeInput(material);
changeInput(options);

function calculate() {
    if(args.size && args.material && args.options) {
        const res = args.size + args.material + args.options;
        area.textContent = res;
    }
    else if (args.size && args.material && isNaN(args.options)) {
        const res = args.size + args.material;
        area.textContent = res;
    } else {
        area.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }
}



};

export default calc;