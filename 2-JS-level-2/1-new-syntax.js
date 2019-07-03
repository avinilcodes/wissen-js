

//spread method

let num = [1,2,3,4,4]

let maxNum = Math.max(...num)

//symbols and iterables

//symbols are unique & immutable value 

// if you want to use your object as iterable then implement symbol iterator

//GENERATOR function

function* gen() {
    console.log('started')
    yield 1
    console.log('foo')
    yield 2
    console.log('baz')
    yield 3
}

function* func() {
    var i = 0;
    while (i < 5) {
        yield i
        i++;
    }
}

//collection(s)
let set = new Set();
set.add(1)
set.add(2)
set.add(1)

let literalMap ={
    key1:'value1',
    key2:'value2'
}

let ow1={name : 'Avinil'}
let ow2={name:'Rajendrakumar'}



let map = new Map()

