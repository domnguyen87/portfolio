import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestCommit = () => {
    const [commit, setCommit] = useState(null);

    useEffect(() => {
        const fetchLatestCommit = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/domnguyen87/newwebsite/commits', {
                    params: {
                        per_page: 1
                    }
                });
                setCommit(response.data[0]);
            } catch (error) {
                console.error('Error fetching latest commit:', error);
            }
        };

        fetchLatestCommit();
    }, []);

    return (
        <div>
            {commit ? (
                <div>
                    <h2>My Latest Git Commit</h2>
                    <p><strong>Message:</strong> {commit.commit.message}</p>
                    <p><strong>Author:</strong> {commit.commit.author.name}</p>
                    <p><strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleString()}</p>
                    {/* <p><strong>URL:</strong> <a href={commit.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p> */}
                </div>
            ) : (
                <p>Loading latest commit...</p>
            )}
        </div>
    );
};

export default LatestCommit;
