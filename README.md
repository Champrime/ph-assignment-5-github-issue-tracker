# B13 A05

## Q&A (Challenge Part)

### 1. What is the difference between var, let, and const?

Var, let, and const are variable declaring keywords in JavaScript. 

`var` is the oldest way aka the legacy way. It is not bound by block scope, which means that it can be accessed and updated from anywhere, from global scope to function scope. It can also be re-decalred using `var` keyword, which completely obliterates the previous declaration.
This much flexibility can lead to unexpected errors, bugs and security issues.

`let` fixes the modern problems of `var`. `let` is introduced in ES6. We can't completey re-declare a variable. But **we can change the value**. `let` also is bound by the block scope, which means that it can only be accessed and updated from the block where it was declared in or from the inner blocks. This makes it more secure and less error-prone than `var`.

`const` is the most strict keyword among the three. It must always keep the same reference. No re-declaration, no update of value, no flexibility, totally locked
.  
Because of the safer behaviors, `let` and `const` are preferred over `var` in modern JavaScript, and `var` is generally avoided.

---

### 2. What is the spread operator (...)?

Another ES6 feature that tackles the modern problems. The spread operator (`...`) is introduced to give the developers flexibility to include more items or elements into an array, object or add more parameters to the function. This makes working with arrays, objects, functions easier to work without modifying the original one or less need of creating new arrays, objects, functions for every possibility.

---

### 3. What is the difference between map(), filter(), and forEach()?

`map()`, `filter()`, and `forEach()` are array methods used to work with array elements. I'll explain them one by one with an example for each.
Let's say we have an array of numbers: `const numbers = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];`. lgt's see how these methods work with this array.

`map()`: Takes each element of an array, takes a function, and return a modified array that the user desires.  

```js
numbers.map(num => num * 2); // returns [2, 4, 6, 8, 10, 20, 40, 60, 80, 100]
```

`filter()`: Checks each elements of an array based on specified condition, and returns an array containing only the elements fulfilling the condition.

```js
numbers.filter(num => num > 9); // returns [10, 20, 30, 40, 50]
```

`forEach()`: Loops through each element of an array and performs an action. Unlike map(), forEach() does not return a new array. Rather it unravels an array, brings out each element to work with the elements. This one is the modern version of the traditional for loops.

```js
numbers.forEach(num => console.log(num)); // logs each number in the array to the console, one by one
```

---

### 4. What is an arrow function?

Arrow function is another ES6 feature and to make `function` shorter and make JavaScript code look easier. Instead of the traditional `function(){}` syntax it uses the `()=>{}` syntax. An important feature is that arrow functions do not have their own `this` context, instead they inherit that from the surrounding scope. This makes them really useful while working with objects, events and callbacks where the correct `this` value needs to be maintained.

---

### 5. What are template literals?

Template literals are a feature in JavaScript through which strings can be created in a more flexible way using backticks (\` \`) instead of single or double quotes. *String interpolation* is supported, which means that variables or expressions can be inserted directly into the string using `${}` syntax. Also, it allows for multi-line strings without needing special characters like `\n`. Summing all up, a variable containing a string assigned using template literals, can carry a whole script and pass that value as fresh as a file or document can be, alongside being clearly readable.
