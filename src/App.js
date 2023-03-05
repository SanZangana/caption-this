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
import ProfilePage from "./pages/auth/profiles/ProfilePage";
import UsernameForm from "./pages/auth/profiles/UsernameForm";
import UserPasswordForm from "./pages/auth/profiles/UserPasswordForm";
import EditProfileForm from "./pages/auth/profiles/EditProfileForm";
import NotFound from "./components/NotFound";

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
                filter={`owner__followed__owner__account=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="Sorry, we could not find anything.. try another keyword or like a post."
                filter={`likes__owner__account=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/upload" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <EditPostForm />} />

          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <EditProfileForm />}
          />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />

          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
