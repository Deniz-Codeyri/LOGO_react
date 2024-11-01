import "./style.css";

const Cards = () => {
    const arr = [
        {
            id:0,
            img:"card_img1.jpg",
            icon:"fire-1",
            text:"40 Followers"
        },
        {
            id:1,
            img:"card_1.jpg",
            icon:"fire-1",
            text:"40 Followers"
        },
        {
            id:2,
            img:"card_img3.jpg",
            icon:"fire-1",
            text:"40 Followers"
        },
        {
            id:3,
            img:"card_img4.jpg",
            icon:"fire-1",
            text:"40 Followers"
        }
    ]
  return (
   
    <div>
        <div className="cards_header">
            <h1 className="cards_header_text">Currently Trending Games</h1>

            <button>SEE ALL</button>
        </div>

        <div className="cards">

            {arr.map(({id,img,icon,text})=>(
                <div key={id}>
                <img className="cards_img" src={img}  alt="" />
                <img className="cards_icon" src={icon}/>
                <h2>{text}</h2>
                </div>
            ))}
            
        </div>

    </div>
   )
}

export default Cards;