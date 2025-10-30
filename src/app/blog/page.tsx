const articles = [
    { id: "1", title: "Title1" },
    { id: "2", title: "Title2" },
    { id: "3", title: "Title3" }
]

// wait 3 seconds
async function fetchArticles() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return articles
}

export default async function BlogPage() {
    const articles = await fetchArticles()
    return (
        <div>
            <ul>
                {articles.map((articles) => (
                    <li key = {articles.id}>
                        title: {articles.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
