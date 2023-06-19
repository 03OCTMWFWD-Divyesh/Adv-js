(async () => {
    async function getStarCount (repo){
        const repoData = await fetch (repo);
        const repoJson = await repoData.json()
        return repoJson.stargazers_count;
    }

    const reactstars = await getStarCount ('https://api.github.com/repos/facebook/react');
    const vuestars = await getStarCount('https://api.github.com/repos/vuejs/core');
    // console.log(`react has ${reactstars} stars, where as vue has ${vuestars} stars`);
})();