window.calculateJS = function() {
    return {
        bill: null,
        presetTips: [
            '5', '10', '15', '25', '50'
        ],
        customTip: null,
        selectedTip: null,
        tip: null,
        people: null,
        tipAmount: 0,
        total: 0,

        get calculate() {
            if (this.selectedTip) {
                console.log(' filled preset')
                return this.tip = this.presetTips.filter((presetTip ) => { return presetTip === this.selectedTip })[0]
            } else {
                console.log(' filled custom')

            }
            //     this.tipAmount = (this.bill / (100 * this.selectedTip)) / this.people
            //     this.total = this.bill + this.tipAmount / this.people

            // if (this.bill && this.tip && this.people) {
            // }
        },

        reset() {
            this.bill = null;
            this.presetTip = null;
            this.customTip= null;
            this.selectedTip = null;
            this.tip = null;
            this.people = null;
            this.tipAmount = 0;
            this.total = 0;
        }
    }
}