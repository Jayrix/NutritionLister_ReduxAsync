import {connect} from 'react-redux';
import FoodsList from '../components/FoodsList.jsx';

const mapStateToProps = state => {

}

const Foods = connect(mapStateToProps)(FoodsList);

export default Foods;