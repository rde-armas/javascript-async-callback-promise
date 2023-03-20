const regex = /(\d{4})-(\d{2})-(\d{2})/

const matcher = regex.exec('2022-02-03');

console.table(matcher);