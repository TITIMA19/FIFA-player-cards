import React from 'react';
import Player from './player';
import { players } from './players';

const PlayersList = () => {
    return (
        <div>
            <h2>Player List</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {players.map(player => (
                    <div key={player.jerseyNumber} style={{ margin: '10px' }}>
                        <Player {...player} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayersList;