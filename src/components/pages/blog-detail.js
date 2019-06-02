import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {}
    };
<<<<<<< HEAD
=======

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
  }

  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false
    });
  }

  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image_url: ""
      }
    });
  }

  handleEditClick() {
    console.log("handle edit clicked");
    if (this.props.loggedInStatus === "LOGGED_IN") {
    this.setState({ editMode: true });
>>>>>>> tmp
  }
}

  getBlogItem() {
    axios
      .get(
<<<<<<< HEAD
        `https://jordan.devcamp.space/portfolio/portfolio_blogs/${this.state
          .currentId}`
=======
        `https://wubbalubbadubbdub.devcamp.space/portfolio/portfolio_blogs/${
          this.state.currentId
        }`
>>>>>>> tmp
      )
      .then(response => {
        this.setState({
          blogItem: response.data.portfolio_blog
        });
      })
      .catch(error => {
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;

<<<<<<< HEAD
    return (
      <div className="blog-container">
        <div className="content-container">
          <h1>{title}</h1>
=======
    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm 
          handleFeaturedImageDelete={this.handleFeaturedImageDelete} 
          editMode={this.state.editMode} 
          blog={this.state.blogItem}
          handleUpdateFormSubmission={this.handleUpdateFormSubmission}
          />
        );
      } else {
        return (
          <div className="content-container">
            <h1 onClick={this.handleEditClick}>{title}</h1>

            <BlogFeaturedImage img={featured_image_url} />
>>>>>>> tmp

          <div className="featured-image-wrapper">
            <img src={featured_image_url} />
          </div>

          <div className="content">{content}</div>
        </div>
      </div>
    );
  }
}