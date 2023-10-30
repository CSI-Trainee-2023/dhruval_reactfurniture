import './Carousel.css'
import PropTypes from 'prop-types'

const Mycard = (props) => {
    return (
        <div className='Mycard'>
            <img src={props.src} alt="" />
        </div>
    )
}

Mycard.propTypes = {
    src: PropTypes.string.isRequired,
}

export default Mycard