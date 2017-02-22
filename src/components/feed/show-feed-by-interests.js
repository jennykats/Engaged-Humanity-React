import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleInFeed from './article-in-feed'

class ShowFeedByInterest extends Component {

  render() {
    if (!this.props.feed || this.props.feed.length === 0) {
      return (
        <div>
        </div>
      )
    } else {

      var article_divs = <div></div>

      if (this.props.feed.by_interests) {

        let feed_object = this.props.feed.by_interests;
        article_divs = Object.keys(feed_object).map(function(key) {

          let article = feed_object[key]["article"]
          let liked = feed_object[key]["liked"]

          return <ArticleInFeed key={article.id} article={ article } isLiked={liked}/>})
      }

      return (
        <div className="inner-feed-container">
          { article_divs }
        </div>
      )
    }
  }
}

function mapStatetoProps(state) {
  debugger
  return {
    feed: state.feed
  }
}

export default connect (mapStatetoProps)(ShowFeedByInterest)
