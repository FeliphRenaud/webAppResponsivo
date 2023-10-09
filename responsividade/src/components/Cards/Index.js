import './styles.css'

function Cards ({title, cover}){
    return(
        <div className='containerCard'
        style={{backgroundImage: `url(${cover})`}}>
            
            <div className='containerTitle'>
                <h1>{title}</h1>

            </div>

        </div>
    )
}

export default Cards;