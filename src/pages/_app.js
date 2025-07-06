// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import "@/styles/globals.css";
import Footer from "@/components/template/Footer";
import Logo from "@/components/template/Logo";
import Nav from "@/components/template/Nav";

export default function App({ Component, pageProps }) {
  return (
    <div className="appBolo">
      <Logo />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
