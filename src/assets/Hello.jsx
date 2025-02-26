const Hello = ({message, name}) =>{
    console.log({message, name});
    return (
        <div>
            <hi>
                {message} {name}
            </hi>
        </div>
    );
};
import PropTypes from 'prop-types';

Hello.propType = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Hello;