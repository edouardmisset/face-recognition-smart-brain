import './Navigation.css'
import Logo from '../Logo/Logo'

export default function Navigation({ onRouteChange, isSignedIn }) {
  return isSignedIn ? (
    <nav className="navigation">
      <Logo />
      <p
        onClick={() => onRouteChange('signout')}
        className="f3 underline link dim black pointer pa3"
      >
        Sign out
      </p>
    </nav>
  ) : (
    <nav className="navigation">
      <Logo />
      <p
        onClick={() => onRouteChange('register')}
        className="f3 underline link dim black pointer pa3"
      >
        Register
      </p>
      <p
        onClick={() => onRouteChange('signin')}
        className="f3 underline link dim black pointer pa3"
      >
        Sign in
      </p>
    </nav>
  )
}
