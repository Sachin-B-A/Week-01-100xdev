let a = [3, 5, 5, 7, 89];
let max = a[0];
for (let i = 1; i < a.length; i++) { 
    if(a[i] > max) max = a[i];
}
console.log(max);