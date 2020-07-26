import * as React from "react";
import { useAuthState, Loading } from "react-admin";

const AuthenticatedContent = () => <div>Authenticated Content</div>;
const AnonymousContent = () => <div>UnAuthenticated AnonymousContent</div>;

const MyPage = () => {
  const { loading, authenticated } = useAuthState();
  if (loading) {
    return <Loading />;
  }
  if (authenticated) {
    return <AuthenticatedContent />;
  }
  return <AnonymousContent />;
};

export default MyPage;
