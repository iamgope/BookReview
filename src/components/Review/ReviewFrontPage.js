import { useState } from "react";
import { Grid } from "@mui/material";
import ReviewForm from "./Create/CreateReviewPage";
import FinishPage from "./Create/Finish";
import DataTable from "./Create/Requests";
import SelectionPaper from "../UI/selectionPaper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const ReviewFrontPage = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ReviewId = props.ReviewId;
  const PostQuestionData = props.PostQuestionData;

  const PostRequests = props.PostRequests;
  const postData = props.PostData;

  const [currPage, setCurrpage] = useState("A");
  let CurrentDisplay;
  if (currPage === "A") {
    CurrentDisplay = <DataTable Requests={PostRequests} />;
  } else if (currPage === "B") {
    CurrentDisplay = (
      <ReviewForm
        QuestionList={PostQuestionData}
        BookCoverImage={`https://res.cloudinary.com/iamgope/${postData.BookCoverImage}`}
      />
    );
  } else if (currPage === "C") {
    CurrentDisplay = <FinishPage currentPost={ReviewId} PostData={postData} />;
  }

  return (
    <>
      <Grid container sx={{ marginTop: "2%", justifyContent: "center" }}>
        <>
          <Grid item sx={{ marginInline: "1%" }}>
            <SelectionPaper currPage={currPage === "A"}>
              <h3
                style={{ fontSize: isMobile ? "1.3ch" : "2vh" }}
                onClick={() => setCurrpage("A")}
              >
                View Requests
              </h3>
            </SelectionPaper>
          </Grid>
          <Grid item sx={{ marginInline: "1%" }}>
            <SelectionPaper currPage={currPage === "B"}>
              <h3
                style={{ fontSize: isMobile ? "1.3ch" : "2vh" }}
                onClick={() => setCurrpage("B")}
              >
                Add Questions
              </h3>
            </SelectionPaper>
          </Grid>
          <Grid item sx={{ marginInline: "1%" }}>
            <SelectionPaper currPage={currPage === "C"}>
              <h3
                style={{ fontSize: isMobile ? "1.3ch" : "2vh" }}
                onClick={() => setCurrpage("C")}
              >{`Upload & Finish`}</h3>
            </SelectionPaper>
          </Grid>
        </>
      </Grid>
      
      {CurrentDisplay}

    </>
  );
};

export default ReviewFrontPage;
