// @flow
import React, {useContext, useState} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components';
import ResizeObserver from 'react-resize-observer';

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#FFFFFF',
});

const SearchDiv = styled('div', {
  display: 'grid',
  gridTemplateColumns: '30px 8fr 1fr 1fr 1fr',
  border: '1px solid gainsboro',
  marginBottom: '8px',
});

const ButtonIcon = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

const ButtonIconClose = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  marginRight: '-12px',
});

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
const Components = () => {
  const {setSearch, fetchGifs, searchKey} = useContext(SearchContext);
  // eslint-disable-next-line cup/no-undef
  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(1);

  return (
    <FullHeightDiv>
      <SearchDiv>
        <ButtonIconClose
          onClick={() => setSearch('')}
          style={{color: searchKey === '' ? 'white' : 'hotpink'}}
        >
          <i className="fad fa-times fa-xs"></i>
        </ButtonIconClose>
        <SearchBar autoFocus={true} clear={true} />
        <ButtonIcon
          onClick={() => setColumns(1)}
          style={{color: columns === 1 ? 'hotpink' : ''}}
        >
          <i className="fad fa-th-list fa-lg"></i>
        </ButtonIcon>
        <ButtonIcon
          onClick={() => setColumns(2)}
          style={{color: columns === 2 ? 'hotpink' : ''}}
        >
          <i className="fad fa-th-large fa-lg"></i>
        </ButtonIcon>
        <ButtonIcon
          onClick={() => setColumns(3)}
          style={{color: columns === 3 ? 'hotpink' : ''}}
        >
          <i className="fad fa-th fa-lg"></i>
        </ButtonIcon>
      </SearchDiv>
      <Grid
        key={searchKey}
        fetchGifs={fetchGifs}
        noResultsMessage={
          searchKey === '' ? '' : `No results found for: ${searchKey}`
        }
        width={width}
        columns={columns}
        gutter={6}
      />
      <ResizeObserver
        onResize={({width}) => {
          setWidth(width);
        }}
      />
    </FullHeightDiv>
  );
};

// the search experience consists of the manager and its child components that use SearchContext
const GiphySearch = props => {
  return (
    <SearchContextManager apiKey={'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6'}>
      <Components />
    </SearchContextManager>
  );
};

export default GiphySearch;
