import '../Style/style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return(
        <div id="mainDiv">
            <header>
                <h1>Find fuel</h1>
                <form>
                    <input type="text" name="search"/>
                    <input type="submit" value="search"/>
                </form>
            </header>


        </div>
    )
}