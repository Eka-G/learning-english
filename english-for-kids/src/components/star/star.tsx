import './star.css';

interface StarProps {
  imgPath: string;
}

const Star = ({ imgPath }: StarProps) => {
  return <div className="star" style={{ backgroundImage: `url(./media/${imgPath})` }} />;
};

export default Star;
