export default function ReviewDetails({
    params,
  }: {
    params: { reviewId: String };
  }) {
    return <div>Review details - {params.reviewId}</div>;
  }
  