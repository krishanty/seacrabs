import React from "react";
import './News.css'
import newsJSON from './data/news.json';

const Tags = ({tags}) => {
    return (
        <ul className="news-tags">
{        tags.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
};

const NewsDate = ({newsDate}) => {
    const date_format = new Date(newsDate);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const new_date = new Intl.DateTimeFormat("en-UK", options).format(date_format);
    return <div className="news-date">{new_date}</div>;
};

const NewsItem = ({title, newsDate, tags, source, source_link, blurb}) => {
        return (
            <a href={source_link}>
                <div className="news-card">
                <div className="news-header">
                    <h2>{title}</h2>
                    <NewsDate newsDate = {newsDate}/>
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
                newsJSON.map((entry, index) => (
                    <NewsItem 
                        key = {index}
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