$("#btnSignUp").click(() => {
  $("#loginUser").animate(
    {
      width: "0",
      overflow: "hidden",
      opacity: "0",
    },
    "fast"
  );

  $("#signUp").css("width", "490px");
});
