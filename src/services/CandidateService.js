const STORAGE_KEY = 'cine_bea_mai_mult_data';

const INITIAL_CANDIDATES = [
  { id: '1', name: 'Andrei', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrei', votes: 12 },
  { id: '2', name: 'Maria', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', votes: 15 },
  { id: '3', name: 'Ionut', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ionut', votes: 8 },
  { id: '4', name: 'Elena', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', votes: 20 },
  { id: '5', name: 'Radu', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Radu', votes: 5 },
  { id: '6', name: 'Ana', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', votes: 18 },
];

export const CandidateService = {
  getData: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : INITIAL_CANDIDATES;
  },

  saveData: (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  getCandidates: () => {
    return CandidateService.getData();
  },

  vote: (id) => {
    const candidates = CandidateService.getData();
    const updated = candidates.map(c => 
      c.id === id ? { ...c, votes: c.votes + 1 } : c
    );
    CandidateService.saveData(updated);
    return updated.find(c => c.id === id);
  },

  addCandidate: (name, image) => {
    const candidates = CandidateService.getData();
    const newCandidate = {
      id: Date.now().toString(),
      name,
      image,
      votes: 0
    };
    CandidateService.saveData([...candidates, newCandidate]);
    return newCandidate;
  },

  getLeaderboard: () => {
    const candidates = CandidateService.getData();
    return [...candidates].sort((a, b) => b.votes - a.votes).slice(0, 10);
  },

  getPair: () => {
    const candidates = CandidateService.getData();
    if (candidates.length < 2) return null;
    // Simple random pair
    const idx1 = Math.floor(Math.random() * candidates.length);
    let idx2 = Math.floor(Math.random() * candidates.length);
    while (idx1 === idx2) {
      idx2 = Math.floor(Math.random() * candidates.length);
    }
    return [candidates[idx1], candidates[idx2]];
  },
  
  getTopCandidate: () => {
      const candidates = CandidateService.getData();
      return candidates.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
  }
};
