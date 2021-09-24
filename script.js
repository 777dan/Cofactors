let n = prompt("Введите число");
for (let k = 0; k <= n; k++) {
    if (n % k == 0) {
        var s = n / k;
        var a = document.write(s + " ");
    }

}

let q = 2;
while (n > 1) {
    if (n % q == 0) {
        document.write("<br>" + q);
        n /= q;
    } else {
        q++;
    }
}
