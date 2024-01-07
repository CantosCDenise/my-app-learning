export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.currentTarget)
    }

    return (
    <div>
        <button name="one" onClick={handleButtonClick}>
            <img width={50} height={50}/>
            Click me
            </button>
        <button name="two" onClick={handleButtonClick}>Click me</button> 
    </div>
    )        
}