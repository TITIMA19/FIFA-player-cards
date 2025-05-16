import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, ImageURL }) => {
    const playerStyle = {
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        width: '150px',
    };

    return (
        <div style={playerStyle}>
            <img src={ImageURL} alt={name} style={{ width: '100px', height: 'auto' }} />
            <h3>{name}</h3>
            <p>Team: {team}</p>
            <p>Nationality: {nationality}</p>
            <p>Jersey Number: {jerseyNumber}</p>
            <p>Age: {age}</p>
        </div>
    );
};


export default Player;