import { Grid } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

export const GalleryGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  padding-right: 1rem;
  padding-left: 1rem;
  overflow-y: auto;
  max-height: 25rem;
`;

export const CustomInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageGrid = styled(Grid)`
  flex-grow: 1;
  height: 30vh;
  margin: 5px;
  border: solid 1px black;
  cursor: pointer;

  @media (max-aspect-ratio: 1/1) and (max-width: 600px) {
    height: auto;
  }
`;
