import "../../styles/Main.scss";

export default function Main({ children: marvelChars }) {
  return (
    <>
      <main>
        <div className="main-content">{marvelChars}</div>
      </main>
    </>
  );
}
