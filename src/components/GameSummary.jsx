import React, { useEffect, useState } from 'react';
import { CandidateService } from '../services/CandidateService';
import './GameSummary.css';

const GameSummary = ({ onPlayAgain, onShowLeaderboard, onAddCandidate }) => {
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        setWinner(CandidateService.getTopCandidate());
    }, []);

    if (!winner) return null;

    return (
        <div className="game-summary">
            <h2>Câștigătorul Momentului</h2>
            <div className="winner-card">
                <img src={winner.image} alt={winner.name} />
                <h3>{winner.name}</h3>
                <p className="score">{winner.votes} puncte</p>
            </div>

            <div className="menu-options">
                <button className="btn-primary" onClick={onPlayAgain}>Joacă din nou</button>
                <button className="btn-secondary" onClick={onShowLeaderboard}>Vezi Topul</button>
                <button className="btn-secondary" onClick={onAddCandidate}>Adaugă Candidat</button>
            </div>
        </div>
    );
};

export default GameSummary;
