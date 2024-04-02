import React, { useEffect, useState, useCallback } from "react";
import { ArticleTile } from "../ArticleTile";
import useColorPalette from "../../hooks/useColorPalette";

type ArticleListProps = {
    data: Array<{
        title: string;
        description: string;
        date: string;
        image: string;
        link: string;
    }>;
};

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

export const ArticleList = ({ data }: ArticleListProps) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [articles, setArticles] = useState<Article[]>([]);
    const palette = useColorPalette();

    const createArticles = useCallback(() => {
        const articles = (palette.length !== 0 && data) ? data.map((article, index) => {
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
    }, [data, palette]);

    useEffect(() => {
        if (data.length > 0) {
            createArticles();
            setDataLoaded(true);
        }
    }, [data, createArticles]);

    return (
        <div className="article__list_container">
            {
                articles.length && articles?.map((article, index) => (
                    <ArticleTile key={index} {...article} />
                ))
            }
        </div>
    );
};
