import axios from "axios";

// @desc   Register A New User on mailchimp
// @route  POST mailchimp/users
// @access Public
const registerUserMailchimp = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  //   const {data: key} = await axios.get("/api/config/mailchimp")
  //   const encodedkey = Buffer.from(`key`, "base64");
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Basic ${encodedkey}`,
  //     },
  //   };

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      NAME: name,
    },
  };

  await axios
    .post(`${process.env.MAILCHIMP_URL}`, data, config)
    .then(function (err, response) {
      if (
        response.status < 300 ||
        (response.status === 400 && response.body.title === "Member Exists")
      ) {
        res.status(201).json({ message: "Signed Up!" });
      } else {
        res.status(400).json({ message: "Sign Up Failed :(" });
      }
    });
});

// @desc   Get all Users on mailchimp by list
// @route  GET mailchimp/:listid
// @access Private/Admin
const getMailchimpUsersByListID = asyncHandler(async (req, res) => {});

// @desc   Get all mailchimp lists
// @route  GET mailchimp/lists
// @access Private/Admin
const getMailchimpLists = asyncHandler(async (req, res) => {});

// @desc   Get
// @route  PUT mailchimp/:list:userid/unsubscribe
// @access Private/Admin
const unsubscribeMailchimpUser = asyncHandler(async (req, res) => {});

export { registerUserMailchimp };
