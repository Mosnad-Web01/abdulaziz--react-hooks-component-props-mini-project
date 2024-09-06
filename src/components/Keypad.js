// Code Keypad Component Here

function Keypad (){
    return (
        <div className="bg-red">
            <input type="password" onChange={(z) => console.log( 'Entering password...')
            } />

        </div>
    )
}

export default Keypad;