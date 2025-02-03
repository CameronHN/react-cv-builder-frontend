import React, { useState, useEffect } from 'react';
import { Image, Text, Anchor } from '@mantine/core';
import { IGithubUserInformation } from '../../interfaces/IGithubUserInformation';
import { IGithubRepositoryInformation } from '../../interfaces/IGithubRepositoryInformation';

let user_url: string = "https://api.github.com/users/CameronHN";
let repo_url: string = 'https://api.github.com/users/CameronHN/repos';

const GithubComponent: React.FC = () => {

    const [userData, setUserData] = useState<IGithubUserInformation>();
    const [repositories, setRepositories] = useState<IGithubRepositoryInformation[]>([]);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (url: string, setData: Function, setError: Function) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const data = await response.json();
            setData(data);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const fetchUserData = async () => {
        await fetchData(user_url, setUserData, setError);
    };

    const fetchRepositories = async () => {
        await fetchData(repo_url, setRepositories, setError);
    };

    useEffect(() => {
        fetchUserData();
        fetchRepositories();
        setLoading(false);
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div>
                {userData && (
                    <div>
                        <br />
                        <Image src={userData.avatar_url} alt={userData.name} h={200} w='auto' fit='contain' mx='auto' radius={500} />
                        <Anchor href={userData.html_url} target="_blank"><h2><b>{userData.name}</b></h2></Anchor>
                    </div>
                )}
            </div>
            <div>
                <h4>GitHub Repositories</h4>

                {/* Map through the repositories, listing them */}
                {repositories.map(repo => (
                    <div key={repo.id}>
                        <hr />
                        <br />
                        <Text><b>Repository name: </b>{repo.name}</Text>
                        <Text><b>Language: </b>{repo.language || 'Not specified'}</Text>
                        <Anchor href={repo.html_url} target="_blank"><b>View on GitHub</b></Anchor>
                        <Text><b>Created: </b>{repo.created_at.substring(0, 10)} | <b>Updated: </b>{repo.updated_at.substring(0, 10)}</Text>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GithubComponent;
