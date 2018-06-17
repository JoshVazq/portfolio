const formatOptions = { year: "numeric", month: "short" };
export class Period {
    from: Date;
    to: Date;

    constructor(from: Date, to: Date) {
        this.from = from;
        this.to = to;
    }
    toString() {
        //TODO: Calculate only on change dates
        //new Intl.DateTimeFormat([], { year: 'numeric', month: 'short', }).format(from);
        const from = this.from.toLocaleDateString([], formatOptions);
        const to = this.to.toLocaleDateString([], formatOptions);
        return `${from} - ${to}`;
    }
}