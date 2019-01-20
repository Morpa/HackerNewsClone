import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Nav from 'components/Nav';
import List from 'components/List';
import Loader from 'components/Loader';
import { themes } from 'store/app/utils';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper } from './styles';

class App extends Component {
  static defaultProps = {
    stories: []
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, theme, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
          <Nav />
          <Wrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStores}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible'
              }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
