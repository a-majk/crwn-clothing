import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const {imageUrl, title} = category;
    return (
        <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <Body to={`/shop/${title}`}>
          <h2>{title}</h2>
          <h4>Shop now</h4>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;