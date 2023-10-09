const BookmarkIcon = ({ fill }: { fill: string }) => {
  return (
    <svg aria-label="Save" role="img" viewBox="0 0 24 24">
      <title>Save</title>
      <polygon
        fill={fill}
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
    </svg>
  );
};

BookmarkIcon.defaultProps = {
  fill: "none",
};

export default BookmarkIcon;
