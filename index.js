function sayHelloWithName(name) {
    return () => {
        console.log(`Hello, ${name}`)
    }
}

const a = sayHelloWithName('prepod');
a();