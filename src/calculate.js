window.calculateJS = function() {
    return {
        bill: Alpine.$persist(null),
        presetTips: ['5', '10', '15', '25', '50'],
        customTip: Alpine.$persist(null),
        selectedTip: Alpine.$persist(null),
        tipPercentage: Alpine.$persist(null),
        people: Alpine.$persist(null),
        noPeople: false,
        tipAmount: 0,
        total: 0,

        checkNumberOfPeople() {
            this.noPeople = this.people < 1 || this.people === null;
        },

        calculate() {
            this.tipAmount = 0;
            this.total = 0;
            if (this.bill && this.tipPercentage) {
                this.checkNumberOfPeople()
                let bill = this.bill.replace(/,/g, "")
                let tipPerPerson = (bill / 100) * this.tipPercentage / this.people
                this.tipAmount = Number(tipPerPerson).toFixed(2)
                this.total = Number((bill / this.people) + tipPerPerson).toFixed(2)
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