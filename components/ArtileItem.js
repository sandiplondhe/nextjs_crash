import articlestyles from '../styles/Article.module.css';
import Link from 'next/link'
const ArtileItem=({article})=> {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articlestyles.card}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>    
            </a>
        </Link>
    )
}

export default ArtileItem
