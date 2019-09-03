export const fetchPopularRepo = () => {
    return fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:all&sort=stars&order=desc&type=Repositories')
        .then(response => response.json())
        .then(result => result.items)
}