import React, { useState } from 'react';
import VotingRound from './components/VotingRound';
import Leaderboard from './components/Leaderboard';
import AddCandidate from './components/AddCandidate';
import GameSummary from './components/GameSummary';
import './App.css';

function App() {
  const [view, setView] = useState('voting'); // 'voting', 'summary', 'leaderboard', 'add'

  const renderView = () => {
    switch (view) {
      case 'voting':
        return <VotingRound onRoundComplete={() => setView('summary')} />;
      case 'summary':
        return (
          <GameSummary
            onPlayAgain={() => setView('voting')}
            onShowLeaderboard={() => setView('leaderboard')}
            onAddCandidate={() => setView('add')}
          />
        );
      case 'leaderboard':
        return <Leaderboard onBack={() => setView('summary')} />;
      case 'add':
        return <AddCandidate onBack={() => setView('summary')} onAdded={() => setView('voting')} />;
      default:
        return <VotingRound onRoundComplete={() => setView('summary')} />;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>🍻 Cine bea mai mult?</h1>
      </header>
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;
