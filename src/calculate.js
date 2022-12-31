window.calculateJS = function() {
    return {
        bill: null,
        tip: null,
        customTip: null,
        tipTotal: null,
        people: null,
        tipAmount: 0,
        total: 0,

        get totalTip() {
            if (this.customTip) {
                this.tip = null
                this.tipTotal = this.customTip
            } else if (this.tip) {
                this.customTip = null
                this.tipTotal = this.tip
            } else if (!this.customTip && !this.tip) {
                this.tipTotal = null
            }
        },

        calculate() {
            this.tipAmount = (this.bill / (100 * tipTotal)) / this.people
            this.total = this.bill + this.tipAmount / this.people
        },

        reset() {
            this.bill = null;
            this.tip = null;
            this.customTip= null;
            this.tipTotal = null;
            this.people = null;
            this.tipAmount = 0;
            this.total = 0;
        }
    }
}