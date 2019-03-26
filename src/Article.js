import React from 'react';
import Disqus from '../node_modules/disqus-react';
// Alternatively, import specific members:/home/matej/ReactDisqus/ReactSamples/src
import { DiscussionEmbed, CommentCount } from 'disqus-react';
//Module not found: Can't resolve 'disqus-react' in '/home/matej/ReactDisqus/ReactSamples/src'
class Article extends React.Component {
    render() {
        const disqusShortname = 'example';
        const disqusConfig = {
            url: 'http://www.youtube.com',
            identifier: '56',
            title: 'disqusconfig.title',
        };

        return (
            <div className="article">
                <h1>{'GO!'}</h1>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <p>this.props.article.body</p>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}

export default Article;