import { Parallax } from 'react-parallax';

const BnrCover = ({img, title, description }) => {
    return (
        <Parallax
        blur={{ min: -35, max: 35 }}
        bgImage={img}
        strength={-200}
        style={{ // Key change: Style the Parallax component itself
        }}
    >
        <div
            className="hero h-[350px] md:h-[400px] lg:h-[450px] lg:px-24 pt-40"
            >
            <div className="hero-overlay bg-black bg-opacity-55"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                </div>
            </div>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
    );
};

export default BnrCover;