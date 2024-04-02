import "./index.scss";
import { ArticleTileButton } from "../Buttons/ArticleTileButton";
import './index.scss';

type ArticleTileProps = {
    title: string,
    description: string,
    date: string,
    url: string,
    colorScheme: {
        title: string,
        description: string,
        date: string,
        button: string,
        dropshadow: string
    }
};

export const ArticleTile = ({ title, description, date, url, colorScheme }: ArticleTileProps) =>  (
  <div className="pb-12 article__tile">
    <div style={{'color': `${colorScheme?.date || "#707070"}`}} className="article__date">{date}</div>
    <div className="article__title" style={{color: colorScheme.title, textShadow: `-1px 2px 0px ${colorScheme.dropshadow}` || "2px 3px 0px #282A33"}}>{title}</div>
    <div style={{'color': `${colorScheme?.description || "#707070"}`}} className="article__description">{description}</div>
    <ArticleTileButton baseColor={colorScheme?.button} url={url} />
  </div>
);

