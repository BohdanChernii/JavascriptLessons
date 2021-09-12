const wallet = {
  transactions: [1, 4, 10, 5],
  getmax() {
    return Math.max(...this.transactions);
  },
  getmin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getmax());
