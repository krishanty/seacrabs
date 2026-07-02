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
            
            {/* <div class="news-card">
                <div class="news-header">
                    <h2>AI start-up Firmus, Nvidia to build data centre in Batam</h2>
                    <div class="news-date">29 June 2026</div>
                </div>
                <ul class="news-tags">
                    <li>Indonesia</li>
                    <li>Data centre</li>
                    <li>Batam</li>
                    <li>AI</li>
                </ul>
                <div class="blurb">
                    <p>
                        Firmus Technologies will build its first data centre project in Indonesia as part of a partnership with US chip giant Nvidia, which the Australian artificial intelligence infrastructure firm said is expected to win it as much as US$30 billion (S$38.8 billion) in committed off-take agreements in its first six years.
                    </p>
                </div>
                <div class="news-source"><a href="https://www.straitstimes.com/business/companies-markets/ai-start-up-firmus-to-build-data-centre-in-batam-with-nvidia" title="Straits Times"></a>Straits Times</div>
            </div>

            <div class="news-card">
                <div class="news-header">
                    <h2>Global sand demand is outpacing supply and threatening ecosystems, UN says</h2>
                    <div class="news-date">12 May 2026</div>
                </div>
                <ul class="news-tags">
                    <li>UN</li>
                    <li>Sand mining</li>
                </ul>
                <div class="blurb">
                    <p>Growing global demand for sand, driven by rapid urbanisation ​and construction, is exceeding sustainable supply and putting ecosystems and livelihoods at risk, ‌the United Nations said in a report on Tuesday.
About 50 billion tons of sand is used per year for building and a range of other purposes, and demand for sand is expected to ​double by 2060 under current trajectories - a rate faster than stocks can be ​replenished, a report by the U.N. Environment Programme showed.</p>
                </div>
                <div class="news-source"><a href="https://www.reuters.com/business/environment/global-sand-demand-is-outpacing-supply-threatening-ecosystems-un-says-2026-05-12/"></a>Reuters</div>
            </div> */}
        </div>

    )
};

export default News