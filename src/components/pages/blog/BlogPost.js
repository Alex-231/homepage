import React from "react"
import { Link } from 'react-router-dom';
import { getAllLoadedPosts } from "../Blog"
import request from "superagent"
import ReactHtmlParser from 'react-html-parser';
import { apiHandler, showdownConverter } from "../../../App";

export default class BlogPostPreview extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      blogPost: null,
      errorCount: 0
    };
    this.getPostData = this.getPostData.bind(this);
  }

  getPostData() {
    getAllLoadedPosts().forEach(loadedPost => {
      if(loadedPost.props.blogPost._id === this.props.match.params.postID)
      {
        this.setState({blogPost: loadedPost.props.blogPost});
        return;
      }
    });

    apiHandler.blogPost(this.props.match.postID,
    j => {
      this.setState({blogPost: j.data});
    },
    () => {
      this.setState({errorCount: this.state.errorCount + 1})
    });
  }

  render() {
    if(this.state.blogPost == null)
    {
      if(this.state.errorCount >= 3)
      {
        return (
          <div className="page">
            <div id="blogPost" className="centerMargins failedLoad">
              <h1>Failed to load blog post.</h1>
              <p>
                The blog may be down for maintainence. 
                <br/>
                Please try again later.
                <br/>
              </p>
              <span onClick={this.props.history.goBack}>Go Back</span>
              <br/>
              <Link to="/">Go to Portfolio</Link>
            </div>
          </div>
        );
      }

      this.getPostData();

      if(this.state.errorCount > 0)
      {
        return (
          <div className="page">
            <div id="blogPost" className="centerMargins">
              <h2>Loading...</h2>
              <p>An error occured while loading the blog post.
                <br/>
                Trying {3-this.state.errorCount} more times...
              </p>
            </div>
          </div>
        );
      }

      return (
        <div className="page">
          <div id="blogPost" className="centerMargins">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    }

    return (    
      <div className="page">
        <div id="blogPost" className="centerMargins">
          <h1 className="postTitle">{this.state.blogPost.title}</h1>
          {apiHandler.isUserLogged() ? <small>{this.state.blogPost._id}</small> : null}
          <hr/>
          <div className="postBody">
            {ReactHtmlParser(showdownConverter.makeHtml(this.state.blogPost.body))}
          </div>
        </div>
      </div>
    );
  }
}