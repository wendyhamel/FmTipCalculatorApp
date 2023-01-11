window.calculateJS = function() {
    return {
        bill: Alpine.$persist(null),
        presetTips: ['5', '10', '15', '25', '50'],
        customTip: Alpine.$persist(null),
        selectedTip: Alpine.$persist(null),
        tipPercentage: Alpine.$persist(null),
        tip: Alpine.$persist(null),
        people: Alpine.$persist(null),
        tipAmount: 0,
        total: 0,

        get tipPercentageForCalculation() {
            let tipPercentage
            if (this.tip === 'preset') {
                this.customTip = null;
                tipPercentage = this.presetTips.filter((presetTip ) => { return presetTip === this.selectedTip })[0]
            } else {
                this.selectedTip = null;
                tipPercentage = this.customTip
            }
            return this.tipPercentage = tipPercentage
        },

        get calculate() {
            this.tipPercentageForCalculation

            if (this.bill > 0 && this.tip && this.people > 0) {
                let tipPerPerson = (this.bill / 100) * this.tipPercentage / this.people
                this.tipAmount = Number(new Intl.NumberFormat('en-US').format(tipPerPerson)).toFixed(2)
                let subTotal = this.bill / this.people
                let total = new Intl.NumberFormat('en-US').format(subTotal + tipPerPerson)
                this.total = Number(total).toFixed(2)
            } else {
                this.tipAmount = 0;
                this.total = 0;
            }
        },

        reset() {
            this.bill = null;
            this.presetTip = null;
            this.customTip= null;
            this.selectedTip = null;
            this.tipPercentage = null;
            this.people = null;
            this.tipAmount = 0;
            this.total = 0;
        }
    }
}