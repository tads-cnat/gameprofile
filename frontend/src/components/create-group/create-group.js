function CreateGroup(){

    return(
        <div>
            <form>
                <div>
                    <label for='nome'></label>
                    <input type="text" id='nome'/>
                </div>
                <div>
                    {/* date input */}
                    <label for='data'></label>
                    <input type="date" id='data'/>
                </div>
                <div>
                    {/* time input */}
                    <label for='hora'></label>
                    <input type="time" id='hora'/>
                </div>
                
            </form>
        </div>
    )

}

export default CreateGroup;