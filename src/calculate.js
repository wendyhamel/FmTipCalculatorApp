window.calculateJS = function() {
    return {
        bill: Alpine.$persist(null),
        presetTips: ['5', '10', '15', '25', '50'],
        customTip: Alpine.$persist(null),
        selectedTip: Alpine.$persist(null),
        tipPercentage: Alpine.$persist(null),
        people: Alpine.$persist(null),
        tipAmount: 0,
        total: 0,

        calculate() {
            this.tipAmount = 0;
            this.total = 0;
            if (this.bill > 0 && this.tipPercentage && this.people > 0) {
                let tipPerPerson = (this.bill / 100) * this.tipPercentage / this.people
                this.tipAmount = Number(new Intl.NumberFormat('en-US').format(tipPerPerson)).toFixed(2)
                let subTotal = this.bill / this.people
                let total = new Intl.NumberFormat('en-US').format(subTotal + tipPerPerson)
                this.total = Number(total).toFixed(2)
            }
        },

        reset() {
            this.bill = null;
            this.customTip= null;
            this.selectedTip = null;
            this.tipPercentage = null;
            this.people = null;
            this.tipAmount = 0;
            this.total = 0;
        }
    }
}