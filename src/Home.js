function Home(){
    const welcome = "Welcome, confused souls";
    // document.body.style.width = '100%';
    // document.body.style.margin = 0;
    // document.documentElement.style.width = '100%';  
    // document.documentElement.style.margin = 0;
    // document.body.style.backgroundColor = 'lime';
    return (
        // <div style={{
        //     backgroundImage: "url(/sun.jpg)",
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     height:'100vh',
        //     display: 'grid',
        //     justifyContent: 'center'
        // }}>
            // <div style={{
            //     display: 'grid',
            //     alignItems: 'center',
            //     // alignContent: 'space-around',
            //     justifyContent: 'center',
            // }}>
        <div id="home-background">  
            <div id="home-element">
                <h1>{welcome}</h1>
                <button class="button-55" >Get some advice</button>
            </div>
        </div>
    );
}

export default Home