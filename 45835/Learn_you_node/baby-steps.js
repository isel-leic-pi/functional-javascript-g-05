let sum = 0
const args_num = process.argv
for (let i = 2; i < args_num.length; i++) {
sum += parseInt(args_num[i]);
}
console.log(sum)