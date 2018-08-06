const formatOptions = { year: 'numeric', month: 'short' };
const intl = new Intl.DateTimeFormat([], formatOptions);

export class Period {
  from: Date;
  to: Date;

  constructor(from: Date, to?: Date) {
    this.from = from;
    if (to && !isNaN(to.getTime())) {
      this.to = to;
    }
  }
  toString() {
    //TODO: Calculate only on change dates
    const from = intl.format(this.from);
    const to = (this.to && intl.format(this.to)) || 'present';
    return `${from} - ${to}`;
  }
}
