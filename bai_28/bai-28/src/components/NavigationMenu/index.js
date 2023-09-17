function NavigationMenu() {

    const handleClick = (e) => {
        console.log(e);
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <>
            <div className="box">
                <div>NavigationMenu</div>
                <button onClick={handleClick} >Click Me</button>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Submit</button>
            </form>
        </>
    )
}

export default NavigationMenu