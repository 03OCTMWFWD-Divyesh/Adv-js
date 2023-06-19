(async () => {
    async function getStarCount (repo){
        const repoData = await fetch (repo);
        const repoJson = await repoData.json()
        return repoJson.stargazers_count;
    }

    const reactStars = await getStarCount ('https://api.github.com/repos/facebook/react')
    const vueStars = await getStarCount ('https://api.github.com/repos/vuejs/core')
    console.log(`React has ${reactStars} stars, whereas Vue has ${vueStars} stars`)
})();