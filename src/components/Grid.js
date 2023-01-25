import Card from './Card';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const Grid = () => {
    const cards = [
        {
            title: "Know the right time to acquire bitcoins with lower price",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img1,
            smallTxt: "Bitcoin",
        },
        {
            title: "Saving Bitcoins can be a good investment for the future",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img2,
            smallTxt: "Bitcoin",
        },
        {
            title: "Economics experts give their views on the market for crypto coins",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img3,
            smallTxt: "Bitcoin",
        },
        {
            title: "Drones an indispensable tool for professionals from different sectors",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img4,
            smallTxt: "Drones",
        },
        {
            title: "Top Reasons Why Microsoft Discontinued Windows Phone",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img5,
            smallTxt: "Smartphones",
        },
        {
            title: "Check out some security tips to protect your data on your mobile device",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            imgUrl: img6,
            smallTxt: "Smartphones",
        }
    ];


  return (
    <section>
        <div class="container">
            <div class="row g-4">
                {
                    cards.map((card, index) => {
                        return(
                                <Card
                                key={index}
                                data={card}
                                />
                        )
                    }
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Grid