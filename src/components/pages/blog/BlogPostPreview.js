import React from "react";
import { Link } from 'react-router-dom';
import showdown from "showdown";
import ReactHtmlParser from 'react-html-parser';

export default class blogPostPreview extends React.Component {
  render() {
    var converter = new showdown.Converter();
    return (<div className="blogPostPreview">
    <h3 class="">{this.props.blogPost.title}</h3>
    <div class="blogPreviewBody">
    {ReactHtmlParser(converter.makeHtml(this.props.blogPost.body.substring(0,500) + "..."))} </div><Link to={"blog/post/" + this.props.blogPost._id}>Read More >></Link>
  </div>);
  }
}