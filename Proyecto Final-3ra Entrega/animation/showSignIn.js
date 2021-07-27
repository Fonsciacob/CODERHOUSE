const showSignIn = () => {
  $("#loginUser").animate(
    {
      width: "490px",
      overflow: "hidden",
      opacity: "1",
    },
    "fast"
  );
  $("#signUp").css("width", "0");
};
