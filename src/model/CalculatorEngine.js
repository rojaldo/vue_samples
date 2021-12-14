const INIT_STATE = 0;
const FIRST_FIGURE_STATE = 1;
const SECOND_FIGURE_STATE = 2;
const RESULT_STATE = 3;

export class CalculatorEngine {
    display = '';
    calculatorEnpgine = {
        currentState: INIT_STATE,
        firstFigure: 0,
        secondFigure: 0,
        operator: '',
        result: 0

    }
    constructor() {
    }

    handleNumber(value) {
        // this.display = this.display + value;
        switch (this.calculatorEnpgine.currentState) {
            case INIT_STATE:
                this.calculatorEnpgine.firstFigure = value;
                this.calculatorEnpgine.currentState = FIRST_FIGURE_STATE;
                this.display += value;
                break;
            case FIRST_FIGURE_STATE:
                this.calculatorEnpgine.firstFigure = this.calculatorEnpgine.firstFigure * 10 + value;
                this.display += value;
                break;
            case SECOND_FIGURE_STATE:
                this.calculatorEnpgine.secondFigure = this.calculatorEnpgine.secondFigure * 10 + value;
                this.display += value;
                break;
            case RESULT_STATE:
                this.calculatorEnpgine.firstFigure = value;
                this.calculatorEnpgine.secondFigure = 0;
                this.calculatorEnpgine.operator = '';
                this.calculatorEnpgine.currentState = FIRST_FIGURE_STATE;
                break;

            default:
                break;
        }
        return this.display;

    }
    handleSymbol(value) {
        // this.display = this.display + value;
        switch (this.calculatorEnpgine.currentState) {
            case INIT_STATE:

                break;
            case FIRST_FIGURE_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.calculatorEnpgine.operator = value;
                    this.calculatorEnpgine.currentState = SECOND_FIGURE_STATE;
                    this.display += value;
                }
                break;
            case SECOND_FIGURE_STATE:
                if (value === '=') {
                    this.calculatorEnpgine.result = this.resolve();
                    this.calculatorEnpgine.currentState = RESULT_STATE;
                    this.display = this.display + value + this.calculatorEnpgine.result;
                }
                break;
            case RESULT_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.calculatorEngine.firstFigure = this.calculatorEnpgine.result;
                    this.calculatorEnpgine.secondFigure = 0;
                    this.calculatorEnpgine.result = 0;
                    this.calculatorEnpgine.operator = value;
                    this.calculatorEnpgine.currentState = SECOND_FIGURE_STATE;
                    this.display += this.calculatorEnpgine.firstFigure + value;
                }
                break;

            default:
                break;
        }
        return this.display;
    }
    resolve() {
        switch (this.calculatorEnpgine.operator) {
            case '+':
                return this.calculatorEnpgine.firstFigure + this.calculatorEnpgine.secondFigure;
            case '-':
                return this.calculatorEnpgine.firstFigure - this.calculatorEnpgine.secondFigure;
            case '*':
                return this.calculatorEnpgine.firstFigure * this.calculatorEnpgine.secondFigure;
            case '/':
                return this.calculatorEnpgine.firstFigure / this.calculatorEnpgine.secondFigure;
            default:
                break;
        }
    }
}

