import "../../styles/Header.scss";

export default function Header({ title = "Título da página" }) {
  return (
    <>
      <header>
        <div className="header-content">
          <h1 className="text-center font-semibold text-xl">{title}</h1>
        </div>
      </header>
    </>
  );
}
