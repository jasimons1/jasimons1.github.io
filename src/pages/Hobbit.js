import ImageSlider from "../ui/ImageSlider";
import openDoor from "../images/openDoor.jpg";
import erebor from "../images/erebor.jpg";
import smaug from "../images/smaug.jpg";
import dolGuldur from "../images/dolGuldur.jpg";

export default function Hobbit() {

    const sliderImages = [
        {image: openDoor, caption: "The image is unavailable"},
        {image: erebor, caption: "The image is unavailable"},
        {image: smaug, caption: "The image is unavailable"},
        {image: dolGuldur, caption: "The image is unavailable"}
    ];

    return (
        <div className="home">
            <h1 className="title">The Hobbit</h1>
            <div className="container">
                <div className="text">
                    <p>
                        <h2>Chapter I</h2>
                        <h3>An Unexpected Party</h3>
                        <p>In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                            ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit
                            down on or to eat: it was a hobbit hole, and that means comfort.</p>
                        <p>It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob
                            in the exact middle. The door opened on to a tube shaped hall like a tunnel: a very
                            comfortable tunnel without smoke, with panelled walls, and floors tiled and carpeted,
                            provided with polished chairs, and lots and lots of pegs for hats and coats the hobbit was
                            fond of visitors. The tunnel wound on and on, going fairly but not quite straight into the
                            side of the hill.</p>
                        <p>The Hill, as all the people for many miles round called it and many little
                            round doors opened out of it, first on one side and then on another. No going upstairs for
                            the hobbit: bedrooms, bathrooms, cellars, pantries (lots of these), wardrobes (he had whole
                            rooms devoted to clothes), kitchens, dining rooms, all were on the same floor, and indeed on
                            the same passage. The best rooms were all on the left hand side (going in), for these were
                            the only ones to have windows, deep set round windows looking over his garden and meadows
                            beyond, sloping down to the river.</p>
                        <p>This hobbit was a very well to do hobbit, and his name was Baggins.</p>
                    </p>
                </div>
                <div className="slider"><ImageSlider images={sliderImages}/></div>
            </div>
        </div>
    )
}