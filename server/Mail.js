class Mail {
  constructor(from, to, body, subject, options) {
    this.from = from;
    this.to = to;
    this.body = body;

    if (options) {
      this.cc = options.cc;
      this.cco = options.cco;
    }
  }

  toJson() {
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      cc: this.cc,
      cco: this.cco,
      html: this.body
    };
  }
}