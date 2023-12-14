import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const editNameHandler = () => {
        setIsEditing((editing) => !editing);
        
        if(isEditing) {
            onChangeName(symbol, playerName)
        }
    };

    const changeHandler = (e) => {
        setPlayerName(e.target.value)
    }

    let finalPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        finalPlayerName = <input type="text" required value={playerName} onChange={changeHandler} />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {finalPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editNameHandler}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    );
}
