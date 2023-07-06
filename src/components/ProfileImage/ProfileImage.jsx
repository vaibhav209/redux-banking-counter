import React from "react";

const ProfileImage = () => {

  return (
    <img
      style={{
        borderRadius: "50%",
        width: "85px",
        height: "100px",
        alignSelf: "center"
      }}
      src='https://cdn.pixabay.com/photo/2012/02/23/08/33/camera-15673_1280.jpg'
      alt="photographer image"
    />
  );
};

export default ProfileImage;
