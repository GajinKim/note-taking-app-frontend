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