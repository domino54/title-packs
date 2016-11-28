// ==================== Zadanie 1 ====================
var x = 3, y = 5, suma = x;
for (i = x + 1; i <= y; i++) suma *= i;
document.write('1) Wynik mnozenia wszystkich liczb z przedzialu <' + x + ', ' + y + '>: ' + suma, '<br>');

// ==================== Zadanie 2 ====================
var m = 3, n = 2;
var liczby = [];
for (i = m; i >= 1; i--) liczby.push(i);
for (i = 1; i <= n; i++) document.write('2) Liczby calkowite z przedzialu <1, ' + m + '>: ' + liczby, '<br>');

// ==================== Zadanie 3 ====================
var n = 2, x = 3, p = 0, q = 50;
liczby = [];
for (i = p + n - 1; i <= q; i += n) if (i % x == 0) liczby.push(i);
document.write('3) Co ' + n + ' liczby calkowite z przedzialu <' + p + ', ' + q + '> podzielne przez ' + x + ': ' + liczby, '<br>');