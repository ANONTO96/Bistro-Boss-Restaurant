
const Heading = ({heading, subHeading}) => {
    return (
        <div className="md:w-[60%] text-center mx-auto my-16">
            <p className="text-yellow-600">---{subHeading}---</p>
            <hr className="w-[80%] mx-auto" />
            <hr className="w-[80%] mx-auto" />
            <h3 className="text-2xl md:text-3xl uppercase border-b-4 py-4">{heading}</h3>
        </div>
    );
};

export default Heading;