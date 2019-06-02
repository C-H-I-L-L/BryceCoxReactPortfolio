import React, { Component } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> tmp

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://wubbalubbadubbdubb.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
<<<<<<< HEAD
        this.setState({
          portfolioItem: response.data.portfolio_item
        });
=======
        this.setState ({
          portfolioItem: response.data.portfolio_item
        })
>>>>>>> tmp
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }
<<<<<<< HEAD

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
=======
  
  render() {
  const {
    banner_image_url,
    category,
    description,
    logo_url,
    name,
    thumb_image_url,
    url
  } = this.state.portfolioItem;

  return (
    <div className="container">
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
>>>>>>> tmp
  }
}
