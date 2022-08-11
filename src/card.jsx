const review = (props) => {
    return (
        <div className="review" style={{ opacity: props.opacity }} >
            <div className="cropper">
                <img className="displayPicture" src={props.link} alt="face profile" />
            </div>
            <h3 className="name">{props.name}</h3>
            <h4 className="job">{props.job}</h4>
            <p className="about">{props.about}</p>
        </div>
    )
}
export default review;