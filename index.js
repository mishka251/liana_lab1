let enabled_types = ['Тонна', 'Килограмм', 'Грамм', 'Милиграмм', 'Фунт'];

window.onload = function (event) {
    let vue_app = new Vue({
        el: '#vue-app',
        data: {
            test: 'hello',
            types: enabled_types,
            selectedInputType: enabled_types[0],
            selectedOutputType: null,
            input_value: null,
        },
        methods: {
            result_value() {
                if (this.selectedOutputType) {
                    return convert(this.input_value, this.selectedInputType, this.selectedOutputType);
                } else {
                    return '';
                }
            }
        }

    });
};

/**
 *
 * @param inputValue{string}
 * @param inputType{string}
 * @param outputType{string}
 * @returns {number}
 */
function convert(inputValue, inputType, outputType) {
    if (inputType === outputType) {
        return parseFloat(inputValue);
    }
    let inputKG = toKG(inputType, inputValue);

    return fromKG(outputType, inputKG);
}


function toKG(type, val) {
    switch (type) {
        case 'Тонна':
            return val * 1000;
        case 'Килограмм':
            return val;
        case 'Грамм':
            return val / 1000;
        case 'Милиграмм':
            return val / (1000 * 1000);
        case 'Фунт':
            return 0.453592 * val;
        default:
            throw Error("евалидный тип");
    }
}


function fromKG(type, val) {
    switch (type) {
        case 'Тонна':
            return val / 1000;
        case 'Килограмм':
            return val;
        case 'Грамм':
            return val * 1000;
        case 'Милиграмм':
            return val * (1000 * 1000);
        case 'Фунт':
            return val / 0.453592;
        default:
            throw Error("евалидный тип");
    }
}