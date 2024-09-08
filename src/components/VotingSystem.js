// src/components/VotingSystem.js
import React, { useState, useEffect } from 'react';

function VoteItem({ item, votes, onVote }) {
    return (
        <div>
            <h2>{item}</h2>
            <p>Votes: {votes}</p>
            <button onClick={() => onVote(1)}>Upvote</button>
            <button onClick={() => onVote(-1)}>Downvote</button>
        </div>
    );
}

function TotalVotes({ total }) {
    return <h3>Total Votes: {total}</h3>;
}

function VotingSystem() {
    const initialVotes = { item1: 0, item2: 0, item3: 0 };
    const [votes, setVotes] = useState(initialVotes);

    // Load votes from local storage on mount
    useEffect(() => {
        const savedVotes = JSON.parse(localStorage.getItem('votes'));
        if (savedVotes) {
            setVotes(savedVotes);
        }
    }, []);

    // Save votes to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (item, value) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [item]: prevVotes[item] + value,
        }));
    };

    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

    return (
        <div>
            <h1>Voting System</h1>
            <VoteItem item="Item 1" votes={votes.item1} onVote={(value) => handleVote('item1', value)} />
            <VoteItem item="Item 2" votes={votes.item2} onVote={(value) => handleVote('item2', value)} />
            <VoteItem item="Item 3" votes={votes.item3} onVote={(value) => handleVote('item3', value)} />
            <TotalVotes total={totalVotes} />
        </div>
    );
}

export default VotingSystem;
