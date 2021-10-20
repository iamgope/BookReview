import Avatar from "@mui/material/Avatar";
import {
    Card,
    Typography,
    Box
  } from "@mui/material";

export const InfoCard = (props) => {
    const A = props.A;
    const B = props.B;
    return (
      <Card
        sx={{
          padding: "2%",
          marginInline: "3%",
          maxWidth: 300,
          textAlign: "center",
        }}
      >
        <h1>{A}</h1>
        <p>{B}</p>
      </Card>
    );
  };

const ProfileDetails=()=>{
return <div
style={{
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "5%",
}}
>
<Avatar
  sx={{
    width: "14vw",
    height: "14vw",
    marginInline: "2vw",
    marginTop: "1%",
  }}
>
  A
</Avatar>
<Box sx={{ marginInline: "5vw" }}>
  <Typography variant="h4">Iamgope (Aman Gope)</Typography>
  <div style={{ display: "flex", marginTop: "5%" }}>
    <InfoCard A={1} B={"Books Published"} />
    <InfoCard A={2} B={"Books Pending "} />
    <InfoCard A={5} B={"Books Reviewd "} />
  </div>
</Box>
</div>
}
export default ProfileDetails;