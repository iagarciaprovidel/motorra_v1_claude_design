/* eslint-disable */
/* Motorra Club · App router & state */

const App = () => {
  const [route, setRoute] = React.useState({ screen: "landing", params: {} });
  const [signupOpen, setSignupOpen] = React.useState(false);
  const [authed, setAuthed] = React.useState(false);

  // Default "logged in as Carolina #042" once authed
  const currentUser = window.MC_MEMBERS["u-042"];

  // Re-render lucide icons + scroll to top only when screen changes
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route.screen]);

  const navigate = (screen, params = {}) => setRoute({ screen, params });

  const openSignup = () => setSignupOpen(true);
  const completeSignup = () => { setAuthed(true); setSignupOpen(false); setRoute({ screen: "feed", params: {} }); };

  // Public landing — always accessible
  if (route.screen === "landing") {
    return (
      <>
        <LandingScreen
          onJoinClub={openSignup}
          onOpenListing={(l) => { if (authed) navigate("detail", { id: l.id }); else openSignup(); }}
        />
        {signupOpen && <SignupScreen onClose={() => setSignupOpen(false)} onComplete={completeSignup}/>}
      </>
    );
  }

  // Logged-in screens
  const inApp = (
    <>
      {route.screen === "feed"       && <FeedScreen       navigate={navigate} currentUser={currentUser} channel={route.params.channel}/>}
      {route.screen === "browse"     && <BrowseScreen     navigate={navigate} currentUser={currentUser} categoryId={route.params.category}/>}
      {route.screen === "categories" && <CategoriesScreen navigate={navigate} currentUser={currentUser}/>}
      {route.screen === "profile"    && <ProfileScreen    navigate={navigate} currentUser={currentUser} memberId={route.params.id || currentUser.id}/>}
      {route.screen === "publish"    && <PublishScreen    navigate={navigate} currentUser={currentUser}/>}
      {route.screen === "detail"     && <DetailScreen     navigate={navigate} currentUser={currentUser} listingId={route.params.id}/>}
    </>
  );

  // If not authed and trying to access in-app screen, force signup
  if (!authed) {
    return (
      <>
        <LandingScreen onJoinClub={openSignup} onOpenListing={() => openSignup()}/>
        <SignupScreen onClose={() => navigate("landing")} onComplete={completeSignup}/>
      </>
    );
  }

  return inApp;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
