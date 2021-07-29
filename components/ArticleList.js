import articlestyles from '../styles/Article.module.css';
import ArtileItem from './ArtileItem';

function ArticleList({articles}) {
    return (
        <div className={articlestyles.grid}>
            {articles.map((article)=>(
                <ArtileItem article={article}/>
            ))}
        </div>
    )
}
export default ArticleList;