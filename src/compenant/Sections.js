const Sections = ({ img }) => {
  return (
    <div className="Movie-list">
      {img.map((item, index2) => {
        // console.log(item2);
        return <img key={index2} src={item} alt="photos de films" />;
      })}
    </div>
  );
};

export default Sections;
