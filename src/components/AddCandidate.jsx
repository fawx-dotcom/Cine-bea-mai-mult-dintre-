import React, { useState } from 'react';
import { CandidateService } from '../services/CandidateService';
import './AddCandidate.css';

const AddCandidate = ({ onBack, onAdded }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && image) {
            CandidateService.addCandidate(name, image);
            onAdded();
        }
    };

    return (
        <div className="add-candidate">
            <h2>Adaugă un candidat</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nume</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Ion Popescu"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Poză</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview" />
                        </div>
                    )}
                </div>
                <div className="actions">
                    <button type="button" className="btn-secondary" onClick={onBack}>Anulează</button>
                    <button type="submit" className="btn-primary" disabled={!name || !image}>Adaugă</button>
                </div>
            </form>
        </div>
    );
};

export default AddCandidate;
