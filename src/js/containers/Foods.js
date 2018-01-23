import {connect} from 'react-redux';
import FoodsList from '../components/FoodsList.jsx';


const mapStateToProps = state => {
    return {
        foodsArray : state.foods
    }
};

const Foods = connect(mapStateToProps)(FoodsList);

export default Foods;