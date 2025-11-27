import React, { useState, useEffect } from 'react';
import { CandidateService } from '../services/CandidateService';
import CandidateCard from './CandidateCard';
import './VotingRound.css';

const VOTES_PER_ROUND = 5;

const VotingRound = ({ onRoundComplete }) => {
    const [pair, setPair] = useState(null);
    const [votesCount, setVotesCount] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        loadNewPair();
    }, []);

    const loadNewPair = () => {
        const newPair = CandidateService.getPair();
        setPair(newPair);
    };

    const handleVote = (id) => {
        if (animating) return;

        setAnimating(true);
        CandidateService.vote(id);

        // Small delay for visual feedback
        setTimeout(() => {
            const newCount = votesCount + 1;
            setVotesCount(newCount);
            setAnimating(false);

            if (newCount >= VOTES_PER_ROUND) {
                onRoundComplete();
            } else {
                loadNewPair();
            }
        }, 500);
    };

    if (!pair) return <div className="loading">Se încarcă...</div>;

    return (
        <div className="voting-round">
            <h2>Cine bea mai mult?</h2>
            <div className="progress">Runda {votesCount + 1} / {VOTES_PER_ROUND}</div>
            <div className="cards-container">
                <CandidateCard
                    candidate={pair[0]}
                    onClick={handleVote}
                    disabled={animating}
                />
                <div className="vs-badge">VS</div>
                <CandidateCard
                    candidate={pair[1]}
                    onClick={handleVote}
                    disabled={animating}
                />
            </div>
        </div>
    );
};

export default VotingRound;
