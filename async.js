async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)

    });

    console.log(1);
    console.log(await promise) // wait until the promise resolves (*)
    console.log(2);

}

f();