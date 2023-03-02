import DirectoryItem from '../directory-item/directory-item.component'
import {CategoriesContainer} from './directory.styles';

const Directory = ({categories}) => (
  <CategoriesContainer>
    {categories.map((category) => (
     <DirectoryItem key={category.id} category={category}/>
    ))}
  </CategoriesContainer>
);

export default Directory; 