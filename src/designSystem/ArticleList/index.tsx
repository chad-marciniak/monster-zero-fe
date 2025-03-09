import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ArticleTile } from "../ArticleTile";
import useColorPalette from "../../hooks/useColorPalette";

type Article = {
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
    colorScheme: {
        date: string;
        title: string;
        description: string;
        button: string;
        dropshadow: string;
    };
};

const fetchArticles = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
    
        if (data.length === 0 || data === undefined || data.errors || data.error) { 
            throw new Error("No data found");
        }
        console.log("data: ", data);
        return data;
    } catch (error) {
        throw new Error(`Error fetching articles: ${(error as Error).message}`);
    }
}

export const ArticleList = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [articles, setArticles] = useState<Article[]>([]);
    const palette = useColorPalette();

    const { data, error, isLoading } = useQuery<Article[]>('articles', fetchArticles, {
        initialData: undefined,
    });
    
    useEffect(() => {
        if ((data?.length ?? 0) > 0 || data === undefined) {
            const articles = (palette.length !== 0 && data) ? (data as Article[]).map((article: Article, index: number) => {
                return {
                    ...article,
                    colorScheme: {
                        date: palette[index][1],
                        title: palette[index][0],
                        description: palette[index][0],
                        button: palette[index][0],
                        dropshadow: palette[index][3],
                    },
                };
            }) : [];
            setArticles(articles);
            setDataLoaded(true);
        }
        return () => {
            setDataLoaded(false);
        }
    }, [data, palette]);

    return (
        <div className="article__list_container">
            {
            error ? (
                <div>Error fetching articles</div>
            ) : (
                articles.length && articles?.map((article, index) => (
                dataLoaded === false && isLoading === true ? (
                    <div>Loading...</div>
                ) : (
                <ArticleTile 
                    url="" 
                    key={`article__tile_${index}`} 
                    {...article} 
                    className={`article-tile ${index === 0 ? 'full-opacity' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                />
                )))
            )
            }
        </div>
    );
};