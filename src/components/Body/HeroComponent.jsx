/* eslint-disable react/prop-types */
export default function HeroComponent({ currentUser }) {
  return (
    <div>
      <h1>{`Welcome back, ${currentUser} 👋`}</h1>
    </div>
  );
}
