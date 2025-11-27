const STORAGE_KEY = 'cine_bea_mai_mult_data';

const INITIAL_CANDIDATES = [
  { id: '1', name: 'Tavisimo', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tavisimo', votes: 0 },
  { id: '2', name: 'Aris', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aris', votes: 0 },
  { id: '3', name: 'Rares', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rares', votes: 0 },
  { id: '4', name: 'Matei', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Matei', votes: 0 },
  { id: '5', name: 'Valentina (val)', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina', votes: 0 },
  { id: '6', name: 'Alexandra', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra', votes: 0 },
  { id: '7', name: 'Melina', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Melina', votes: 0 },
  { id: '8', name: 'Tudor melu', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tudor', votes: 0 },
  { id: '9', name: 'Bianca preda', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bianca', votes: 0 },
  { id: '10', name: 'dorina', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dorina', votes: 0 },
  { id: '11', name: 'mihnea', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mihnea', votes: 0 },
  { id: '12', name: 'Maria Lavinia', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', votes: 0 },
  { id: '13', name: 'Laur', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Laur', votes: 0 },
  { id: '14', name: 'Alexia', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexia', votes: 0 },
  { id: '15', name: 'Andrei Stanciu', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrei', votes: 0 },
  { id: '16', name: 'Vlad', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vlad', votes: 0 },
  { id: '17', name: 'Bella', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella', votes: 0 },
  { id: '18', name: 'Tony', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tony', votes: 0 },
  { id: '19', name: 'Teo', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Teo', votes: 0 },
  { id: '20', name: 'Robert', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', votes: 0 },
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

