import './Carousel.css'

const Mycard = (props) => {
    return (
        <div className='Mycard'>
            <img src={props.src} alt="" />
        </div>
    )
}

export default Mycard