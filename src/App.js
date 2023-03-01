import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/auth/posts/PostCreateForm";
import PostPage from "./pages/auth/posts/PostPage";
import PostsPage from "./pages/auth/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import EditPostForm from "./pages/auth/posts/EditPostForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="Sorry, we could not find anything matching the keyword, try another keyword." />
            )}
          />
          <Route
            exact
            path="/fye"
            render={() => (
              <PostsPage
                message="Sorry, we could not find anything.. try another keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="Sorry, we could not find anything.. try another keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/upload" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <EditPostForm />} />
          <Route render={() => <p>Sorry, no page found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
