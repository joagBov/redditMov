
const fetchPosts = async (subreddit) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`);
        const data = await response.json();
        return data.data.children.map(post => post.data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};