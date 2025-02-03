export interface IGithubRepositoryInformation {
    id: number;
    name: string;
    language: string | null;
    html_url: string;
    created_at: string;
    updated_at: string;
}