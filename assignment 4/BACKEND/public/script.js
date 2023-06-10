$(function () {
  $(document).on("submit", "#loginForm", function (e) {
    e.preventDefault();
    const email = $(this).children("#email").val();
    const password = $(this).children("#password").val();
    console.log({
      email,
      password,
    });
    $.ajax({
      url: "/api/t1/users/login",
      data: {
        email,
        password,
      },
      method: "post",
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log("error", err);
      },
    });
  });
});
