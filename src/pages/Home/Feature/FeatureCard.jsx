import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
    const { title, description, icon } = feature;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="w-full h-52">
                <img
                    src={icon}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    feature: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeatureCard;