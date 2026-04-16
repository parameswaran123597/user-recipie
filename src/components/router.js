import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Register from "./Register";
import Login from "./Login";
import Password from "./Password";
import Profile from "./Profile";
import AddRecipie from "./AddRecipie";
import SharedRecipie from "./SharedRecipie";
import RecipeList from "./RecipieList";
import MyRecipie from "./MyRecipie";
import RecipeDetail from "./MyRecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // Layout
    children: [
      { path: "", element: <RecipeList /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "pass", element: <Password /> },
      { path: "profedit", element: <Profile /> },
      { path: "addrecipie", element: <AddRecipie /> },
      { path: "share", element: <SharedRecipie /> },
      { path: "list", element: <RecipeList /> },
      { path: "mylist", element: <MyRecipie /> },
      { path: "myonerec", element: <RecipeDetail /> }
    ]
  }
]);

export default router;