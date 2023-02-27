import ImageSlider from "../ui/ImageSlider";
import fellowship from "../images/fellowship.jpg"
import argonath from "../images/argonath.jpg"
import minasTirith from "../images/minasTirith.jpg"
import baradDur from "../images/baradDur.png";

export default function Lotr() {

    const sliderImages = [
        {image: fellowship, caption: "The image is unavailable"},
        {image: argonath, caption: "The image is unavailable"},
        {image: minasTirith, caption: "The image is unavailable"},
        {image: baradDur, caption: "The image is unavailable"},
    ];

    return (
        <div>
            <div className="lotr">
                <h1 className="title">The Lord of the Rings</h1>
                <div className="slider"><ImageSlider images={sliderImages}/></div>
                <div className="text">
                    <p>
                        <h2>Chapter I</h2>
                        <h3>A Long-expected Party</h3>
                        <p>When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his
                            eleventy-first birthday with a party of special magnificence, there was much talk and
                            excitement in Hobbiton.</p>
                        <p>Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years,
                            ever since his remarkable disappearance and unexpected return. The riches he had brought
                            back from his travels had now become a local legend, and it was popularly believed, whatever
                            the old folk might say, that the Hill at Bag End was full of tunnels stuffed with
                            treasure.</p>
                        <p>And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time
                            wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same
                            as at fifty. At ninety-nine they began to call him well-preserved; but unchanged would have
                            been nearer the mark. There were some that shook their heads and thought this was too much
                            of a good thing; it seemed unfair that anyone should possess (apparently) perpetual youth as
                            well as (reputedly) inexhaustible wealth.</p>
                        <p>‘It will have to be paid for,’ they said. ‘It isn’t natural, and trouble will come of it!</p>
                    </p>
                </div>
            </div>
        </div>
    )
}