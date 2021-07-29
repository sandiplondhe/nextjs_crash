import Head from 'next/head'

const Meta=({title,description,keywords})=> {
    return (
        <div>
            <Head>
                <meta name='viewport' content='width=device-width,intial-scale=1' />
                <meta name="keywords" content={keywords}/>
                <meta name="description" content={description}/>
                <title>{title}</title>
            </Head>
        </div>
    )
}
Meta.defaultProps={
    title:'WebDev News',
    keywords:'webdev web,programming',
    description:'Get the latest news'

}

export default Meta
