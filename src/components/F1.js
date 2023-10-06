import "./style.css"

function F1()
{
    const mystyle = {
        color : "blue",
        background : "black"
    }
    return(
        <div>
            <h1 style = {{color:"red"}}>Inline style</h1>
            <h1 style = {mystyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
            <h1 class = "text-center text-success bg-dark">Bootstrap style</h1>
        </div>
    )
}

export default F1;