import React, { Component } from 'react'
import ShowFeedByFollowingLikes from './show-feed-by-following-likes'
import ShowFeedByInterests from './show-feed-by-interests'
import Tabs from 'react-simpletabs'

class FeedTabs extends Component {
  render() {
    return <div id="feed-container">
      <Tabs>
        <Tabs.Panel title='Trusted Articles'>
          < ShowFeedByFollowingLikes />
        </Tabs.Panel>
        <Tabs.Panel title='Articles by Interests'>
          < ShowFeedByInterests />
        </Tabs.Panel>
        <Tabs.Panel title='Create Article'>
          < ShowFeedByInterests />
        </Tabs.Panel>
      </Tabs>

    </div>
  }
}

export default FeedTabs
