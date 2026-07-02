import React from "react";
import './News.css'
import newsJSON from './data/news.json';

const Tags = ({ tags }) => {
    return (
        <ul className="news-tags">
{        tags.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
};

const NewsItem = ({title, newsDate, tags, source, source_link, blurb}) => {
        return (
            <a href={source_link}>
                <div className="news-card">
                <div className="news-header">
                    <h2>{title}</h2>
                    <div className="news-date">{newsDate}</div>
                </div>
                <Tags tags={tags} />
                <div className="blurb">
                    {blurb}
                </div>
                <div className="news-source">Source: <em>{source}</em></div>
            </div>
        </a>
        )
    };

const News = () => {
    return (
        <div className="news-container">
            <h1>Latest News</h1>
            {
                newsJSON.map((entry) => (
                    <NewsItem 
                        title = {entry.title}
                        newsDate = {entry.date}
                        tags = {entry.tags}
                        source = {entry.source}
                        source_link = {entry.source_link}
                        blurb = {entry.blurb}
                    />
                ))
            }
        </div>

    )
};

export default News