import "./style.css";

const JustImg = () => {
  return (
    <div className="show_section">
      <div className="show_first_part">
        <h1>
          Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry.
        </h1>
      </div>

      <div className="show_content">
        <h1>Lorem Ipsum</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry`s standard dummy text
          <br />
          ever since the 1500s,
        </p>
      </div>

      <div className="show_img">
        <img className="dotted_img" src="./img/Group-21.png" />

        <img className="show_main_img" src="./img/Rectangle-4.png" />
      </div>
    </div>
  )
}

export default JustImg