// function sayHelloWithName(name) {
//     return () => {
//         console.log(`Hello, ${name}`)
//     }
// }

// const a = sayHelloWithName('prepod');
// a();

export const withLoading = (Component) => {
    return (props) => {
        const {isLoading, error, ...restProps} = props;
        if (isLoading) return <h2>Загрузка...</h2>
        if (error) return <h2>{error}</h2>
        return <Component {...restProps} />
    }
}