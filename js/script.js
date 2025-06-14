//form1 -- border-left-width to borderLeftWidth
{
    const input1 = document.querySelector("#input1");
    const submit1 = document.querySelector("#submit1");
    const output1 = document.querySelector(".output1");

    submit1.addEventListener("click", event => {
        event.preventDefault();

        let text = input1.value;
        let arr = text.split("-");
        for(let i=1; i < arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        text = arr.join("");
        output1.textContent = text;
    });
};
//form2 -- array filter limit >= low and <= high
{
    const input2 = document.querySelector("#input2");
    const lower_limit2 = document.querySelector("#lower_limit2");
    const upper_limit2 = document.querySelector("#upper_limit2");
    const submit2 = document.querySelector("#submit2");
    const output2 = document.querySelector(".output2");

    submit2.addEventListener("click", event => {
        event.preventDefault();

        let num = parseInt(input2.value);
        let low = parseInt(lower_limit2.value);
        let high = parseInt(upper_limit2.value);
        let arr_old = new Array(num);

        for(let i=0; i < arr_old.length; i++){
            arr_old[i] = Math.floor(Math.random() * 100);
        }
        
        output2.textContent = filterRange(arr_old, low, high);
        console.log(arr_old);
    });

    function filterRange(arr, a, b){
        return arr.filter((element) => element >= a && element <= b);
    }
};
//form3 -- array filter limit >= low and <= high but it should not return anything.
//It should only modify the array
{
    const input3 = document.querySelector("#input3");
    const lower_limit3 = document.querySelector("#lower_limit3");
    const upper_limit3 = document.querySelector("#upper_limit3");
    const submit3 = document.querySelector("#submit3");
    const output3 = document.querySelector(".output3");

    submit3.addEventListener("click", event => {
        event.preventDefault();

        let num = parseInt(input3.value);
        let low = parseInt(lower_limit3.value);
        let high = parseInt(upper_limit3.value);   
        let arr_old = new Array(num);

        for(let i=0; i < arr_old.length; i++){
            arr_old[i] = Math.floor(Math.random() * 100);
        }
        
        output3.textContent = filterRangeInPlace(arr_old, low, high);
        console.log(arr_old);
    });

    function filterRangeInPlace(arr, a, b){
        for(let i=0; i<arr.length; i++){
            if(arr[i] < a || arr[i] > b){
                arr.splice(i, 1);
            }
        }
        return arr;
    }
};
//form4 -- sort in decreasing order
{
    const input4 = document.querySelector("#input4");
    const submit4 = document.querySelector("#submit4");
    const output4 = document.querySelector(".output4");

    submit4.addEventListener("click", event => {
        event.preventDefault();
        let num = parseInt(input4.value);
        const arr = new Array(num);

        for(let i=0; i<arr.length; i++){
            arr[i] = Math.floor(Math.random() * 100);
        }

        output4.textContent = arr.sort((a, b) => a-b).reverse(); 
    });
};
//form5 -- copy and sort array
{
    const input5 = document.querySelector("#input5");
    const submit5 = document.querySelector("#submit5");
    const output5 = document.querySelector(".output5");

    submit5.addEventListener("click", event => {
        event.preventDefault();
        
        const text = input5.value;
        const arr_old = text.split(", ");
        const arr_new = [...arr_old];
        console.log(arr_old);
        output5.textContent = arr_new.sort();
    });
};
//form6 -- constructor function to create a calculator
/*
{
    const fn6 = document.querySelector("#first_number6");
    const sn6 = document.querySelector("#second_number6");
    const op6 = document.querySelector("#operator6");
    const submit6 = document.querySelector("#submit6");
    const output6 = document.querySelector(".output6");

    submit6.addEventListener("click", event => {
        event.preventDefault();

        let num1 = parseFloat(fn6.value);
        let num2 = parseFloat(sn6.value);
        let operator = op6.value;
        
        function Calculator(n1, n2, op){
            this.n1 = n1;
            this.n2 = n2;
            this.op = op;
        }
        Calculator.prototype.calculate = function(){
            let answer;

            switch(this.op){
                case "+":
                    answer = this.n1 + this.n2;
                    break;
                case "-":
                    answer = this.n1 - this.n2;
                    break;
                case "*":
                    answer = this.n1 * this.n2;
                    break;
                case "/":
                    answer = this.n1 / this.n2;
                    break;
                case "%":
                    answer = this.n1 % this.n2;
                    break;
                case "**":
                    answer = this.n1 ** this.n2;
                    break;
                default:
                    answer = `Invalid operator`;
                    break;
            }
            return `answer: ${answer.toFixed(2)}`;
        }

        let calc = new Calculator(num1, num2, operator);
        output6.textContent = calc.calculate();
    });
};
*/
//form6.5 -- need to rewrite it. I misunderstood the instruction but the above code works fine.

{
    const fn6 = document.querySelector("#first_number6");
    const sn6 = document.querySelector("#second_number6");
    const op6 = document.querySelector("#operator6");
    const submit6 = document.querySelector("#submit6");
    const output6 = document.querySelector(".output6");

    function Calculator(){
    }
    Calculator.prototype.methods = {
        "-": function(a, b){
            return a - b;
        },
        "+": function(a, b){
            return a + b;
        },   
    };

    Calculator.prototype.calculate = function(str){
        let split = str.split(" ");
        a = +split[0];
        b = +split[2];
        op = split[1];
        
        return this.methods[op](a, b);
    }

    Calculator.prototype.addMethod = function(name, func){
        this.methods[name] = func;
    }
    
    submit6.addEventListener("click", event => {
        event.preventDefault();
        let n1 = fn6.value;
        let n2 = sn6.value;
        let ops = op6.value;


        let calc = new Calculator();
        calc.addMethod("*", (a, b) => a * b);
        calc.addMethod("/", (a, b) => a / b);
        calc.addMethod("%", (a, b) => a % b);
        calc.addMethod("**", (a, b) => a ** b);
        output6.textContent = calc.calculate(`${n1} ${ops} ${n2}`);
        
    });
};

//form7 -- converting object to an array
{
    const submit7 = document.querySelector("#submit7");
    const output7 = document.querySelector(".output7");

    submit7.addEventListener("click", event => {
        event.preventDefault();
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ john, pete, mary ];
        
        output7.textContent = users.map(element => element.name);
    });
};

