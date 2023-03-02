import { Link } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const {imageUrl, title} = category;
    return (
        <div className="directory-item-container" >
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <Link to={`/shop/${title}`} className="body-container">
          <h2>{title}</h2>
          <h4>Shop now!</h4>
        </Link>
      </div>
    )
}

export default DirectoryItem