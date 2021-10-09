import { Fragment, useState } from "react";
import { CssTextField } from "../../UI/FormInput";
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Colors } from "../../UI/colors";
import { HeadLine1 } from "../../UI/HeadLine";

const Introduction = (props) => {

  const onChangeName = (event) => {
    props.setBookName(event.target.value);
    setisColorRed(false);
  };
  const [isColorRed, setisColorRed] = useState(false);
  const onClickNext = () => {
    if (props.BookName.trim().length === 0) {
      setisColorRed(true);
      return;
    }
    props.Inc();
  };
  return (
    <Fragment>
      <HeadLine1>
        <span style={{ fontWeight: "900" }}> Welcome</span> to our{" "}
        <span
          style={{
            fontWeight: "900",
            textDecoration: `6px ${Colors.LightBlue} underline`,
          }}
        >
          {" "}
          community
        </span>{" "}
        of growing{" "}
        <span style={{ fontWeight: "900", color: Colors.purple }}>Writers</span>
        .let's start by giving a nice name to your Book.
      </HeadLine1>
      {isColorRed && (
        <h5 style={{ textAlign: "center", color: "red" }}>
          Please fill the Name first
        </h5>
      )}
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "5%",
          display: "flex",
        }}
      >
        <CssTextField
          fullWidth
          label="Name of your Book"
          id="Name_of_the_book"
          sx={{
            marginInline: "2%",
            borderRadius: "2ch",
            [`& fieldset`]: {
              borderRadius: 15,
            },
          }}
          onChange={onChangeName}
          value={props.BookName}

          /// InputProps={{className:InputCss}}
        />
        <Fab
          sx={{
            background: Colors.purple,
            "&:hover": { background: Colors.LightBlue },
          }}
          onClick={onClickNext}
        >
          <ArrowBackIcon
            sx={{
              color: "white",
              fontSize: "5ch",
              transform: "rotateY(180deg)",
            }}
          />
        </Fab>
      </div>
    </Fragment>
  );
};

export default Introduction;
