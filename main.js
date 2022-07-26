const loadJokes = async() => {
    try {
        const response = await fetch('https://icanhazdadjoke.com');

        console.log(response);

        const data = await response.jason();
        console.log (data);
    } catch (error){
        console.log(error);
    }
}
loadJokes();