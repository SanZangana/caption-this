const baseURL = "https://caption-this2.herokuapp.com/";
import { rest } from "msw";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "Sans_fitness123",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image:
          "https://res.cloudinary.com/do9fenv3i/image/upload/v1/media/../default_img_suit_xohxry",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
