import Rating from "@mui/material/Rating";

export default function RatingBar({
  rating,
}: {
  rating: { rate: number; n_reviewers: number };
}) {
  return (
    <div className="d-flex border-bottom">
      <p style={{ marginRight: "5px" }}>{rating.rate}</p>
      <Rating value={rating.rate} precision={0.1} size="medium" readOnly />
      <p style={{ marginLeft: "5px" }}>{rating.n_reviewers} reviews</p>
    </div>
  );
}
