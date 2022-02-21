import "../../styles/Characters.scss";

export default function Characters({
  children: characters,
  title = "Título padrão",
}) {
  return (
    <>
      <div className="content-box">{characters}</div>
    </>
  );
}