//form 8 -- mapping na object
{
    const submit8 = document.querySelector("#submit8");
    const output8 = document.querySelector(".output8");

    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    submit8.addEventListener("click", event => {
        event.preventDefault();
        const obj = users.map(element => {
            const tempObj = {};
            tempObj.fullName = `${element.name} ${element.surname}`;
            tempObj.id = element.id;
            return tempObj;
        });
        output8.textContent = obj;
    });
};

//form 9 -- sort users by age
{
    const submit9 = document.querySelector("#submit9");
    const output9 = document.querySelector(".output9");

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    submit9.addEventListener("click", event => {
        event.preventDefault();
        output9.textContent = sortByAge(arr);
    });
    function sortByAge(arr1){
        return arr1.sort((a, b) => a.age - b.age);
    }
};

//form 10 -- shuffle an array;
{
    const submit10 = document.querySelector("#submit10");
    const output10 = document.querySelector(".output10");

    const arr10 = [26, 98, 43, 36, 55, 100];

    submit10.addEventListener("click", event => {
        event.preventDefault();
        output10.textContent = `before: ${arr10} after: ${shuffleAnArray(arr10)}`;
    });
    function shuffleAnArray(array){
        let random_index = 0;
        for(let i=0; i<array.length; i++){
            random_index = Math.floor(Math.random() * array.length);
            [array[i], array[random_index]] = [array[random_index], array[i]];
        }
        return array;
    }
};

//form 11 -- get average from object
{
    const submit11 = document.querySelector("#submit11");
    const output11 = document.querySelector(".output11");

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    function getAverageAge(array){
        let totalAge = array.reduce((acc, current_elem) => acc + current_elem.age, 0);
        return totalAge/array.length;
    }

    submit11.addEventListener("click", event => {
        event.preventDefault();
        output11.textContent = getAverageAge(arr);
    });
};

//form 12 -- filter unique array
{
    const submit12 = document.querySelector("#submit12");
    const output12 = document.querySelector(".output12");

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    function unique(arr){
        return arr.reduce((acc, element) => {
            if(!acc.includes(element)){
                acc.push(element);
            }
            return acc;
        }, []);
    }
    submit12.addEventListener("click", event => {
        event.preventDefault();
        output12.textContent = unique(strings);
    });
};

//form 13 -- create an object out of array of objects
{
    const submit13 = document.querySelector("#submit13");
    const output13 = document.querySelector(".output13");

    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    function groupById(arr){
        return arr.reduce((acc, element) => {
            acc[element.id] = element;
            return acc;
        }, {});
    }

    submit13.addEventListener("click", event => {
        event.preventDefault();
        output13.textContent = groupById(users);
        console.log(groupById(users));
    });
};


