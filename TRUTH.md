OR (||, ??)

| Left hand Side | Right hand Side | Result |
| --- | --- | --- |
| TRUTHY | TRUTHY | TRUTHY |
| TRUTHY | FALSEY | TRUTHY |
| FALSEY | TRUTHY | TRUTHY |
| FALSEY | FALSEY | FALSEY |

OR 

| Left hand Side | Right hand Side | Result |
| --- | --- | --- |
| TRUTHY | X | TRUTHY |
| FALSEY | X | X |
| X:FALSEY | Y:TRUTHY | Y:TRUTHY |
| X:TRUTHY | Y:TRUTHY | X:TRUTHY |
| X | FALSEY | X |

---

AND

| LEFT HAND SIDE | RIGHT HAND SIDE | RESULT |
| --- | --- | --- |
| X:TRUTHY | Y:TRUTHY | Y:TRUTHY |
| X:FALSEY | Y:FALSEY | X:FALSEY |
| X:TRUTHY | Y:FALSEY | Y:FALSEY |
| X:FALSEY | Y:TRUTHY | X:FALSEY |


--

console.log(0 || 1); // 1, because || checks for all "falsey"-esque values (null-ish)
- as long as the left hand side isn't falsey, return the left hand side
console.log(0 ?? 1); // 0, because ?? hard checks for null
- as long as the left hand side isn't null, return the left hand side

11010010
00110101

BITWISE AND
00010000

BITWISE OR
11110111
256 - 1 - 2 - 4 - 16 - 32 - 64 - 128


let count = 0;

function a() {
    count++;
    return true;
}

function b() {
    count++;
    return false;
}

a() || b();

returns true (from a())
new count value is 1

// it never runs b(), and it needs to evaluate a() in order to return value (known as shortcircuting) cus it never runs b() (never needs to)