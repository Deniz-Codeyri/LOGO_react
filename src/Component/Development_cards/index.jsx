import "./style.css"

const Development_cards = () => {

    const arr = [
        {
            img:"./img/smartphone.png",
            content:"Mobile Game Development"

        },
        {
            img:"./img/Group.png",
            content:"Mobile Game Development"

        }
    ]

  return (

    <div className="development_section">

      <div className="development_content">
        <h1>
          Lorem Ipsum is simply dummy text of the printing<br />
          and typesetting industry.
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />industry`s standard dummy
          text ever since the 1500s,
        </p>
      </div>

      <div className="development_cards">

        <div className="development_card">

            {arr.map(({img,content})=>{

                <div>
                    <div className="img_part">
                    <img src={img} />
                    </div>
                
                    <div className="development_card_content">
                    <h3>{content}</h3>
                    </div>
                
                    <div className="development_arrow">
                    <img src="./img/Group (1).png" />
                    </div>
                </div>

            })}
          

        </div>

      </div>
    </div>
  )
}

export default Development_cards;