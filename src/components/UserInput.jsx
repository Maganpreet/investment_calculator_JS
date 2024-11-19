
export default function UserInput({onUserInputChange, userInput}) {

    return (
        <div className="input-group" id="user-input">
            {userInput.map((field, key) => (
                <span key={key}>
                  <label>{field.label}</label>
                  <input type="number" onChange={(event) => onUserInputChange(event, field.label)} value={field.value}></input>
                </span>
            ))}
        </div>
    )
}