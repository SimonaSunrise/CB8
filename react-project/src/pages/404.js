import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="Error">
      <h2>OOOOooops . . .</h2>
      <h3>Qualocosa è andato storto,</h3>
      <h3>questo sembra essere un vicolo cieco. </h3>
      <h4> Torna indietro alla</h4>
      <Link href="/">
        <button className="Btn_Home"> HOME </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
